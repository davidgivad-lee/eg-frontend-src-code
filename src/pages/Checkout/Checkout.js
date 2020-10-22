import React from "react";

import CheckoutUser from "./CheckoutUser";
import CheckoutInvoice from "./CheckoutInvoice";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutShipping from "./CheckoutShipping";
import "./Checkout.scss";

const Checkout = (props) => {
  let refs = {};
  const setRef = (element) => {
    refs[element.id] = element;
  };
  const collapseRef = (id) => {
    if (refs) {
      refs[id].classList.toggle("show");
    }
  };

  return (
    <div className="container pt-4">
      <div className="accordion" id="accordionExample">
        <CheckoutUser setRef={setRef} collapseRef={collapseRef} />
        <CheckoutShipping setRef={setRef} collapseRef={collapseRef} />
        <CheckoutInvoice setRef={setRef} collapseRef={collapseRef} />
        <CheckoutPayment setRef={setRef} collapseRef={collapseRef} />
      </div>
    </div>
  );
};

export default Checkout;
