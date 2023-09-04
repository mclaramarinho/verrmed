import React from "react";
import AltNav from "../components/AltNavbar";
import Header from "../components/Header";
import SobreInfo from "../components/SobreInfo";
import sobre_Content from "../sobre_Content";
import TeamMember from "../components/TeamMember";
import teamMembers from "../teamMembers";
import Footer from "../components/Footer";
function Sobre (){
    return (
        <div>
            <AltNav />
            
            <div className="def-container" id="sobre">
                <Header title={"SOBRE"} />
                {sobre_Content.map(item => 
                    <SobreInfo title={item.title} content={item.content} />
                )}
                <div className="container">
                    {teamMembers.map(item => {
                        console.log(item.avatar)
                        return item.nome.length > 0 && (
                            <TeamMember
                                align={item.id % 2 === 0 ? "right" : "left"}
                                avatar={item.avatar}
                                nome={item.nome}
                                funcao={item.funcao}
                            />
                        )
                    })}
                </div>
                <p className="text-center dark-green mt-5" style={{fontStyle:"italic"}}>verrmed@gmail.com</p>
            </div>
            <Footer position={"static"}/>
        </div>
    )
}

export default Sobre;