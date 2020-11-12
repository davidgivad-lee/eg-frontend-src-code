import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      className={
        props.color
          ? "btn " + props.color + " " + props.customStyle
          : "btn btn-dark " + props.customStyle
      }
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

export default Button;
