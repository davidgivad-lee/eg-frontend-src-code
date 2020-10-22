import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { update } from "../../redux/User/userActions";
import Button from "../../components/Button/Button";
import FormGroup from "../../components/Form/FormGroup";
import checkCircle from "../../assets/icons/checkCircle.svg";

const CheckoutShipping = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, successShipping, successInvoice } = userUpdate;
  const userInfoUpdate = userUpdate.userInfo;
  const [address, setAddress] = useState(userInfo.shipping.address || "");
  const [extAddress, setExtAddress] = useState(
    userInfo.shipping.extAddress || ""
  );
  const [city, setCity] = useState(userInfo.shipping.city || "");
  const [province, setProvince] = useState(userInfo.shipping.province || "");
  const [postalCode, setPostalCode] = useState(
    userInfo.shipping.postalCode || ""
  );

  const [errorForm, addError] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfoUpdate && successShipping && !successInvoice) {
      props.collapseRef("collapseTwo");
      props.collapseRef("collapseThree");
    }
    return () => {
      //
    };
  }, [userInfoUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();

    let errors = {};

    if (address === "") {
      errors.address =
        "Debes ingresar una dirección donde desea recibir el pedido.";
    }
    if (city === "") {
      errors.city = "Debes indicar una ciudad";
    }

    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(
        update(userInfo._id, null, null, null, null, null, {
          address,
          extAddress,
          city,
          province,
          postalCode,
        })
      );
    }
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  return (
    <div className="card py-4 border-top-0 border-right-0 border-left-0 border-bottom">
      <div className="card-header bg-transparent border-0 p-0" id="headingTwo">
        <h2 className="mb-0">
          <button
            className="btn btn-block p-0 text-left text-decoration-none shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-controls="collapseTwo"
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
              Envío
            </h3>
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
        aria-expanded="true"
        ref={props.setRef}
      >
        <div className="card-body px-0 py-4">
          <p className="font-15">Información de envío</p>
          <form>
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
              name="extAddress"
              labelName="No. Apto/Torre (Opcional)"
              placeHolder="APTO. 999, Torre B"
              value={extAddress}
              setValue={setExtAddress}
              checkError={hasError}
              errorMsg={errorForm.extAddress}
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
            <div className="form-row">
              <FormGroup
                customStyle="col-md-6"
                name="province"
                labelName="Estado/Provincia (Opcional)"
                placeHolder="Provincia 1"
                value={province}
                setValue={setProvince}
                checkError={hasError}
                errorMsg={errorForm.province}
              />
              <FormGroup
                customStyle="col-md-6"
                name="postalCode"
                labelName="Código postal"
                placeHolder="0000000"
                value={postalCode}
                setValue={setPostalCode}
                checkError={hasError}
                errorMsg={errorForm.postalCode}
              />
            </div>
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

export default CheckoutShipping;
