import React from "react";

import "./Checkout.scss";

const OrderSummaryModal = (props) => {
  const { cart, subTotal } = props;
  return (
    <div
      className="modal fade"
      id="orderSummaryModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header my-auto p-4">
            <button
              type="button"
              className="close float-left p-0 m-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="font-19 mb-0 my-auto" id="exampleModalLabel">
              Resumen de pedido
            </p>

            <a
              className="font-13 float-right text-decoration-none my-auto"
              href="/cart"
            >
              Editar pedido
            </a>
          </div>
          <div className="modal-body p-4">
            <p>{cart.length} artículos</p>
            {cart.map((item, i) => (
              <div className="row" key={i}>
                <div className="col-3 p-0">
                  <img
                    className="productImg w-100 my-auto"
                    src={item.photos[0]}
                    alt="Producto..."
                  />
                </div>
                <div className="col-6">
                  <p className="mb-2 font-13"> {item.name} </p>
                  <p className="mb-2 font-13">{item.nameDetail}</p>
                  <p className="mb-3 font-11 text-muted"> {item.category} </p>
                </div>
                <div className="col-3 text-right">
                  <p className="mb-2 font-13"> $ {item.price * item.qty} </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-top p-4">
            <div className="row">
              <div className="col-6">
                <p className="font-13">SubTotal:</p>
              </div>
              <div className="col-6 text-right font-13">
                $ {cart.length > 0 && subTotal()}
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="font-13">IVA (22%):</p>
              </div>
              <div className="col-6 text-right font-13">
                $ {cart.length > 0 && Math.trunc(subTotal() * 0.22)}
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="font-13 mb-0">Descuento:</p>
              </div>
              <div className="col-6 text-right font-13">% 0</div>
            </div>
          </div>
          <div className="card-footer bg-white p-4">
            <div className="row">
              <div className="col-6">
                <p className="font-15 mb-0">Total (UY $):</p>
              </div>
              <div className="col-6 text-right font-30 font-weight-bold">
                $ {cart.length > 0 && subTotal()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryModal;
