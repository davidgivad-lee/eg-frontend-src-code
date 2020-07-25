import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
  return (
    <div className="container-fluid position-relative min-vh-100 px-0 container-pad-top">
      <NavBar />
      <div className="pb-c-60">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
