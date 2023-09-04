import React from "react";

function SobreInfo(props){
    return(
        <div  className=" sobre-info dark-green text-center">
                <h3 className="semi-bold">{props.title.toUpperCase()}</h3>
                <p>{props.content}</p>
        </div>
    )
}

export default SobreInfo;