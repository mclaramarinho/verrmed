import React from "react";

function Footer (props){
    return(
        <div id="footer" style={props.css} className={`${props.class} py-2 position-${props.position} bottom-0 w-100 text-center`}>
            Não se automedique. Procure um médico ou farmacêutico.
        </div>
    )
}

export default Footer;