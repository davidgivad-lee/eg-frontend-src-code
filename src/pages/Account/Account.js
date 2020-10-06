import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/User/userActions.js";
import "./Account.scss";

export default function About() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <div className="container">
      <h1>Pagina de mi cuenta</h1>
      {userInfo && (
        <div className="text-center">
          <button className="btn btn-dark " onClick={handleSubmit}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
