import React from "react";

import Button from "../Button/Button";
import { ReactComponent as AlertIcon } from "../../assets/icons/alert.svg";

const DeleteModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-auto text-center pb-0">
            <AlertIcon className="text-warning mb-3" width="7em" height="7em" />
            <p className="font-weight-bold">{props.warningText}</p>
          </div>
          <div className="modal-footer border-0 mx-auto">
            <Button
              loading={props.loading}
              text={"Eliminar"}
              submitHandler={props.handleSubmit}
              color="btn-secondary"
              customStyle={"px-4"}
              modal="modal"
            />
            <Button
              text={"Cancelar"}
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

export default DeleteModal;
