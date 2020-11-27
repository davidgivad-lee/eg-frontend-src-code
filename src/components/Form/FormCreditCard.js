import React from "react";

import { ReactComponent as LockIcon } from "../../assets/icons/lockFill.svg";
import "./Form.scss";

const FormCreditCard = (props) => {
  return (
    <form className="padding-x-45 ">
      <div className="form-group row">
        <div className="col-9 position-relative">
          <label className="font-13 text-secondary" htmlFor="cardInput">
            Número de tarjeta de crédita/débito
          </label>
          <input type="text" className="form-control" id="cardInput" />
          <LockIcon
            className="position-absolute lock-icon-position text-secondary"
            width="16"
            height="16"
          />
        </div>
        <div className="col-3 px-0">
          <label className="font-13 text-secondary" htmlFor="expirationInput">
            Vencimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="expirationInput"
            placeholder="Mes/Año"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-9">
          <label className="font-13 text-secondary" htmlFor="nameCardInput">
            Nombre del titular
          </label>
          <input type="text" className="form-control" id="nameCardInput" />
        </div>
        <div className="col-3 px-0 position-relative">
          <label className="font-13 text-secondary" htmlFor="cvvInput">
            CVV
          </label>
          <input type="text" className="form-control" id="cvvInput" />
          <LockIcon
            className="position-absolute lock-icon-cvv-position text-secondary"
            width="16"
            height="16"
          />
        </div>
      </div>
      <div className="form-check mt-4 ">
        <input
          type="checkbox"
          className="form-check-input my-auto"
          id="saveCardInfo"
        />
        <label
          className="form-check-label text-secondary font-13"
          htmlFor="exampleCheck1"
        >
          Guardar la información de tarjeta.
        </label>
      </div>
    </form>
  );
};

export default FormCreditCard;
