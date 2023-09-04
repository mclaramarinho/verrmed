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
            
        <div class="def-container border-10 d-flex result-card container mb-4 align-left">
            <div class="c1 border-t-l border-b-l d-inline-block" style={{backgroundColor:latBarColor}}></div>
            <div class="border-b-r border-t-r w-100">
                <div class="ps-2 pt-2 off-white-bg border-t-r dark-green marca">{marca.toUpperCase()}</div>
                <div class="ps-2 off-white-bg bold dark-green droga">{droga.toUpperCase()}</div>
                <div className="ps-2 off-white-bg marca dark-green">{props.forma}</div>
                <div class="d-flex">
                    <div class="ps-2 off-white-bg mw-100 sc1 pt-3">
                        {safety===1 && <img className="off-white-bg" src={safeIcon} alt="" />}
                        {safety===2 && <p className="off-white-bg dark-green italic">Contém {alergenicos}</p>}
                        {safety===3 && 
                            <div className="italic semi-bold dark-green container off-white-bg marca">
                                <div className="row">
                                    <i style={{fontSize:"20px", color:latBarColor}} class="no-pad off-white-bg col-1 fa-solid fa-triangle-exclamation"/>
                                    <div style={{paddingLeft:5}} className="col-11 marca off-white-bg">Dados insuficientes</div>
                                </div>
                                <div className="row">
                                    <div className="col-1 no-pad off-white-bg"></div>
                                    <div style={{paddingLeft:5}} className="col-11 marca off-white-bg">Consulte a bula</div>
                                </div>
                            </div>}
                    </div>
                    <div class="off-white-bg mw-100 sc2 border-b-r align-right">
                        <a href={urlBula} target="_blank">
                            <img className="off-white-bg" src={bulaBtn} alt="" />
                        </a>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ResultCard;