import React from "react";
import "./Footer.css"
import SpringLogo from "./spring-logo.png";
import MySQL from "./MySQL.png";

function Footer() {
    return (
        <div className="footer-container">
            <div className="technologies" >
                <h6 style ={{"marginBottom" : "2rem"}}>Technologies</h6>
                <div className = "technologies-grid">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-java"></i>
                    <img src={SpringLogo}></img>
                    <img src={MySQL}></img>
                </div>
                <p style ={{"marginTop" : "2rem"}}>Details in Resume</p>
            </div>

        </div>
    );
}

export default Footer;