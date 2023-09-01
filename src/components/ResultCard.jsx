import React from "react";
import bulaBtn from "../assets/pdf-btn.png"
import safeIcon from "../assets/safe-icon.png"
function ResultCard (props){
    //props: safety (1 - safe / 2 - unsafe / 3 - unknown)
    const safety = props.seg;
    const latBarColor = safety === 1 ? "#294F40" : safety === 2 ? "#990000" : "#e1ad01";
    const marca = props.marca;
    const droga = props.droga;
    let alergenicos = props.alergenicos;
    alergenicos = alergenicos.map((item, index) => {
        return index !== alergenicos.length-1 && index !== alergenicos.length-2 ? item+", " : index === alergenicos.length-2 ? item+" e " : item+"."
    })
    const urlBula = `https://bula.vercel.app/pdf?id=${props.bula}`
    return(
            
        <div class="card-container result-card container mb-4" style={{textAlign:"left"}}>
            <div class="c c1 latBar" style={{backgroundColor:latBarColor}}></div>
            <div class="c c2">
                <div class="ps-2 pt-2 r sr1 marca">{marca.toUpperCase()}</div>
                <div class="ps-2 r sr2 droga">{droga.toUpperCase()}</div>
                <div className="ps-2 r sr1 marca forma">{props.forma}</div>
                <div class="r r2 ">
                    <div class="ps-2 sc sc1 pt-3">
                        {safety===1 && <img className="bgl" src={safeIcon} alt="" />}
                        {safety===2 && <p className="bgl" style={{color:"#294F40", fontWeight:600, fontStyle:"italic"}}>Contem {alergenicos}</p>}
                        {safety===3 && <div style={{color:"#294F40", fontWeight:600, fontStyle:"italic"}} className="bgl"><i style={{fontSize:"26px", color:latBarColor}} class="sr1 col-1 fa-solid fa-triangle-exclamation"/> Informação indisponível.</div>}
                    </div>
                    <div class="sc sc2">
                        <a href={urlBula} target="_blank">
                            <img className="bgl" src={bulaBtn} alt="" />
                        </a>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ResultCard;