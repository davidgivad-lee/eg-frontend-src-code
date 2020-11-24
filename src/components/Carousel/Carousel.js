import React from "react";

import { ReactComponent as ChevronLeftIcon } from "../../assets/icons/chevronLeft.svg";
import { ReactComponent as ChevronRightIcon } from "../../assets/icons/chevronRight.svg";
import "./Carousel.scss";

const Carousel = (props) => {
  const { images } = props;
  return (
    <div
      id="carouselProductImage"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <ol className="carousel-indicators">
        {images &&
          images.map((item, i) => (
            <li
              key={i}
              data-target="#carouselProductImage"
              data-slide-to={i}
              className={i === 0 ? "active bg-dark" : "bg-dark"}
            ></li>
          ))}
      </ol>
      <div className="carousel-inner w-100">
        {images &&
          images.map((item, i) => (
            <div
              className={
                i === 0 ? "carousel-item w-100 active" : "carousel-item w-100"
              }
              key={i}
            >
              <img className="d-block w-100" src={item} alt="image..." />
            </div>
          ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselProductImage"
        role="button"
        data-slide="prev"
      >
        <ChevronLeftIcon className="text-dark" width="32" height="32" />
      </a>
      <a
        className="carousel-control-next"
        href="#carouselProductImage"
        role="button"
        data-slide="next"
      >
        <ChevronRightIcon className="text-dark" width="32" height="32" />
      </a>
    </div>
  );
};

export default Carousel;
