import React from "react";
import FAQ_Content from "../FAQ_Content";
import AccordionItem from "../components/AccordionItem";
import AltNav from "../components/AltNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
function FAQ (){

    return (
        <div className="altPage">
            <AltNav />
            <Header title={"PERGUNTAS FREQUENTES"}/>
            <div className="accordion" id="faq">
                {FAQ_Content.map(item => {
                    return <AccordionItem
                        id={item.id}
                        question={item.p.toUpperCase()}
                        answer={item.r}
                        parent="#faq"
                    />
                })}
            </div>
            <Footer position={"static"}/>
        </div>
    )

}

export default FAQ;