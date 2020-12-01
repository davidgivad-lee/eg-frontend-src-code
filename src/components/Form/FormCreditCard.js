import React from "react";

import FormGroup from "../../components/Form/FormGroup";
import "./Form.scss";

const FormCreditCard = (props) => {
  return (
    <form className="padding-x-45 position-relative">
      <div className="form-group row ">
        <div className="col-9 ">
          <FormGroup
            name="cardNumber"
            labelName="Número de tarjeta de crédita/débito"
            placeHolder="XXXX XXXX XXXX XXXX"
            value={props.cardNumber}
            setValue={props.setCardNumber}
            checkError={props.hasError}
            errorMsg={props.errorForm.cardNumber}
            inputId="add"
            maxLength={16}
            type="card"
          />
        </div>
        <div className="col-3 px-0">
          <FormGroup
            name="cardExpiration"
            labelName="Vencimiento"
            placeHolder="Mes/Año"
            value={props.cardExpiration}
            setValue={props.setCardExpiration}
            checkError={props.hasError}
            errorMsg={props.errorForm.cardExpiration}
            inputId="add"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-9">
          <FormGroup
            name="cardName"
            labelName="Nombre del titular"
            value={props.cardName}
            setValue={props.setCardName}
            checkError={props.hasError}
            errorMsg={props.errorForm.cardName}
            inputId="add"
          />
        </div>
        <div className="col-3 px-0 position-relative">
          <FormGroup
            name="cardCvv"
            labelName="CVV"
            placeHolder="XXX"
            value={props.cardCvv}
            setValue={props.setCardCvv}
            checkError={props.hasError}
            errorMsg={props.errorForm.cardCvv}
            inputId="add"
            maxLength={3}
            type="number"
          />
        </div>
      </div>
      <div className="form-check mt-4 ">
        <input
          type="checkbox"
          className="form-check-input my-auto"
          id="saveCardInfo"
          onClick={() => props.setSaveCardInfo()}
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
