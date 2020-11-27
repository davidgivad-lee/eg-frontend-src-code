import React from "react";

import FormCreditCard from "../../components/Form/FormCreditCard";
import masterIcon from "../../assets/icons/mastercard.png";
import visaIcon from "../../assets/icons/visa.png";
import paypalIcon from "../../assets/icons/paypal.png";
import "./Checkout.scss";

const CheckoutPaymentOption = (props) => {
  return (
    <div className="accordion" id="paymentAccordian">
      <div className="card">
        <div
          className="card-header p-0 position-relative border-bottom-0"
          id="headingOne"
        >
          <label
            className="btn btn-link w-100 text-left bg-white p-3 mb-0 "
            type="button"
            data-toggle="collapse"
            data-target="#paymentCollapseOne"
            aria-expanded="false"
            aria-controls="paymentCollapseOne"
            htmlFor="radioAbitab"
          >
            <input
              className="big-radio-select text-primary mt-2"
              type="radio"
              name="exampleRadios"
              id="radioAbitab"
              value="card"
            />

            <p className="label-position text-dark text-no-decoration">
              Tarjeta de Crédito/Débito
            </p>
            <div className="float-right text-right">
              <img src={masterIcon} width="48" height="48" alt="..." />
              <img src={visaIcon} width="48" height="48" alt="..." />
            </div>
          </label>
        </div>
        <div
          id="paymentCollapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#paymentAccordian"
        >
          <div className="card-body">
            <FormCreditCard />
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header p-0 position-relative border-bottom-0"
          id="headingTwo"
        >
          <label
            className="btn btn-link collapsed w-100 text-left bg-white p-3 mb-0"
            type="button"
            data-toggle="collapse"
            data-target="#paymentCollapseTwo"
            aria-expanded="false"
            aria-controls="paymentCollapseTwo"
            htmlFor="radioPaypal"
          >
            <input
              className="big-radio-select text-primary mt-2"
              type="radio"
              name="exampleRadios"
              id="radioPaypal"
              value="paypal"
            />
            <div className="label-position ">
              <img src={paypalIcon} width="100" alt="..." />
            </div>
          </label>
        </div>
        <div
          id="paymentCollapseTwo"
          className="collapse"
          data-parent="#paymentAccordian"
          aria-labelledby="headingTwo"
        >
          <div className="card-body">b</div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header p-0 position-relative border-bottom-0"
          id="headingThree"
        >
          <label
            className="btn btn-link w-100 text-left bg-white p-3 mb-0"
            type="button"
            data-toggle="collapse"
            data-target="#paymentCollapseThree"
            aria-expanded="false"
            aria-controls="paymentCollapseThree"
            htmlFor="radioDirect"
          >
            <input
              className="big-radio-select text-primary mt-2"
              type="radio"
              name="exampleRadios"
              id="radioDirect"
              value="card"
            />
            <p className="text-dark label-position text-no-decoration">
              Transferencia bancaria
            </p>
          </label>
        </div>
        <div
          id="paymentCollapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#paymentAccordian"
        >
          <div className="card-body">
            Al seleccionar esta opción les enviaremos vía correo electrónico
            nuestra información bancaria y/o Abitab. Luego de recibir el monto
            de transferencia les noticaremos cuando su pedido se encuentra listo
            para retirar o enviar. bla bla bla....
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentOption;
