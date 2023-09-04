import React, { useEffect, useState } from "react";
import Splash from "../components/Splash";
import Navbar from "../components/Navbar";
import SearchArea from "../components/SearchArea";
import ResultCard from "../components/ResultCard";
import { ClipLoader } from "react-spinners";
import TopoBtn from "../components/TopoBtn";
import Footer from "../components/Footer";
import apresentacoes from "../apresentacoes";
import ResultNotFound from "../components/ResultNotFound";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function Main(){
    let pages = 0;
    const [splash, setSplash] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setSplash(false)
            setFooterPosition("fixed")
        }, 2000);
    })
    const [isScrollable, setIsScrollable] = useState(document.querySelector("html").scrollHeight > window.innerHeight)
    const [resultado, setResultado] = useState([]);
    const [textError, setTextError] = useState(false);
    const [alergError, setAlergError] = useState(false);
    const [alergias, setAlergias] = useState([]);

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
    
    async function handleBusca(){
        setSearchEnd(false)
        const text = document.getElementById("nome-med").getAttribute("value");
        text===null || text.length < 1 ? setTextError(true) : setTextError(false);
        let alerg = Array.from(document.querySelectorAll(".chip"));
        setAlergias(alerg.map(item => item.innerText))

        alerg===null || alerg.length < 1 ? setAlergError(true) : setAlergError(false);
        if((alerg.length >= 1) && (text.length >= 1)){
            setIsScrollable(false)
            await getPages(text);
            await generateResult(text, pages);
            setIsScrollable(document.querySelector("html").scrollHeight > window.innerHeight)
        }
        
    }
    
    function getPrincipioAtivo (codigo, what){
        const req = new XMLHttpRequest();
        req.open("GET", `https://bula.vercel.app/medicamento/${codigo}`)
        req.send();

        if(what.includes("principioAtivo")){
            return new Promise ((resolve) => {
                req.onload = () =>{
                    let res = req.response;
                    res = JSON.parse(res);
                    resolve(res.principioAtivo)
                }
            })
        }else if(what.includes("apresentacao")){
            return new Promise ((resolve) => {
                req.onload = () =>{
                    let res = req.response;
                    res = JSON.parse(res);
                    res = (res.apresentacoes[0].apresentacao);
                    resolve(res)
                }
            })
        }
        
        
            
    }

    
    const [searchEnd, setSearchEnd] = useState(false);
    const [loading, setLoading] = useState(false);
    async function generateResult(text, p) {
        setFooterPosition("fixed")
        setLoading(true);
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
                        const princ = await getPrincipioAtivo(item.numProcesso, "principioAtivo")
                        let forma = await getPrincipioAtivo(item.numProcesso, "apresentacao")
                        for(let i = 0; i < apresentacoes.length; i++){
                            if(forma.includes(apresentacoes[i].abrev)){
                                forma = apresentacoes[i].apresentacao;
                                break;
                            }
                        }
                        previa.push([item.numProcesso, princ, item.nomeProduto, item.razaoSocial, item.idBulaPacienteProtegido, forma]);
                        return setResultado([previa])
                    })
                    resolve();
                };
                
            })
        }
        
        setTimeout(() => {
            return setSearchEnd(true), setLoading(false), setIsScrollable(document.querySelector("html").scrollHeight > window.innerHeight), setFooterPosition("sticky");
        }, [3000]);
        
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
    
    const [footerPosition, setFooterPosition] = useState();
    const [acceptTerms, setAcceptTerms] = useState(true);

    if(splash){
        return <Splash />
    }else{
        return(
            <div>
                <Dialog style={{backgroundColor:"transparent"}} open={acceptTerms}>
                    <DialogTitle style={{fontWeight:700,color:"#294F40"}}>TERMOS DE USO</DialogTitle>
                    <DialogContent style={{fontWeight:600,color:"#294F40"}}>A empresa destaca a segurança dos usuários ao usar o Verr Med, um serviço informativo sobre medicamentos. O aplicativo não substitui uma consulta médica e não se responsabiliza por danos causados pela automedicação, enfatizando a importância de buscar orientação de um profissional de saúde para decisões seguras sobre medicamentos.</DialogContent>
                    <DialogActions>
                        <button className="btn btn-md" onClick={()=>window.history.back(-1)} style={{backgroundColor:"#990000", opacity:0.5, color:"white", fontWeight:700}}>Não aceito</button>
                        <button className="btn btn-md" onMouseUp={()=>setAcceptTerms(false)} style={{backgroundColor:"#294F40", color:"white", fontWeight:700}}>Aceito</button>
                    </DialogActions>
                </Dialog>


                <Navbar/>
                <SearchArea 
                    textError={textError}
                    alergError={alergError}
                    handleBusca={handleBusca}
                />
                
                <div className="text-center mb-5">
                    {resultado.length > 0 && searchEnd===true && (
                        resultado[0].map((item) => {
                            const alergenico = verificarAlergenico(item)
                            const seg = alergenico.includes("false") ? 3 : alergenico.length > 0 ? 2 : 1;
                            if(!item[5].includes("Injetável")){
                                return <ResultCard forma={item[5]} alergenicos={alergenico} seg={seg} droga={item[2]} marca={item[3]} bula={item[4]}/>
                            }
                        })
                        
                    )}
                    {
                        searchEnd===true && resultado.length === 0 &&(
                            <ResultNotFound />
                        )
                    }

                    {loading && (<ClipLoader
                        color="#294F40"
                        loading={true}
                        size={50}
                        cssOverride={{margin:"0 auto"}}                
                    />)}

                    {isScrollable && <TopoBtn />}
                </div>
                <Footer position={footerPosition} />
            </div>)
    }
}

export default Main;