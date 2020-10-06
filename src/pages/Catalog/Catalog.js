import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productImg from "../../assets/product1.png";
import "./Catalog.scss";
import { listProducts } from "../../redux/Products/productsActions";

function Catalog(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <div> Loading...</div>
  ) : error ? (
    <div> error</div>
  ) : (
    <div className="row justify-content-around mx-1">
      {products.map((product, i) => (
        <div className="col-6 col-lg-4 col-xl-3" key={i}>
          <Link to={"/catalogos/" + product.id}>
            <img className="w-100" src={productImg} alt="Producto..." />
          </Link>
          <p className="text-center mb-0"> {product.name}</p>
          <p className="text-center"> $ {product.price}</p>
          <Link to={"/catalogos/" + product.id}>
            <button type="button" className="btn btn-dark w-100 fromButton">
              AÑADIR AL CARRITO
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
