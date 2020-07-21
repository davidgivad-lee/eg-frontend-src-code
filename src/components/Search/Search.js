import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  state = {};
  render() {
    let style = "form-inline justify-content-center";
    if (this.props.collapsed) {
      style += " display-container-collapsed";
    }
    return (
      <form className={style}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="¿Qué estás buscando?"
          aria-label="Buscar"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
    );
  }
}

export default Search;
