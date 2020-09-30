import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQty } from "../../Hooks/useQty";
import Counter from "../../components/Counter/Counter";
import { addToCart, removeFromCart } from "../../redux/Cart/cartActions";
import "./Cart.scss";

import productImg from "../../assets/product1.png";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const quantity = useQty(item.qty);

  const decrement = () => {
    const qty = quantity.value - 1;
    quantity.setValue(qty);
    dispatch(addToCart(item.product, qty));
  };

  const increment = () => {
    const qty = quantity.value + 1;
    quantity.setValue(qty);
    dispatch(addToCart(item.product, qty));
  };

  return (
    <div className="row border-bottom mx-0 cartItemContainer">
      <div className="col-5 my-auto py-4">
        <img className="imgg" src={productImg} alt="Product Image" />
        <div className="w-75 d-inline-block descriptionContainer">
          <p className="mb-3"> {item.name} </p>
          <p className="mb-3"> {item.nameDetail} </p>
          <p className="mb-3"> {item.category} </p>
        </div>
      </div>
      <div className="col-3 pl-0 my-auto">
        <p className="font-weight-light"> $ {item.price}</p>
      </div>
      <div className="col-3 pl-0 my-auto">
        <Counter
          qty={quantity.value}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <div className="col-1 pl-0 my-auto">
        <p className="font-weight-bold d-inline-block">
          $ {item.qty * item.price}
        </p>
        <a
          className="d-inline-block ml-3"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
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
              <p className="font-weight-bold">
                ¿Deseas eliminar este artículo?
              </p>
            </div>
            <div className="modal-footer border-0 mx-auto">
              <button
                type="button"
                className="btn btn-secondary px-4"
                data-dismiss="modal"
                onClick={() => removeFromCartHandler(item.product)}
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
    </div>
  );
};

export default CartItem;
