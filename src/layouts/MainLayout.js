import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <NavBar />
      <div className="container container-pad">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
