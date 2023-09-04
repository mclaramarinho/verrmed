import React from "react";

function AccordionItem(props){
    return(
        <div className="accordion-item border-10 no-outline-shadow">
            <h2 className="accordion-header">
                <button data-bs-target={"#"+props.id}  className="accordion-button border-10 no-outline-shadow semi-bold dark-green off-white-bg collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls={props.id}>
                    {props.question}
                </button>
            </h2>
            <div id={props.id} className="accordion-collapse collapse" data-bs-parent={props.parent}>
                    <div className="accordion-body dark-green off-white-bg">{props.answer}</div>
            </div>
        </div>
    )
}

export default AccordionItem;