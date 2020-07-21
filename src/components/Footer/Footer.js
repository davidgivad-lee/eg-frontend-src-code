import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="float-right">
            <a href="#">Subir</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mi Proyecto, Inc. &middot;{" "}
            <a href="#">Política de Privacidad</a> &middot;{" "}
            <a href="#">Términos</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
