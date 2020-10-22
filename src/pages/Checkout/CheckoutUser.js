import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { update } from "../../redux/User/userActions";
import FormGroup from "../../components/Form/FormGroup";
import Button from "../../components/Button/Button";
import checkCircle from "../../assets/icons/checkCircle.svg";

const CheckoutUser = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, successShipping, successInvoice } = userUpdate;
  const userInfoUpdate = userUpdate.userInfo;
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [telNumber, setTelNumber] = useState(userInfo.telNumber || "");
  const [errorForm, addError] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfoUpdate && !successShipping && !successInvoice) {
      props.collapseRef("collapseOne");
      props.collapseRef("collapseTwo");
    }
    return () => {
      //
    };
  }, [userInfoUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    let errors = {};

    if (firstName === "") {
      errors.firstName = "Debes ingresar un nombre.";
    }
    if (lastName === "") {
      errors.lastName = "Debes ingresar un apellido.";
    }
    if (telNumber === "") {
      errors.telNumber = "Debes ingresar un número de teléfono o celular.";
    }

    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(update(userInfo._id, firstName, lastName, telNumber));
    }
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  return (
    <div className="card py-4 border-top-0 border-right-0 border-left-0 border-bottom">
      <div className="card-header bg-transparent border-0 p-0" id="headingOne">
        <button
          className="btn btn-block p-0 text-left text-decoration-none shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <img
            src={checkCircle}
            className="mb-2 text-secondary"
            alt=""
            width="32"
            height="32"
            title="Bootstrap"
          />
          <h3 className="d-inline-block ml-4 mb-0 font-weight-light text-body">
            Cliente
          </h3>
        </button>
      </div>

      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
        ref={props.setRef}
      >
        <div className="card-body px-0 py-4">
          <p className="font-15">Datos del Cliente</p>
          <form>
            <div className="form-group">
              <label className="font-13 text-black-50" htmlFor="emailInput">
                Email:
              </label>
              <input
                readOnly
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                value={userInfo.email}
              />
            </div>
            <div className="form-row">
              <FormGroup
                customStyle="col-md-6"
                name="firstName"
                labelName="Nombre"
                placeHolder="Nombre Fulano"
                value={firstName}
                setValue={setFirstName}
                checkError={hasError}
                errorMsg={errorForm.firstName}
              />
              <FormGroup
                customStyle="col-md-6"
                name="lastName"
                labelName="Apellido"
                placeHolder="Apellido Rodriguez"
                value={lastName}
                setValue={setLastName}
                checkError={hasError}
                errorMsg={errorForm.lastName}
              />
            </div>
            <FormGroup
              name="telNumber"
              labelName="Teléfono"
              placeHolder="09X XXX XXX"
              value={telNumber}
              setValue={setTelNumber}
              checkError={hasError}
              errorMsg={errorForm.telNumber}
            />
          </form>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Button
              loading={loading}
              text={"Continuar"}
              submitHandler={submitHandler}
              customStyle={"w-100"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutUser;
