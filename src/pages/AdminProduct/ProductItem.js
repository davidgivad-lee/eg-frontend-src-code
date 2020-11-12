import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DeleteModal from "../../components/Modal/DeleteModal";
import optionIcon from "../../assets/icons/option.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { deleteProduct } from "../../redux/Products/productsActions";

const ProductItem = (props) => {
  const productDelete = useSelector((state) => state.productDelete);
  const { loading, message, success } = productDelete;

  const dispatch = useDispatch();
  const deleteHandle = (productId) => {
    dispatch(deleteProduct(productId));
  };
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
      <td>{props.product.color ? props.product.color[0] + "..." : "-"}</td>
      <td className="pl-0">
        <div className="dropdown">
          <a
            className="btn"
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
            <a className="dropdown-item" href="#">
              Editar
            </a>
            <a
              className="dropdown-item text-danger"
              href="#"
              data-toggle="modal"
              data-target="#deleteProductModal"
            >
              Eliminar
              <TrashIcon className="ml-1 text-danger" />
            </a>
          </div>
        </div>
        <DeleteModal
          id="deleteProductModal"
          warningText="¿Desea eliminar este producto?"
          handleSubmit={() => deleteHandle(props.product._id)}
          loading={loading}
        />
      </td>
    </tr>
  );
};

export default ProductItem;
