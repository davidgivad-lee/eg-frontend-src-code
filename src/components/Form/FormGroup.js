import React from "react";

const FormGroup = (props) => {
  const hasError = props.checkError;
  return (
    <div className={"form-group " + props.customStyle}>
      <label className="font-13 text-black-50" htmlFor={props.name + "Input"}>
        {props.labelName + ":"}
      </label>
      <input
        type="text"
        className={
          hasError(props.name) ? "form-control is-invalid" : "form-control"
        }
        id={props.name + "Input"}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        readOnly={props.onlyRead}
      />
      <div className={hasError(props.name) ? "invalid-feedback" : "hidden"}>
        {props.errorMsg}
      </div>
    </div>
  );
};

export default FormGroup;
