import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../../redux/Products/productsActions";
import { addToCart } from "../../redux/Cart/cartActions";
import Counter from "../../components/Counter/Counter";
import { useQty } from "../../Hooks/useQty";
import productImg from "../../assets/product1.png";
import "./ProductDetail.scss";

//import Data from "../../data/data";

function ProductDetail(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);
  //const product = Data.products.find((x) => props.match.params.id);

  const rates = [1, 2, 3, 4, 5];

  const quantity = useQty();

  const decrement = () => {
    quantity.setValue(quantity.value - 1);
  };

  const increment = () => {
    quantity.setValue(quantity.value + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(props.match.params.id, quantity.value));
    props.history.push(
      "/cart/" + props.match.params.id + "?qty=" + quantity.value
    );
  };

  return (
    <div className="container-fluid">
      {loading ? (
        <div> loading ... </div>
      ) : error ? (
        <div> {error} </div>
      ) : (
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 p-2">
            <img className="w-100" src={productImg} alt="Producto..." />
          </div>
          <div className="col-12 col-md-6 p-2">
            <div className="productDetail">
              <p className="mt-4 productName">
                {product.name && product.name.toUpperCase()}{" "}
              </p>
              <div className="d-flex flex-row">
                {rates.map((rate, i) => (
                  <div key={i}>
                    {rate < product.review ? (
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-heart-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-heart"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="h6 mt-4"> {product.description} </p>
              <p className="productName"> $ {product.price} </p>
            </div>
            <div className="productOption">
              <p> Cantidad: </p>
              <div className="mb-4">
                <Counter
                  qty={quantity.value}
                  increment={increment}
                  decrement={decrement}
                />
              </div>
              <button
                onClick={handleAddToCart}
                type="button"
                className="btn btn-dark w-100 fromButton"
              >
                AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
