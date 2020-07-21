import React, { Component } from "react";
import "./NavBar.scss";
import Logo from "../../assets/logo3.png";
import Search from "../Search/Search.js";

class NavBar extends Component {
  state = {
    searching: false,
  };

  onSearch = () => {
    this.setState((prevState) => ({ searching: !prevState.searching }));
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white border-bottom">
          <a className="navbar-brand" href="/">
            <img src={Logo} className="logo-img" alt="" loading="lazy" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/catalogos">
                  CATÁLOGOS <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mi-cuenta">
                  MI CUENTA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ayuda">
                  AYUDA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  CONTACTO
                </a>
              </li>
              <li className="nav-item nav-search-box d-block tonto">
                <Search collapsed={true} />
              </li>
            </ul>
            <a
              className="navbar-brand ml-2 search-display-container"
              onClick={this.onSearch}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fillRule="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </a>
          </div>
        </nav>
        {this.state.searching ? (
          <div className="container-fluid position-fixed container-search-box search-display-container">
            <Search collapsed={false} />
          </div>
        ) : (
          <div> </div>
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;
