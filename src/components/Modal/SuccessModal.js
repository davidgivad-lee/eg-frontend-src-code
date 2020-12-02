import React from "react";

import Button from "../Button/Button";
import logo from "../../assets/logo3.png";

const SuccessModal = (props) => {
  return (
    <div
      className="modal fade "
      id={props.id}
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body mt-4 text-center pb-0">
            <img className="mb-3" src={logo} width={300} />
            <p className="font-weight-bold">{props.text}</p>
            {props.children}
          </div>
          <div className="modal-footer border-0 mx-auto">
            <Button
              loading={props.loading}
              text={props.submitButtonText || "Confirmar"}
              submitHandler={props.handleSubmit}
              color="btn-dark"
              customStyle={"px-4"}
              modal="modal"
            />
            <Button
              text={props.cancelButtonText || "Cerrar"}
              submitHandler={props.handleCancel}
              color="btn-transparent"
              customStyle={"border"}
              modal="modal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
