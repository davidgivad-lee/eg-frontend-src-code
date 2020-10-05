import React from "react";
import { removeFromCart } from "../../redux/Cart/cartActions";
import { useDispatch } from "react-redux";

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
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
            <svg
              width="7em"
              height="7em"
              viewBox="0 0 16 16"
              className="bi bi-exclamation-circle text-warning mb-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <p className="font-weight-bold">¿Desea eliminar este artículo?</p>
          </div>
          <div className="modal-footer border-0 mx-auto">
            <button
              type="button"
              className="btn btn-secondary px-4"
              data-dismiss="modal"
              onClick={() => removeFromCartHandler(props.id)}
            >
              Si
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
