import React, { useEffect } from "react";

import { number, mastercard, visacard } from "../../utils/regExp";

const FormGroup = (props) => {
  const hasError = props.checkError;

  const setNumberValue = (value) => {
    if (value === "" || number.test(value)) {
      props.setValue(value);
    }
  };

  const setCardValue = (value) => {
    if (value === "" || number.test(value)) {
      props.setValue(value);
    }
  };

  return (
    <div className={"form-group " + props.customStyle}>
      <label className="font-13 text-black-50" htmlFor={props.name + "Input"}>
        {props.labelName + ":"}
      </label>
      {props.textArea ? (
        <textarea
          type="text"
          className={
            hasError(props.name) ? "form-control is-invalid" : "form-control"
          }
          ref={props.setRef}
          id={props.inputId + props.name + "Input"}
          placeholder={props.placeHolder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          readOnly={props.onlyRead}
        />
      ) : (
        <input
          type="text"
          className={
            hasError(props.name) ? "form-control is-invalid" : "form-control"
          }
          ref={props.setRef}
          id={props.inputId + props.name + "Input"}
          placeholder={props.placeHolder}
          value={props.value}
          onChange={(e) => {
            if (props.type === "number") {
              setNumberValue(e.target.value);
            } else if (props.type === "card") {
              setCardValue(e.target.value);
            } else {
              props.setValue(e.target.value);
            }
          }}
          readOnly={props.onlyRead}
          maxLength={props.maxLength}
        />
      )}

      <div className={hasError(props.name) ? "invalid-feedback" : "hidden"}>
        {props.errorMsg}
      </div>
    </div>
  );
};

export default FormGroup;
