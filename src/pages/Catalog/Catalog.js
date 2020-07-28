import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productImg from "../../assets/product1.png";
import "./Catalog.scss";
import axios from "axios";

function Catalog(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap flex-row justify-content-around">
      {products.map((product, i) => (
        <div className="p-2 " key={i}>
          <Link to={"/catalogos/" + product.id}>
            <img className="image-size" src={productImg} alt="Product Image" />
          </Link>
          <p className="text-center"> {product.name}</p>
          <p className="text-center"> {product.description}</p>
          <Link to={"/catalogos/" + product.id}>
            <button type="submit" className="btn btn-primary w-100">
              Agregar al carrito ${product.price}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
