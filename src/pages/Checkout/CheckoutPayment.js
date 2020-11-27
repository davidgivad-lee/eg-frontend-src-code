import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { cleanCart } from "../../redux/Cart/cartActions";
import Button from "../../components/Button/Button";
import checkCircle from "../../assets/icons/checkCircle.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/fillCircle.svg";
import CheckoutPaymentOption from "./CheckoutPaymentOption";
import "./Checkout.scss";

const CheckoutPayment = (props) => {
  const [complete, setComplete] = useState(false);
  let history = useHistory();

  const submitHandler = () => {
    // cleanCart();
    // history.push("/");
    // window.location.reload();
    props.setComplete(true);
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
          <CheckoutPaymentOption />
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
