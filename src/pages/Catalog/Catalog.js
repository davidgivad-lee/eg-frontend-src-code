import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
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
    <Spinner />
  ) : error ? (
    <div> error</div>
  ) : (
    <div className="row justify-content-around mx-1">
      {products.map((product, i) => (
        <div className="col-6 col-lg-4 col-xl-3 position-relative" key={i}>
          <Link to={"/catalogos/" + product._id}>
            {/* <div className="text-center product-img align-middle">
              <img
                className="img-fluid"
                src={product.photos[0]}
                alt="Producto..."
              />
            </div> */}
            <div className="img-container">
              <img
                className="product-img"
                src={product.photos[0]}
                alt="Producto..."
              />
            </div>
          </Link>
          <div>
            <p className="text-center mb-0"> {product.name}</p>
            <p className="text-center"> $ {product.price}</p>
            <Link to={"/catalogos/" + product._id}>
              <button type="button" className="btn btn-dark w-100 fromButton">
                AÑADIR AL CARRITO
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
