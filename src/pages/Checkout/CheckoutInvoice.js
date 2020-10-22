import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { update } from "../../redux/User/userActions";
import Button from "../../components/Button/Button";
import CancelButton from "../../components/Button/CancelButton";
import FormGroup from "../../components/Form/FormGroup";
import checkCircle from "../../assets/icons/checkCircle.svg";

const CheckoutInvoice = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, successInvoice } = userUpdate;
  const userInfoUpdate = userUpdate.userInfo;
  const [companyName, setCompanyName] = useState(
    userInfo.invoice.companyName || ""
  );
  const [businessName, setBusinessName] = useState(
    userInfo.invoice.businessName || ""
  );
  const [rut, setRut] = useState(userInfo.invoice.rut || "");
  const [address, setAddress] = useState(userInfo.invoice.address || "");
  const [city, setCity] = useState(userInfo.invoice.city || "");

  const [errorForm, addError] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfoUpdate && successInvoice) {
      props.collapseRef("collapseThree");
      props.collapseRef("collapseFour");
    }
    return () => {
      //
    };
  }, [userInfoUpdate]);

  const skipHandler = (e) => {
    e.preventDefault();
    props.collapseRef("collapseThree");
    props.collapseRef("collapseFour");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let errors = {};

    if (businessName === "") {
      errors.businessName = "Debes ingresar su razon social";
    }
    if (rut === "") {
      errors.rut = "Debes ingresar el numero de rut";
    }
    if (address === "") {
      errors.address = "Debes ingresar la dirección de su empresa.";
    }
    if (city === "") {
      errors.city = "Debes indicar una ciudad";
    }

    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(
        update(userInfo._id, null, null, null, null, null, null, {
          companyName,
          businessName,
          rut,
          address,
          city,
        })
      );
    }
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  return (
    <div className="card py-4 border-top-0 border-right-0 border-left-0 border-bottom">
      <div
        className="card-header bg-transparent border-0 p-0"
        id="headingThree"
      >
        <h2 className="mb-0">
          <button
            className="btn btn-block p-0 text-left text-decoration-none shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-controls="collapseThree"
            aria-expanded="false"
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
              Facturación
            </h3>
          </button>
        </h2>
      </div>
      <div
        id="collapseThree"
        className="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
        aria-expanded="true"
        ref={props.setRef}
      >
        <div className="card-body px-0 py-4">
          <p className="font-15 text-info">
            Si no desea la factura con RUT omita este paso.
          </p>
          <p className="font-15">Información de empresa</p>
          <form>
            <FormGroup
              name="companyName"
              labelName="Nombre"
              placeHolder="Nombre de la empresa"
              value={companyName}
              setValue={setCompanyName}
              checkError={hasError}
              errorMsg={errorForm.companyName}
            />
            <FormGroup
              name="businessName"
              labelName="Razon Social"
              placeHolder="Ejemplo S.A."
              value={businessName}
              setValue={setBusinessName}
              checkError={hasError}
              errorMsg={errorForm.businessName}
            />
            <FormGroup
              name="rut"
              labelName="RUT"
              placeHolder="21000000XX"
              value={rut}
              setValue={setRut}
              checkError={hasError}
              errorMsg={errorForm.rut}
            />
            <FormGroup
              name="address"
              labelName="Dirección"
              placeHolder="Calle1 1357 y Esquina Calle2"
              value={address}
              setValue={setAddress}
              checkError={hasError}
              errorMsg={errorForm.address}
            />
            <FormGroup
              name="city"
              labelName="Ciudad"
              placeHolder="Ciudad Ejemplo"
              value={city}
              setValue={setCity}
              checkError={hasError}
              errorMsg={errorForm.city}
            />
          </form>
        </div>

        <div className="row">
          <div className="col-sm-4 mb-2">
            <Button
              loading={loading}
              text={"Continuar"}
              submitHandler={submitHandler}
              customStyle={"w-100"}
            />
          </div>
          <div className="col-sm-4">
            <CancelButton
              loading={false}
              text={"Omitir"}
              submitHandler={skipHandler}
              customStyle={"w-100"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInvoice;
