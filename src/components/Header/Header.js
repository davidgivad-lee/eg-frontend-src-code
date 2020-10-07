import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../assets/logo3.png";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header(props) {
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const { cartItems } = cart;

  return (
    <React.Fragment>
      <div className="row sticky-top bg-white py-2">
        <div className="col-4"></div>
        <div className="col-4 text-center my-2 ">
          <a href="/">
            <img src={Logo} className="logo-img" alt="" loading="lazy" />
          </a>
        </div>
        <div className="col-4 text-right">
          <div className="m-3">
            <a className="text-dark" href="/login">
              <svg
                width="1.3em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-person-circle mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
              <div className="login-text-container">
                <p className="display-login-text mr-2 font-15 ">
                  {userInfo ? userInfo.firstName : "LOG IN"}
                </p>
              </div>
            </a>
            <a className="text-dark" href="/cart">
              <svg
                width="1.3em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-cart3"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </a>
            {cartItems.length > 0 && (
              <div className="d-inline">
                <svg
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 16 16"
                  className="bi bi-circle-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span className="cartNumber position-absolute text-light">
                  {cartItems.length}
                </span>
              </div>
            )}
          </div>
        </div>
        <NavBar />
      </div>
    </React.Fragment>
  );
}

export default Header;
