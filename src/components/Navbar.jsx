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
                    <ul className="navbar-nav align-right mt-3 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <a href="/sobre" className="dark-green bold nav-link active" aria-current="page">
                                SOBRE NÓS
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="/contato" className="dark-green bold nav-link active" aria-current="page">
                                CONTATO
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="/faq" className="nav-link dark-green bold active" aria-current="page">
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