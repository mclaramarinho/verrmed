import React from "react";

function AccordionItem(props){
    return(
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button data-bs-target={"#"+props.id}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls={props.id}>
                    {props.question}
                </button>
            </h2>
            <div id={props.id} className="accordion-collapse collapse" data-bs-parent={props.parent}>
                    <div className="accordion-body">{props.answer}</div>
            </div>
        </div>
    )
}

export default AccordionItem;