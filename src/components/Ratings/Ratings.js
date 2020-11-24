import React from "react";

import heartBlack from "../../assets/icons/heartBlack.svg";
import heartWhite from "../../assets/icons/heartWhite.svg";
import { ratingValues } from "../../utils/datas";

const Rating = (props) => {
  return (
    <div className="d-flex flex-row">
      {ratingValues.map((rate, i) => (
        <div key={i}>
          {rate <= props.rating / 10 ? (
            <img src={heartBlack} alt="..." />
          ) : (
            <img src={heartWhite} alt="..." />
          )}
        </div>
      ))}
    </div>
  );
};
export default Rating;
