import React from "react";

function BackBtn(){
    return(
        <a id="back-btn" href="/" type="button" className="btn row d-flex">
            <div className="col-1"><i class="fa-solid fa-chevron-left"/></div>
            <div className="col-9">Voltar</div>
        </a>
    )
}

export default BackBtn;