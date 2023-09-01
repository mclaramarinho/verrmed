import React from "react";

function ResultNotFound (props){
    return(
        <div className="container" id="ResultNotFound">
            <div className="row mb-3">
                <i style={{fontSize:"9vh"}} class="col fa-regular fa-face-frown-open"></i>
            </div>
            <div className="row">
                <div className="col L1">NENHUM RESULTADO ENCONTRADO!</div>
            </div>
            <div className="row">
                <div className="col L2">Verifique o nome do medicamento e tente novamente.</div>
            </div>
        </div>
    )
}

export default ResultNotFound;