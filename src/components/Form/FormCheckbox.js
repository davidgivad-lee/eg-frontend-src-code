import React from "react";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import "./Form.scss";
const FormCheckbox = (props) => {
  const hasError = props.checkError;

  const checkSelectedColor = (colorName) => {
    return props.value.indexOf(colorName) !== -1;
  };

  return (
    <div className={"form-group " + props.customStyle}>
      <label className="font-13 text-black-50" htmlFor={props.name + "Input"}>
        {props.labelName + ":"}
      </label>
      <div className="dropdown">
        <button
          className="btn w-100 text-left border text-muted pr-1"
          type="button"
          id={props.inputId + "dropdownMenuButton"}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.value.length === 0
            ? "Selecionar colores"
            : props.value.join(", ")}
          <div className="d-inline-block float-right">
            <ChevronIcon className="text-dark" width="16" height="16" />
          </div>
        </button>
        <div
          className="dropdown-menu w-100 px-2"
          aria-labelledby="dropdownMenuButton"
        >
          {props.options.map((item, i) => (
            <div key={i} className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={props.inputId + "customCheck" + i}
                onChange={(e) => {
                  props.setValue(e.target.value);
                }}
                value={item.color}
                checked={checkSelectedColor(item.color)}
              />
              <label
                className="custom-control-label pt-1"
                htmlFor={props.inputId + "customCheck" + i}
              >
                {item.color}
              </label>
              <div
                style={{ backgroundColor: item.hex }}
                className={"color-container mt-1"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormCheckbox;
