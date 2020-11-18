import React from "react";

const FormSelect = (props) => {
  const hasError = props.checkError;
  return (
    <div className={"form-group " + props.customStyle}>
      <label className="font-13 text-black-50" htmlFor={props.name + "Input"}>
        {props.labelName + ":"}
      </label>
      <select
        className={
          hasError(props.name) ? "form-control is-invalid" : "form-control"
        }
        id={props.inputId + props.name + "Input"}
        defaultValue="default"
        onChange={(e) => props.setValue(e.target.value)}
        ref={props.setRef}
      >
        <option className="text-muted" disabled value="default">
          Seleccionar una categoría
        </option>
        {props.options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
