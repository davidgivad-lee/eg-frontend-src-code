import React from "react";

import usersIcon from "../../assets/icons/users.svg";
import cartIcon from "../../assets/icons/cart.svg";
import bagIcon from "../../assets/icons/basket.svg";
import configIcon from "../../assets/icons/config.svg";
import homeIcon from "../../assets/icons/home.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light p-0 border-right ">
      <button
        className="navbar-toggler fixed-top m-4"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarCollapse"
        aria-controls="sidebarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse sidebar align-items-start w-100"
        id="sidebarCollapse"
      >
        <ul className="nav flex-column">
          <li className="m-1">
            <a className="nav-link text-dark" href="/admin">
              <img
                src={homeIcon}
                className="text-secondary mr-3"
                alt=""
                width="24"
                height="24"
                title="Bootstrap"
              />
              Dashboard
            </a>
          </li>
          <li className="m-1">
            <a className="nav-link text-dark" href="/admin/products">
              <img
                src={bagIcon}
                className="text-secondary mr-3"
                alt=""
                width="24"
                height="24"
                title="Bootstrap"
              />
              Productos
            </a>
          </li>
          <li className="m-1">
            <a className="nav-link text-dark" href="#">
              <img
                src={usersIcon}
                className="text-secondary mr-3"
                alt=""
                width="24"
                height="24"
                title="Bootstrap"
              />
              Usuarios
            </a>
          </li>
          <li className="m-1">
            <a className="nav-link text-dark" href="#">
              <img
                src={cartIcon}
                className="text-secondary mr-3"
                alt=""
                width="24"
                height="24"
                title="Bootstrap"
              />
              Compras
            </a>
          </li>
          <li className="m-1">
            <a className="nav-link text-dark" href="#">
              <img
                src={configIcon}
                className="text-secondary mr-3"
                alt=""
                width="24"
                height="24"
                title="Bootstrap"
              />
              Configuración
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
