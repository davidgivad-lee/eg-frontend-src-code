import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-sm-around login-row">
        <div className="col-md-5 p-5 bg-light register-container">
          <h3 className="text-center">No tengo usuario!</h3>
          <p className="text-center"> ¿Desea crear una cuenta nueva?</p>
          <p className="font-weight-light text-center">
            {" "}
            Con la cuenta pordras realizar:{" "}
          </p>
          <p className="font-weight-light text-center"> BlablaBlablaBlabla </p>
          <p className="font-weight-light text-center"> BlablaBlablaBlabla </p>
          <Link to="/register">
            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </Link>
        </div>
        <div className="col-md-5 p-5 bg-light">
          <form>
            <div className="form-group">
              <label htmlFor="userEmail">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="example@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                placeholder="*********"
              />
            </div>
          </form>
          <Link to="/">
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
