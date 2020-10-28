import React from "react";

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
            <button
              type="button"
              className="btn btn-secondary px-4"
              data-dismiss="modal"
              onClick={props.handleSubmit}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="btn border 
            btn-transparent"
              data-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
