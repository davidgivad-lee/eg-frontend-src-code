import React from "react";

import "./Button.scss";

const CancelButton = (props) => {
  return (
    <button
      type="submit"
      className={"btn btn-outline-dark btn-cancel " + props.customStyle}
      disabled={props.loading}
      onClick={props.submitHandler}
      data-dismiss={props.modal}
    >
      {props.loading ? (
        <div>
          <span
            className="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </div>
      ) : (
        props.text
      )}
    </button>
  );
};

export default CancelButton;
