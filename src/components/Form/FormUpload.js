import React from "react";

const FormUpload = (props) => {
  const hasError = props.uploadingError.length !== 0;
  return (
    <div className={"custom-file d-block mb-4 " + props.customStyle}>
      <label
        className="font-13 text-black-50 d-block"
        htmlFor={props.name + "Input"}
      >
        {props.labelName + ":"}
      </label>
      <input
        type="file"
        className={
          hasError ? "custom-file-input is-invalid" : "custom-file-input"
        }
        id={props.inputId + props.name + "Input"}
        onChange={props.setValue}
      />
      <label className="custom-file-label mt-4" htmlFor={props.name + "Input"}>
        {props.uploading ? (
          <div>Uploading...</div>
        ) : props.valueName === "" ? (
          props.placeHolder
        ) : (
          props.valueName
        )}
      </label>
      <div className={hasError ? "invalid-feedback" : "hidden"}>
        {props.uploadingError}
      </div>
    </div>
  );
};

export default FormUpload;
