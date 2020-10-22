import React from "react";
import { useHistory } from "react-router-dom";

import { cleanCart } from "../../redux/Cart/cartActions";

import Button from "../../components/Button/Button";
import checkCircle from "../../assets/icons/checkCircle.svg";

const CheckoutPayment = (props) => {
  let history = useHistory();

  const submitHandler = () => {
    cleanCart();
    history.push("/");
    window.location.reload();
  };
  return (
    <div className="card py-4 border-top-0 border-right-0 border-left-0 border-bottom">
      <div className="card-header bg-transparent border-0 p-0" id="headingFour">
        <h2 className="mb-0">
          <button
            className="btn btn-block p-0 text-left text-decoration-none shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-controls="collapseFour"
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
          Seleccione la forma de pago
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="radioAbitab"
              value="option1"
            />
            <label className="form-check-label" htmlFor="radioAbitab">
              Abitab
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="radioBank"
              value="option2"
            />
            <label className="form-check-label" htmlFor="radioBank">
              Transferencia bancaria
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="radioCash"
              value="option2"
            />
            <label className="form-check-label" htmlFor="radioCash">
              Pago en el local
            </label>
          </div>
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
