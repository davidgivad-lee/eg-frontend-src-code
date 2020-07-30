import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productImg from "../../assets/product1.png";
import "./Catalog.scss";
import { listProducts } from "../../redux/Products/ProductsActions";

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
