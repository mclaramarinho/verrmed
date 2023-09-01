import React from "react";
import avatarDef from "../assets/avatar-default.png"

function TeamMember(props){
    const align = props.align;
    const avatar = props.avatar.length===0 ? avatarDef : props.avatar;
    if(align==="left"){
        return(
            <div className="row mb-4" id="team-member-container">
                <div className="col-3">
                    <img className="mw-100 avatar" src={avatar} alt="" />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col member-name no-pad" >
                            {props.nome.toUpperCase()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col member-funcao no-pad" >
                            {props.funcao.toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
    )}else if(align==="right"){
        return(
            <div className="row mb-4" style={{textAlign:"right"}} id="team-member-container">
                <div className="col">
                    <div className="row">
                        <div className="col member-name no-pad" >
                            {props.nome.toUpperCase()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col member-funcao no-pad">
                           {props.funcao.toUpperCase()} 
                        </div>
                    </div>
                </div>
                
                <div className="col-3">
                    <img className="mw-100 avatar" src={avatar} alt="" />
                </div>
                
            </div>
    )}
}

export default TeamMember;