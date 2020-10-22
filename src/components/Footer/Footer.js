import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-custom">
        <div className="container">
          <p className="float-right mb-0">
            <a href="/">Subir</a>
          </p>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Mi Proyecto, Inc. &middot;{" "}
            <a href="/">Política de Privacidad</a> &middot;{" "}
            <a href="/">Términos</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
