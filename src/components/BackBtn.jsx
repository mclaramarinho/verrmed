import React from "react";

function BackBtn(){
    return(
        <a id="back-btn" href="/" type="button" className="btn row d-flex dark-green bold no-outline-shadow no-pad">
            <div className="col-1 d-inline-block"><i className="fa-solid fa-chevron-left"/></div>
            <div className="col-9">Voltar</div>
        </a>
    )
}

export default BackBtn;