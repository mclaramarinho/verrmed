import React from "react";

function SobreInfo(props){
    return(
        <div  className=" sobre-info text-center">
                <h3>{props.title.toUpperCase()}</h3>
                <p>{props.content}</p>
        </div>
    )
}

export default SobreInfo;