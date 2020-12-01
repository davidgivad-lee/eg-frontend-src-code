import React from "react";

import FormGroup from "../../components/Form/FormGroup";
import masterIcon from "../../assets/icons/mastercard.png";
import visaIcon from "../../assets/icons/visa.png";
import paypalIcon from "../../assets/icons/paypal.png";
import itauIcon from "../../assets/icons/itau.png";
import santanderIcon from "../../assets/icons/santander.png";
import abitabIcon from "../../assets/icons/abitab.jpg";
import redpagosIcon from "../../assets/icons/redpagos.png";
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
            htmlFor="radioCreditCard"
            onClick={() => props.setPayment("card")}
          >
            <input
              className="big-radio-select text-primary mt-2"
              type="radio"
              name="exampleRadios"
              id="radioCreditCard"
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
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#paymentAccordian"
        >
          <div className="card-body">{props.children}</div>
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
            onClick={() => props.setPayment("paypal")}
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
          {/* <div className="card-body"></div> */}
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
            onClick={() => props.setPayment("bank")}
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
            <div className="float-right text-right">
              <img src={itauIcon} width="36" height="36" alt="..." />
              <img src={santanderIcon} width="48" height="48" alt="..." />
            </div>
          </label>
        </div>
        <div
          id="paymentCollapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#paymentAccordian"
        >
          <div className="card-body">
            <div className="padding-body">
              <p className="text-danger"> **AVISO** </p>
              <p className="font-13 text-secondary">
                Si desea realizar transferencia bancaria debe considerar los
                siguientes:
              </p>
              <p className="font-13">
                1: Contamos con las cuentas de pesos uruguayos (UY $) y de
                dolares (USD $) en banco Itaú y Santander. Una vez que usted
                confirma el pedido les enviaremos a su correo electrónico las
                informaciones sobre las cuentas bancarias.
              </p>
              <p className="font-13">
                2: Al realizar la transferencia deben incluir el número de
                pedido en la referencia.
              </p>
              <p className="font-13">
                3: Luego de recibir la transferencia comenzamos armar el pedido
                y luego les notificaremos cuando ya se encuentra disponible para
                retirar/enviar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header p-0 position-relative border-bottom-0"
          id="headingFour"
        >
          <label
            className="btn btn-link collapsed w-100 text-left bg-white p-3 mb-0"
            type="button"
            data-toggle="collapse"
            data-target="#paymentCollapseFour"
            aria-expanded="false"
            aria-controls="paymentCollapseFour"
            htmlFor="radioAbitab"
            onClick={() => props.setPayment("giro")}
          >
            <input
              className="big-radio-select text-primary mt-2"
              type="radio"
              name="exampleRadios"
              id="radioAbitab"
              value="abitab"
            />
            <p className="text-dark label-position text-no-decoration">Giros</p>
            <div className="float-right text-right">
              <img src={abitabIcon} width="48" height="48" alt="..." />
              <img src={redpagosIcon} height="24" alt="..." />
            </div>
          </label>
        </div>
        <div
          id="paymentCollapseFour"
          className="collapse"
          data-parent="#paymentAccordian"
          aria-labelledby="headingFour"
        >
          <div className="card-body">
            <div className="padding-body">
              <p className="text-danger"> **AVISO** </p>
              <p className="font-13 text-secondary">
                Si desea realizar transferencia por abitab o red pagos debe
                considerar los siguientes:
              </p>
              <p className="font-13">
                1: Una vez que usted confirma el pedido les enviaremos a su
                correo electrónico nuestras informaciones de redpagos y abitab.
              </p>
              <p className="font-13">
                2: Luego de recibir el giro comenzamos armar el pedido y luego
                les notificaremos cuando ya se encuentra disponible para
                retirar/enviar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentOption;
