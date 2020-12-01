import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import FormCreditCard from "../../components/Form/FormCreditCard";
import { cleanCart } from "../../redux/Cart/cartActions";
// import { createOrder } from "../../redux/Order/orderActions";
import Button from "../../components/Button/Button";
import checkCircle from "../../assets/icons/checkCircle.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/fillCircle.svg";
import CheckoutPaymentOption from "./CheckoutPaymentOption";
import "./Checkout.scss";

const CheckoutPayment = (props) => {
  const [complete, setComplete] = useState(false);
  const [payment, setPayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [saveCardInfo, setSaveCardInfo] = useState(false);
  const [errorForm, addError] = useState({});
  const [errorSelect, setErrorSelect] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (payment === "") {
      setErrorSelect("Debes seleccionar una forma de pago.");
    } else {
      setErrorSelect("");

      let errors = {};

      if (cardNumber === "") {
        errors.cardNumber = "Debes ingresar el número de la tarjeta.";
      }
      if (cardName === "") {
        errors.cardName = "Debes ingresar el nombre del titular.";
      }
      if (cardExpiration === "") {
        errors.cardExpiration = "Debes ingresar la fecha de vencimiento";
      }
      if (cardCvv === "") {
        errors.cardCvv = "Debes ingresar el código CVV";
      }
      addError(errors);
      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        // dispatch(
        //   createOrder({
        //     payment,
        //     cardNumber,
        //     cardExpiration,
        //     cardName,
        //     cardCvv,
        //   })
        // );
      }

      props.setComplete(true);
    }

    // cleanCart();
    // history.push("/");
    // window.location.reload();
  };

  const setSaveCard = () => {
    setSaveCardInfo(!saveCardInfo);
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  return (
    <div className="card py-4 border-top-0 border-right-0 border-left-0 border-bottom">
      <div className="card-header bg-transparent border-0 p-0" id="headingFour">
        <h2 className="mb-0">
          <button
            className="btn btn-block p-0 text-left text-decoration-none shadow-none position-relative"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-controls="collapseFour"
            aria-expanded="false"
            disabled={!props.previous}
          >
            {props.complete ? (
              <img
                src={checkCircle}
                className="mb-2 text-secondary"
                alt=""
                width="32"
                height="32"
                title="Bootstrap"
              />
            ) : (
              <React.Fragment>
                <CircleIcon
                  className="mb-2 text-secondary"
                  width="32"
                  height="32"
                />
                <p className="text-white font-19 titleIcon">4</p>
              </React.Fragment>
            )}
            <h3 className="d-inline-block ml-4 mb-0 font-weight-light text-body">
              Forma de pago
            </h3>
          </button>
        </h2>
      </div>
      <div
        id="collapseFour"
        className="collapse"
        aria-labelledby="headingFour"
        data-parent="#accordionExample"
        aria-expanded="true"
        ref={props.setRef}
      >
        <div className="card-body px-0 py-4">
          <p className="font-15">Seleccione la forma de pago</p>
          {Object.keys(errorSelect).length !== 0 && (
            <div className="alert alert-danger" role="alert">
              Debes seleccionar una forma de pago.
            </div>
          )}
          <CheckoutPaymentOption payment={payment} setPayment={setPayment}>
            <FormCreditCard
              cardNumber={cardNumber}
              cardName={cardName}
              cardCvv={cardCvv}
              cardExpiration={cardExpiration}
              setCardName={setCardName}
              setCardNumber={setCardNumber}
              setCardCvv={setCardCvv}
              setCardExpiration={setCardExpiration}
              setSaveCardInfo={setSaveCard}
              errorForm={errorForm}
              hasError={hasError}
            />
          </CheckoutPaymentOption>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <Button
              loading={false}
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

export default CheckoutPayment;
