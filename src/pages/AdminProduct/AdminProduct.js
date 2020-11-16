import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";

import { listProducts } from "../../redux/Products/productsActions";
import DeleteModal from "../../components/Modal/DeleteModal";
import EditProductModal from "./EditProductModal";
import Spinner from "../../components/Spinner/Spinner";
import configIcon from "../../assets/icons/config.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusCircle.svg";
import productImg from "../../assets/product1.png";
import sortIcon from "../../assets/icons/sort.png";
import ProductItem from "./ProductItem";
import AddProductModal from "./AddProductModal";
import "./AdminProduct.scss";

const AdminProduct = () => {
  const [qtyListItem, setQtyListItem] = useState("10");
  const [deleteProduct, setDeleteProduct] = useState("");
  const [editProduct, setEditProduct] = useState({});

  const productList = useSelector((state) => state.productList);
  const productSave = useSelector((state) => state.productSave);
  const productDelete = useSelector((state) => state.productDelete);
  const { message } = productDelete;
  const { product, success } = productSave;
  const { products, loading, error } = productList;
  const loadingDelete = productDelete.loading;
  const successDelete = productDelete.success;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  useEffect(() => {
    if (success || productDelete.success) {
      dispatch(listProducts());
    }
    return () => {};
  }, [product, message]);

  const selectHandle = (qty) => {
    setQtyListItem(qty);
    //dispatch(listProducts(qty))
  };
  const qtyList = [10, 50, 100];
  const handleSearch = (text) => {
    //dispatch(productSearch(text))
  };
  const deleteHandle = () => {
    dispatch(deleteProduct(deleteProduct));
  };
  const deleteModalHanle = (productId) => {
    setDeleteProduct(productId);
    $("#deleteProductModal").modal("show");
  };
  const editModalHandle = (product) => {
    setEditProduct(product);
    $("#editProductModal").modal("show");
  };

  return error ? (
    <div> error</div>
  ) : (
    <div className="container-fluid">
      <h4 className="d-inline-block my-3">Administrar los productos</h4>
      <div className="d-inline-block float-right mt-3 mr-3">
        <a type="button" data-toggle="modal" data-target="#addModal">
          <PlusIcon className="text-primary" width="32" height="32" />
        </a>
      </div>
      <div className="row m-0">
        <div className="col-6">
          Mostrar
          <div className="dropdown d-inline-block ">
            <button
              className="btn dropdown-toggle p-1 m-2 border"
              type="button"
              id="selectDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {qtyListItem}
            </button>
            <div className="dropdown-menu" aria-labelledby="selectDropdown">
              {qtyList.map((item, i) => (
                <button
                  key={i}
                  onClick={() => selectHandle(item)}
                  className="dropdown-item px-2"
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          cantidad
        </div>
        <div className="col-6 text-right">
          <p className="d-inline-block mb-0 mr-2"> Buscar: </p>
          <input
            type="text"
            className="w-auto form-control d-inline-block "
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="nowrap" scope="col">
                ID
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Nombre
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Nombre detallado
              </th>
              <th className="nowrap" scope="col">
                Descripción
              </th>
              <th className="nowrap" scope="col">
                Review
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Categoria
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Precio
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Precio mayor
                <a className="ml-2" href="#">
                  <img width="17" height="17" src={sortIcon} />
                </a>
              </th>
              <th className="nowrap" scope="col">
                Colores
              </th>
              <th className="nowrap" scope="col">
                <img src={configIcon} />
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.length === 0 ? (
              <tr>
                <td>
                  <p className="position-absolute"> No hay ningún producto </p>
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td>
                  <Spinner />
                </td>
              </tr>
            ) : (
              products.map((item, i) => (
                <ProductItem
                  key={i}
                  id={i}
                  product={item}
                  deleteModalHanle={deleteModalHanle}
                  editModalHandle={editModalHandle}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <AddProductModal />
      <DeleteModal
        id="deleteProductModal"
        warningText="¿Desea eliminar este producto?"
        handleSubmit={deleteHandle}
        loading={loadingDelete}
      />
      <EditProductModal id="editProductModal" product={editProduct} />
    </div>
  );
};

export default AdminProduct;
