import React from "react";

import "./Spinner.scss";

const Spinner = (props) => {
  return (
    <div className="d-flex justify-content-center position-absolute fixed-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
