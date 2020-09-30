import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
  return (
    <div className="container-fluid position-relative min-vh-100 px-0">
      <Header />
      <div className="pb-c-60">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
