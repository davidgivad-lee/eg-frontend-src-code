import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/Products/productsActions";

import configIcon from "../../assets/icons/config.svg";
import productImg from "../../assets/product1.png";
import ProductItem from "./ProductItem";

const AdminProduct = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const handleOption = () => {};
  return loading ? (
    <div> Loading...</div>
  ) : error ? (
    <div> error</div>
  ) : (
    <div className="container-fluid">
      <h4>Administrar los productos</h4>
      <div className="row">
        <div className="col-6">Mostrar XX cantidad</div>
        <div className="col-6">Buscar:</div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Nombre detallado</th>
              <th scope="col">Descripción</th>
              <th scope="col">Review</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio unidad</th>
              <th scope="col">Precio mayor</th>
              <th scope="col">Colores</th>
              <th scope="col">
                <img src={configIcon} />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <ProductItem key={i} product={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
