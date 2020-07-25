import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-sm-center register-row">
        <div className="col-sm-6 p-5 bg-light">
          <h3 className="text-center">Crear una cuenta nueva</h3>
          <p className="font-weight-light text-center">Completa tus datos</p>

          <form>
            <div className="form-group">
              <label htmlFor="userLastName">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="userLastName"
                placeholder="Fulano"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userFirstName">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="userFirstName"
                placeholder="Rodriguez"
              />
            </div>
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
              <label htmlFor="userPhoneNumber">Telefono o celular</label>
              <input
                type="text"
                className="form-control"
                id="userPhoneNumber"
                placeholder="09x xxx xxx"
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
            <div className="form-group">
              <label htmlFor="userPasswordVerification">
                Verificar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="userPasswordVerification"
                placeholder="*********"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Crear
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
