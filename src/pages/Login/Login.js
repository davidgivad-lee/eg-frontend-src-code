import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button/Button";
import { signin } from "../../redux/User/userActions.js";

import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorForm, addError] = useState({});
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/mi-cuenta";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  const submitRegister = (e) => {
    if (props.location.search) {
      props.history.push("/register?redirect=checkout");
    } else {
      props.history.push("/register");
    }
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

        <Button
          text={"Registrar"}
          submitHandler={submitRegister}
          customStyle={"w-100"}
        />
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
        <Button
          loading={loading}
          text={"Ingresar"}
          submitHandler={submitHandler}
          customStyle={"w-100"}
        />
      </div>
    </div>
  );
};

export default Login;
