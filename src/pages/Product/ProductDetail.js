import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsProduct } from "../../redux/Products/productsActions";
import { addToCart } from "../../redux/Cart/cartActions";
import Carousel from "../../components/Carousel/Carousel";
import Counter from "../../components/Counter/Counter";
import Spinner from "../../components/Spinner/Spinner";
import Rating from "../../components/Ratings/Ratings";
import { useQty } from "../../Hooks/useQty";
import "./ProductDetail.scss";

function ProductDetail(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const quantity = useQty();

  const decrement = () => {
    if (quantity.value > 1) quantity.setValue(quantity.value - 1);
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

  return loading ? (
    <Spinner />
  ) : error ? (
    <div> {error} </div>
  ) : (
    <div className="container-fluid">
      <div className="row justify-content-around">
        <div className="col-12 col-md-6 p-2">
          <Carousel images={product.photos} />
        </div>
        <div className="col-12 col-md-6 p-2">
          <div className="productDetail">
            <p className="mt-4 productName">
              {product.name && product.name.toUpperCase()}{" "}
            </p>
            <Rating rating={product.rating} />
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
                onChange={quantity.onChange}
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
    </div>
  );
}

export default ProductDetail;
