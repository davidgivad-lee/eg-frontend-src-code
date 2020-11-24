import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.scss";

function Cart(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push("/login?redirect=checkout");
  };

  const subTotal = () => {
    let sum = 0;
    for (let item of cartItems) {
      sum += item.qty * item.price;
    }
    return sum;
  };

  return (
    <div className="container-fluid px-3">
      <h3 className="mb-4"> Mi carrito ({cartItems.length} articulos)</h3>
      <div className="row cart-data-head border-bottom mx-0">
        <div className="col-5 pl-0">
          <p className="font-weight-bold">Articulo</p>
        </div>
        <div className="col-3 pl-0">
          <p className="font-weight-bold">Precio</p>
        </div>
        <div className="col-3 pl-0">
          <p className="font-weight-bold">Cantidad</p>
        </div>
        <div className="col-1 pl-0 text-right">
          <p className="font-weight-bold">Total</p>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="m-4 text-center">¡El Carro esta vacío!</div>
      ) : (
        cartItems.map((item, i) => <CartItem item={item} key={i} />)
      )}

      {cartItems.length > 0 && (
        <div className="row mt-4 mx-0">
          <div className="col-6 ml-auto">
            <div className="row border-bottom mb-4">
              <div className="col-6">
                <p className="font-weight-bold text-secondary">SubTotal:</p>
              </div>
              <div className="col-6 text-right">
                $ {cartItems.length > 0 && subTotal()}
              </div>
            </div>
            <div className="row border-bottom  mb-4">
              <div className="col-6">
                <p className="font-weight-bold text-secondary">IVA (22%):</p>
              </div>
              <div className="col-6 text-right">
                $ {cartItems.length > 0 && Math.trunc(subTotal() * 0.22)}
              </div>
            </div>
            <div className="row border-bottom  mb-4">
              <div className="col-6">
                <p className="font-weight-bold text-secondary">Descuento:</p>
              </div>
              <div className="col-6 text-right">% 0</div>
            </div>
            <div className="row mb-4">
              <div className="col-6">
                <p className="font-weight-bold text-secondary">Total:</p>
              </div>
              <div className="col-6 text-right">
                $ {cartItems.length > 0 && subTotal()}
              </div>
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="text-right">
          <button
            type="button"
            onClick={submitHandler}
            className="btn btn-dark"
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
