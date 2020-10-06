import React from "react";
import { useDispatch } from "react-redux";

import { useQty } from "../../Hooks/useQty";
import Counter from "../../components/Counter/Counter";
import { addToCart } from "../../redux/Cart/cartActions";
import DeleteModal from "./DeleteModal";
import "./Cart.scss";

import productImg from "../../assets/product1.png";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

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
    <div className="row border-bottom mx-0 py-2 cartItemContainer">
      <div className="col-4 col-sm-3 col-md-1 p-0">
        <img
          className="productImg w-100 my-auto"
          src={productImg}
          alt="Producto..."
        />
      </div>
      <div className="col-8 col-sm-9 col-md-4 my-auto py-2">
        <div className="w-100 d-inline-block">
          <p className="mb-3"> {item.name} </p>
          <p className="mb-3"> {item.nameDetail} </p>
          <p className="mb-3"> {item.category} </p>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-3 pl-0 align-center mt-small-3 ">
        <div className="row">
          <p className="d-md-screen col-4 col-sm-12 p-sm-screen mb-sm-3 my-auto-sm font-weight-light text-secondary d-sm-text-left priceText">
            Precio:
          </p>
          <p className="col-8 col-sm-12 font-weight-light my-auto-sm  p-sm-screen">
            $ {item.price}
          </p>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-md-3 pl-0 my-auto">
        <div className="row my-3">
          <p className="d-md-screen col-4 col-sm-12 my-auto-sm mb-sm-3 font-weight-light text-secondary d-sm-text-left priceText">
            Cantidad:
          </p>
          <div className="col-8 col-sm-12">
            <Counter
              qty={quantity.value}
              increment={increment}
              decrement={decrement}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-md-1 px-0 align-center mt-small-3">
        <div className="row">
          <p className="d-md-screen col-4 col-sm-12 mb-sm-3 font-weight-light text-secondary d-sm-text-left priceText">
            Total:
          </p>
          <div className="col-8 col-sm-12 text-right-lg">
            <p className="font-weight-bold d-inline-block">
              $ {item.qty * item.price}
            </p>
            <a
              className="d-inline-block ml-3 float-right"
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
        </div>
      </div>
      <DeleteModal id={item.product} />
    </div>
  );
};

export default CartItem;
