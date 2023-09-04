import React, { createRef, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import meds from "../meds";
import Dialog from '@mui/material/Dialog';
import { DialogContent } from "@mui/material";

function SearchArea (props){

    const busca = props.handleBusca;

    // let alergias = meds.sort();

    let alergias = meds.sort(new Intl.Collator('pt').compare)
    alergias = alergias.map((item, index) =>{
        return {name: item, id:index+1}
    })
    const [helpOne, setHelpOne] = useState(false);
    const [helpTwo, setHelpTwo] = useState(false);

    const [textValue, setTextValue] = useState("");
    let textError = props.textError;
    let alergError = props.alergError;

    function handleText(e){
        setTextValue(e.target.value)
    }
    const multiselectRef = createRef();
    
    return(
        <div className="container def-container">
            <Dialog className="transparent-bg" open={helpOne} onClose={()=>setHelpOne(false)}>
                <DialogContent>Você deve inserir o nome do medicamento que deseja pesquisar</DialogContent>
            </Dialog>
            <Dialog className="transparent-bg" open={helpTwo} onClose={()=>setHelpTwo(false)}>
                <DialogContent>Você deve inserir 1 ou mais alergias para realizar a busca</DialogContent>
            </Dialog>

            <div className="textInput">
                <label className="form-label dark-green bold" htmlFor="nome-med">NOME DO MEDICAMENTO <i onClick={()=>setHelpOne(true)} class="fa-solid fa-circle-info"></i></label>
                <input value={textValue} onChange={handleText} placeholder="Escreva o nome do medicamento..." className="form-control dark-green no-outline-shadow off-white-bg" type="text" id="nome-med"/>
                {textError && <p className="error-msg">Campo obrigatório</p>}
            </div>
            <div>
                <label className="form-label dark-green bold" htmlFor="alergy-select">ALERGIAS <i onClick={()=>setHelpTwo(true)} class="fa-solid fa-circle-info"></i></label>
                <Multiselect
                    options={alergias}
                    displayValue="name"
                    placeholder="Selecione uma ou mais alergias..."
                    hidePlaceholder
                    emptyRecordMsg="Nenhuma opção restante"
                    ref={multiselectRef}
                    id="alergy-select"
                />
                {alergError && <p className="error-msg">Campo obrigatório</p>}

            </div>
            <div className="text-center mb-5">
                <div className="row mt-4 mb-2">
                    <div className="col"></div>
                    <div className="col-md-6 col-sm-8 col-9">
                        <button onMouseUp={(e)=>{e.stopPropagation(); busca()}} className="btn btn-lg bold buscar w-75 dark-green-bg light-green">BUSCAR</button>
                    </div>
                    <div className="col"></div>
                </div>
                
                <a href="#" onClickCapture={() => multiselectRef.current.resetSelectedValues()} className="limpar bold dark-green no-outline-shadow">LIMPAR FILTROS</a>
            </div>
        </div>
    )
}

export default SearchArea;