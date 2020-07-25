import React from "react";
import "./Catalog.scss";
import Data from "../../data/data";
import image from "../../assets/product1.png";

export default function Shop() {
  return (
    <div className="d-flex flex-wrap flex-row justify-content-around">
      {Data.products.map((product, i) => (
        <div className="p-2 " key={i}>
          <img className="image" src={image} alt="Product Image" />
          <p className="text-center"> {product.name}</p>
          <p className="text-center"> {product.description}</p>

          <button type="submit" className="btn btn-primary w-100">
            Agregar al carrito ${product.price}
          </button>
        </div>
      ))}
    </div>
  );
}
