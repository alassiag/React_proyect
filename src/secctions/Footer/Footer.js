
import React from 'react'
import logo from "../../assets/images/footer-logo.svg"
import "./style.scss"



const Footer = () => {
    
    return (
        <section className="container-footer">
            <p>2020 © All rights reserved.</p> 
            <a href="#home">
               <img src={logo} alt="footer-logo"/>
            </a>
        </section>
    );
}

export default Footer