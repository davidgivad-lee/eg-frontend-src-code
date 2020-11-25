import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import CheckoutUser from "./CheckoutUser";
import CheckoutInvoice from "./CheckoutInvoice";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutShipping from "./CheckoutShipping";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";
import "./Checkout.scss";

const Checkout = (props) => {
  const [completeUser, setCompleteUser] = useState(false);
  const [completeShipping, setCompleteShipping] = useState(false);
  const [completeInvoice, setCompleteInvoice] = useState(false);
  const [completePayment, setCompletePayment] = useState(false);
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const subTotal = useMemo(
    () => () => {
      let sum = 0;
      for (let item of cartItems) {
        sum += item.qty * item.price;
      }
      return sum;
    },
    [cartItems]
  );

  let refs = {};
  const setRef = (element) => {
    if (element) refs[element.id] = element;
  };
  const collapseRef = (id) => {
    if (refs && id) {
      refs[id].classList.toggle("show");
    }
  };

  return (
    <div className="container-fluid pt-4">
      <div className="row mx-0">
        <div className="accordion col-12 col-md-7" id="accordionExample">
          <CheckoutUser
            setRef={setRef}
            collapseRef={collapseRef}
            complete={completeUser}
            setCompletee={setCompleteUser}
          />
          <CheckoutShipping
            setRef={setRef}
            collapseRef={collapseRef}
            previous={completeUser}
            complete={completeShipping}
            setComplete={setCompleteShipping}
          />
          <CheckoutInvoice
            setRef={setRef}
            collapseRef={collapseRef}
            previous={completeShipping}
            complete={completeInvoice}
            setComplete={setCompleteInvoice}
          />
          <CheckoutPayment
            setRef={setRef}
            collapseRef={collapseRef}
            previous={completeInvoice}
            complete={completePayment}
            setComplete={setCompletePayment}
          />
        </div>
        <div className="col-md-5 d-none d-md-block bg-white">
          <OrderSummary />
        </div>
        <div className="d-md-none fixed-bottom mb-4 mx-4 bg-white">
          <div className="row m-0 p-2 border">
            <div className="col-1 p-0">
              <img
                className="productImg w-100 my-auto"
                src={cartItems[0].photos[0]}
                alt="Producto..."
              />
            </div>
            <div className="col-9 my-auto ">
              <p className="font-19 mb-1">{cartItems.length} artículos</p>
              <a
                href="#"
                className="font-13"
                data-toggle="modal"
                data-target="#orderSummaryModal"
              >
                Ver detalles
              </a>
            </div>
            <div className="col-2 my-auto text-right p-0">
              <p className="font-25 mb-0">$ {subTotal()}</p>
            </div>
          </div>
        </div>
      </div>
      <OrderSummaryModal cart={cartItems} subTotal={subTotal} />
    </div>
  );
};

export default Checkout;
