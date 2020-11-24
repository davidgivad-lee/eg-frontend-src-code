import React from "react";

import decrementIcon from "../../assets/icons/decrement.svg";
import incrementIcon from "../../assets/icons/increment.svg";

function Counter(props) {
  const { qty, increment, decrement } = props;

  return (
    <div className="d-inline-block border border-secondary formWrapper">
      <div className="d-flex ">
        <div onClick={decrement}>
          <img src={decrementIcon} alt="..." />
        </div>
        <input
          type="text"
          className="quantityInput font-15"
          value={qty}
          onChange={(e) => {
            props.onChange(e);
          }}
          pattern="[0-9]*"
        />
        <div onClick={increment}>
          <img src={incrementIcon} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Counter;
