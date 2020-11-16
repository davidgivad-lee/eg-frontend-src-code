import React from "react";

import optionIcon from "../../assets/icons/option.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

const ProductItem = (props) => {
  return (
    <tr>
      <th className="text-secondary font-weight-normal" scope="row">
        {props.product._id.slice(0, 8) + "..."}
      </th>
      <td>{props.product.name}</td>
      <td>
        {props.product.nameDetail
          ? props.product.nameDetail.slice(0, 15) + "..."
          : "-"}
      </td>
      <td>
        {props.product.description
          ? props.product.description.slice(0, 15) + "..."
          : "-"}
      </td>
      <td>{props.product.review ? props.product.review : "-"}</td>
      <td>{props.product.category}</td>
      <td>{props.product.price}</td>
      <td>
        {props.product.wholesalePrice ? props.product.wholesalePrice : "-"}
      </td>
      <td>{props.product.colors[0] ? props.product.colors[0] + "..." : "-"}</td>
      <td className="pl-0">
        <div className="dropdown">
          <a
            className="btn pt-0"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={optionIcon} />
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a
              className="dropdown-item"
              onClick={() => props.editModalHandle(props.product)}
              href="#"
            >
              Editar
            </a>
            <a
              className="dropdown-item text-danger"
              href="#"
              onClick={() => props.deleteModalHanle(props.product._id)}
            >
              Eliminar
              <TrashIcon className="ml-1 text-danger" />
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
