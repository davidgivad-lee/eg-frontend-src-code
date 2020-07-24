import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const LoginLayout = (props) => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid container-pad background-img">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default LoginLayout;
