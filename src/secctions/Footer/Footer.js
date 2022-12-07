import React from "react";
//import logo from "../../assets/images/footer-logo.svg";
import "./style.scss";

const Footer = () => {
  return (
    <section className="container-footer">
      <p>2022 © All rights reserved.</p>
      <a className="footerlink" href="#home">
        {/*<img src={logo} alt="footer-logo"/*/}
        TWU
      </a>
    </section>
  );
};

export default Footer;
