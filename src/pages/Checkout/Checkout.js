import React, { useState, useMemo } from "react";

import CheckoutUser from "./CheckoutUser";
import CheckoutInvoice from "./CheckoutInvoice";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutShipping from "./CheckoutShipping";
import "./Checkout.scss";

const Checkout = (props) => {
  const [completeUser, setCompleteUser] = useState(false);
  const [completeShipping, setCompleteShipping] = useState(false);
  const [completeInvoice, setCompleteInvoice] = useState(false);
  const [completePayment, setCompletePayment] = useState(false);

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
    <div className="container pt-4">
      <div className="accordion" id="accordionExample">
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
    </div>
  );
};

export default Checkout;
