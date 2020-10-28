import React from "react";

import Logo from "../assets/logo3.png";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const DashboardLayout = (props) => {
  return (
    <div className="container-fluid px-0">
      <div className="text-center border-bottom py-3">
        <a href="/">
          <img src={Logo} className="header-img" alt="logo" />
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10 ">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
