import React from "react";
import navLogo from "../assets/logo-navbar.png"
function Navbar (){
    return(
        <div className="navbar navbar-expand-lg px-4 py-5 " id="navbar">
            <div className="container-fluid">
                <a href="" className="navbar-brand"><img src={navLogo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-options" aria-controls="menu-options" aria-expande="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu-options">
                    <ul className="navbar-nav mt-3 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <a href="" className="nav-link active" aria-current="page">
                                SOBRE NOS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active" aria-current="page">
                                CONTATO
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active" aria-current="page">
                                PERGUNTAS FREQUENTES
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;