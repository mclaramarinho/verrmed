import React from "react";
import headerLogo from "../assets/logo-about-contact.png"
function Header(props){
    return(
        <div className="text-center">
            <img src={headerLogo} alt="" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;