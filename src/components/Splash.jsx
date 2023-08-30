import React from "react";
import splashLogo from "../assets/logo-splash-screen.png"
import { BarLoader } from "react-spinners";
function Splash (){
    return(
        <div style={{backgroundColor: "#E5F2ED", height:"100vh"}}>
            <div className="position-absolute translate-middle top-50 start-50" style={{position: "fixed", boxSizing:"border-box"}}>
                <img src={splashLogo} alt="" style={{maxWidth:"90vw"}}/>
                <BarLoader
                    color={"#294F40"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    cssOverride={{margin:"0 auto", marginTop:"2vh"}}
                />
            </div>
        </div>
    )
}

export default Splash;