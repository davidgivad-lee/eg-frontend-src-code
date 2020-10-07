import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../redux/User/userActions.js";

import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorForm, addError] = useState({});
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/mi-cuenta");
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

    if (email === "") {
      errors.email = "Debes ingresar un email.";
    } else if (!validEmail) {
      errors.email = "Debes ingresar un email con formato válido.";
    }

    if (password === "") {
      errors.password = "Debes ingresar una contraseña";
    }

    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(signin(email, password));
    }
  };

  return (
    <div className="row justify-content-sm-around login-row">
      <div className="col-md-5 p-5 bg-light register-container">
        <h3 className="text-center">No tengo usuario!</h3>
        <p className="text-center"> ¿Desea crear una cuenta nueva?</p>
        <p className="font-weight-light text-center">
          Con la cuenta pordras realizar:
        </p>
        <p className="font-weight-light text-center"> BlablaBlablaBlabla </p>
        <p className="font-weight-light text-center"> BlablaBlablaBlabla </p>
        <Link to="/register">
          <button type="submit" className="btn btn-dark w-100">
            Registrar
          </button>
        </Link>
      </div>
      <div className="col-md-5 p-5 bg-light">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form>
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
            <label htmlFor="userPassword">Contraseña</label>
            <input
              type="password"
              className={
                hasError("password")
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
            "Ingresar"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
