import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { signup } from "../../redux/User/userActions.js";
import "./Register.scss";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errorForm, addError] = useState({});

  const userSignin = useSelector((state) => state.userSignin);
  const userSigninInfo = userSignin.userInfo;

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;

  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/mi-cuenta";

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
      history.go(0);
    }
    if (userSigninInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let errors = {};
    const expression = /\S+@\S+/;
    const validEmail = expression.test(String(email).toLowerCase());

    if (firstName === "") {
      errors.firstName = "Debes ingresar un nombre.";
    }
    if (lastName === "") {
      errors.lastName = "Debes ingresar un apellido.";
    }
    if (email === "") {
      errors.email = "Debes ingresar un email.";
    } else if (!validEmail) {
      errors.email = "Debes ingresar un email con formato válido.";
    }
    if (telNumber === "") {
      errors.telNumber = "Debes ingresar un número de teléfono o celular.";
    }
    if (password === "") {
      errors.password = "Debes ingresar una contraseña.";
    }
    if (checkPassword === "" || password !== checkPassword) {
      errors.checkPassword =
        "Debes ingresar la misma contraseña que la anterior.";
    }

    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(signup(firstName, lastName, email, telNumber, password));
    }
  };
  return (
    <div className="row justify-content-sm-center register-row">
      <div className="col-sm-8 col-lg-6 p-5 bg-light">
        <h3 className="text-center">Crear una cuenta nueva</h3>
        <p className="font-weight-light text-center">Completa tus datos</p>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form>
          <div className="form-group">
            <label htmlFor="userLastName">Nombre</label>
            <input
              type="text"
              className={
                hasError("firstName")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="userFirstName"
              placeholder="Fulano"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div
              className={hasError("firstName") ? "invalid-feedback" : "hidden"}
            >
              {errorForm.firstName}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userFirstName">Apellido</label>
            <input
              type="text"
              className={
                hasError("lastName")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="userLastName"
              placeholder="Rodriguez"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div
              className={hasError("lastName") ? "invalid-feedback" : "hidden"}
            >
              {errorForm.lastName}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">E-mail</label>
            <input
              type="email"
              className={
                hasError("email") ? "form-control is-invalid" : "form-control"
              }
              id="userEmail"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={hasError("email") ? "invalid-feedback" : "hidden"}>
              {errorForm.email}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userPhoneNumber">Telefono o celular</label>
            <input
              type="text"
              className={
                hasError("telNumber")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="userTelNumber"
              placeholder="09x xxx xxx"
              onChange={(e) => setTelNumber(e.target.value)}
            />
            <div
              className={hasError("telNumber") ? "invalid-feedback" : "hidden"}
            >
              {errorForm.telNumber}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Contraseña</label>
            <input
              type="password"
              className={
                hasError("telNumber")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="userPassword"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={hasError("password") ? "invalid-feedback" : "hidden"}
            >
              {errorForm.password}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userPasswordVerification">
              Verificar Contraseña
            </label>
            <input
              type="password"
              className={
                hasError("checkPassword")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="userCheckPassword"
              placeholder="*********"
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <div
              className={
                hasError("checkPassword") ? "invalid-feedback" : "hidden"
              }
            >
              {errorForm.checkPassword}
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-dark w-100"
          disabled={loading}
          onClick={submitHandler}
        >
          {loading ? (
            <div>
              <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </div>
          ) : (
            "Registrar"
          )}
        </button>
      </div>
    </div>
  );
};

export default Register;
