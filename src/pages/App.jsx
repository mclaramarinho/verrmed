import React, { useEffect, useState } from "react";
import Splash from "../components/Splash";
import Navbar from "../components/Navbar";
import SearchArea from "../components/SearchArea";
import ResultCard from "../components/ResultCard";

function App(){
    let pages = 0;
    const [splash, setSplash] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setSplash(false)
        }, 2000);
    })
    function getPages (text){
        const req = new XMLHttpRequest();
        req.open("GET", `https://bula.vercel.app/pesquisar?nome=${text}`);
        req.send();
        return new Promise((resolve)=>{
            req.onload = () =>{
                let res = req.response;
                res = JSON.parse(res);
                pages = res.totalPages;
                resolve();
            }
            
        })
    }
    const [resultado, setResultado] = useState([]);
    const [textError, setTextError] = useState(false);
    const [alergError, setAlergError] = useState(false);
    const [alergias, setAlergias] = useState([]);

    async function handleBusca(){
        const text = document.getElementById("nome-med").getAttribute("value");
        text===null || text.length < 1 ? setTextError(true) : setTextError(false);
        let alerg = Array.from(document.querySelectorAll(".chip"));
        setAlergias(alerg.map(item => item.innerText))

        alerg===null || alerg.length < 1 ? setAlergError(true) : setAlergError(false);
        if((alerg.length >= 1) && (text.length >= 1)){
            console.log("triggered")
            await getPages(text);
            await generateResult(text, pages);
        }
        
    }
    
    function getPrincipioAtivo (codigo){
        const req = new XMLHttpRequest();
        req.open("GET", `https://bula.vercel.app/medicamento/${codigo}`)
        req.send();
        let response;
        return new Promise ((resolve) => {
            req.onload = () =>{
                let res = req.response;
                res = JSON.parse(res);
                res = res.principioAtivo;
                response = res;
                resolve(response)
            }
        })
        
            
    }
    
    async function generateResult(text, p) {
        setResultado([])
        let previa = [];
        for (let i = 1; i <= p; i++) {
            const req = new XMLHttpRequest();
            req.open("GET", `https://bula.vercel.app/pesquisar?nome=${text}&pagina=${i}`);
            req.send();
            await new Promise ((resolve) => {
                req.onload = () => {
                    let res = req.response;
                    res = JSON.parse(res);
                    res.content.map(async (item) => {
                    const princ = await getPrincipioAtivo(item.numProcesso)
                    return previa.push([ item.numProcesso, princ, item.nomeProduto, item.razaoSocial, item.idBulaPacienteProtegido ]);
                    })
                    resolve();
                    return setResultado([previa])
                };
            })
        }
    }
    function verificarAlergenico(item){
        let response =[];
        if(item[1]===null){
            response.push("false");
        }else{
            for(let i = 0; i < alergias.length; i++){
                const principioAtivo = item[1].toLowerCase();
                const alergiaAvaliada = alergias[i].toLowerCase();
                if(principioAtivo.includes(alergiaAvaliada)){
                    response.push(alergiaAvaliada)
                }
            }
        }
        return response;
    }
    if(splash){
        return <Splash />
    }else{
        return(
            <div>
                <Navbar/>
                <SearchArea 
                    textError={textError}
                    alergError={alergError}
                    handleBusca={handleBusca}
                />
                {resultado.length > 0 && (
                    resultado[0].map(item => {
                        const alergenico = verificarAlergenico(item)
                        const seg = alergenico.includes("false") ? 3 : alergenico.length > 0 ? 2 : 1;
                        return <ResultCard alergenicos={alergenico} seg={seg} droga={item[2]} marca={item[3]} bula={item[4]}/>
                    })
                )}
            </div>)
    }
}

export default App;