import React from "react";
import Logo from "../assets/logo3.png";

import "./Layout.scss";

const DefaultLayout = (props) => {
  return (
    <div className="container-fluid px-0">
      <div className="text-center border-bottom py-3">
        <a href="/">
          <img src={Logo} className="header-img" alt="logo" />
        </a>
      </div>
      <div className="pb-c-60">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
