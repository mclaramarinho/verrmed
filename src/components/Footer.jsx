import React from "react";

function Footer (props){
    return(
        <div id="footer" className={`${props.class} py-2 position-${props.position} bottom-0 w-100 text-center semi-bold off-white`}>
            Não se automedique. Procure um médico ou farmacêutico.
        </div>
    )
}

export default Footer;