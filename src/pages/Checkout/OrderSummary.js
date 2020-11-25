import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.scss";

const OrderSummary = (props) => {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const subTotal = () => {
    let sum = 0;
    for (let item of cartItems) {
      sum += item.qty * item.price;
    }
    return sum;
  };
  return (
    <div className="card mt-4 rounded shadow">
      <div className="card-header p-4 bg-white">
        <p className="d-inline-block mb-0 font-15 "> Resemen de pedido </p>
        <a className="font-13 float-right text-decoration-none" href="/cart">
          Editar pedido
        </a>
      </div>
      <div className="card-body p-4">
        <p className="card-text font-13">{cartItems.length} artículos</p>
        {cartItems.map((item, i) => (
          <div className="row" key={i}>
            <div className="col-3 pl-3 pr-0">
              <img
                className="productImg w-100 my-auto"
                src={item.photos[0]}
                alt="Producto..."
              />
            </div>
            <div className="col-4">
              <p className="mb-2 font-13"> {item.name} </p>
              <p className="mb-2 font-13">
                {item.nameDetail.length > 20
                  ? item.nameDetail.slice(0, 20) + " ..."
                  : item.nameDetail}
              </p>
              <p className="mb-3 font-11 text-muted"> {item.category} </p>
            </div>
            <div className="col-5 text-right">
              <p className="mb-2 font-13"> $ {item.price * item.qty} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer p-4 bg-white">
        <div className="row">
          <div className="col-6">
            <p className="font-13">SubTotal:</p>
          </div>
          <div className="col-6 text-right font-13">
            $ {cartItems.length > 0 && subTotal()}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="font-13">IVA (22%):</p>
          </div>
          <div className="col-6 text-right font-13">
            $ {cartItems.length > 0 && Math.trunc(subTotal() * 0.22)}
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
            $ {cartItems.length > 0 && subTotal()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
