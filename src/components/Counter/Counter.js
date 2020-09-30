import React, { Component } from "react";

function Counter(props) {
  const { qty, increment, decrement } = props;

  return (
    <div className="d-inline-block border border-secondary formWrapper">
      <div className="d-flex ">
        <div onClick={decrement}>
          <svg
            width="1.5em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-dash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
        {/* <input
      type="text"
      className="quantityInput"
      value={qty}
      onChange={(e) => {
        setQty(e.target.value);
      }}
      pattern="[0-9]*"
    /> */}
        <p className="mx-2 my-auto"> {qty}</p>
        <div onClick={increment}>
          <svg
            width="1.5em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Counter;
