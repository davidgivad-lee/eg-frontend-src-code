import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import $ from "jquery";

import { categories, listColors } from "../../utils/datas";
import { saveProduct } from "../../redux/Products/productsActions";
import FormGroup from "../../components/Form/FormGroup";
import FormSelect from "../../components/Form/FormSelect";
import FormCheckbox from "../../components/Form/FormCheckbox";
import FormUpload from "../../components/Form/FormUpload";
import Button from "../../components/Button/Button";
import CancelButton from "../../components/Button/CancelButton";

const EditProductModal = (props) => {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [nameDetail, setNameDetail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [wholePrice, setWholePrice] = useState("");
  const [rating, setRating] = useState("");
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [photos, setPhotos] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [errorForm, addError] = useState({});
  const [uploadingError, setUploadingError] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const { loading, product, success, error } = productSave;

  const dispatch = useDispatch();

  const ref = useRef(null);

  useEffect(() => {
    setProductId(props.product._id || "");
    setName(props.product.name || "");
    setNameDetail(props.product.nameDetail || "");
    setDescription(props.product.description || "");
    setPrice(props.product.price || "");
    setWholePrice(props.product.wholePrice || "");
    setRating(props.product.rating || "");
    setColors(props.product.colors || []);
    setCategory(props.product.category || "");
    setLength(props.product.length || "");
    setHeight(props.product.height || "");
    setWidth(props.product.width || "");
    setPhotos(props.product.photos);
    addError({});
  }, [props.product]);

  useEffect(() => {
    if (success) {
      $("#editProductModal").modal("hide");
    }
    return () => {};
  }, [product]);

  const selectColors = (colorSelected) => {
    const index = colors.indexOf(colorSelected);
    let listColors = colors;
    if (index === -1) {
      listColors.push(colorSelected);
    } else {
      listColors.splice(index, 1);
    }
    setColors([...listColors]);
  };

  const submitHandler = (e) => {
    let errors = {};
    if (name === "") {
      errors.name = "Debes ingresar un nombre para el producto.";
    }
    if (description === "") {
      errors.description = "Debes ingresar una descripción sobre el producto.";
    }
    if (price === "") {
      errors.price = "Debes ingresar un precio.";
    }
    if (category === "") {
      errors.category = "Debes seleccionar una categoría.";
    }
    if (photos === "") {
      setUploadingError("Debes agregar una foto.");
    }
    addError(errors);

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch(
        saveProduct({
          productId,
          name,
          nameDetail,
          description,
          price,
          wholePrice,
          rating,
          colors,
          category,
          length,
          width,
          height,
          photos,
        })
      );
    }
  };

  const cancelHandler = () => {
    console.log("cancelar");
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploadingError("");
    axios
      .post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((response) => {
        setPhotos(response.data);
        setPhotoName(file.name);
        addError({});
      })
      .catch((err) => {
        if (err.response) {
          setUploadingError(err.response.data.error);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div
      className="modal"
      id="editProductModal"
      tabIndex="-1"
      data-backdrop="static"
      data-keyboard="false"
      ref={ref}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Producto </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form>
              <FormGroup
                name={"id"}
                labelName="ID"
                placeHolder="ID"
                value={productId}
                onlyRead={true}
                setValue={setProductId}
                checkError={hasError}
                errorMsg={errorForm.id}
                inputId="edit"
              />
              <FormGroup
                name={"name"}
                labelName="Nombre"
                placeHolder="Juguete XX"
                value={name}
                setValue={setName}
                checkError={hasError}
                errorMsg={errorForm.name}
                inputId="edit"
              />
              <FormGroup
                name={"nameDetail"}
                labelName="Nombre detallado"
                placeHolder="Juguete con XX y XXXX, etc"
                value={nameDetail}
                setValue={setNameDetail}
                checkError={hasError}
                errorMsg={errorForm.nameDetail}
                inputId="edit"
              />
              <FormGroup
                name={"description"}
                labelName="Descripción"
                placeHolder="Descripción acerca del producto"
                value={description}
                setValue={setDescription}
                checkError={hasError}
                errorMsg={errorForm.description}
                inputId="edit"
              />
              <FormGroup
                name={"price"}
                labelName="Precio por unidad"
                placeHolder="XX"
                value={price}
                setValue={setPrice}
                checkError={hasError}
                errorMsg={errorForm.price}
                inputId="edit"
              />
              <FormGroup
                name={"wholePrice"}
                labelName="Precio por caja"
                placeHolder="XXX"
                value={wholePrice}
                setValue={setWholePrice}
                checkError={hasError}
                errorMsg={errorForm.wholePrice}
                inputId="edit"
              />
              <FormGroup
                name={"rating"}
                labelName="Clasificación"
                placeHolder="1 ~ 50"
                value={rating}
                setValue={setRating}
                checkError={hasError}
                errorMsg={errorForm.rating}
                inputId="edit"
              />
              <FormCheckbox
                id={props.id}
                name={"colors"}
                labelName="Colores"
                placeHolder="Rojo, amarillo, azul"
                value={colors}
                options={listColors}
                setValue={selectColors}
                checkError={hasError}
                errorMsg={errorForm.colors}
                inputId="edit"
              />
              <FormSelect
                name={"category"}
                labelName="Categoría"
                options={categories}
                value={category}
                setValue={setCategory}
                checkError={hasError}
                errorMsg={errorForm.category}
                inputId="edit"
              />
              <FormGroup
                name={"height"}
                labelName="Altura (mts)"
                placeHolder="X mts"
                value={height}
                setValue={setHeight}
                checkError={hasError}
                errorMsg={errorForm.height}
                inputId="edit"
              />
              <FormGroup
                name={"width"}
                labelName="Ancho (mts)"
                placeHolder="X mts"
                value={width}
                setValue={setWidth}
                checkError={hasError}
                errorMsg={errorForm.width}
                inputId="edit"
              />
              <FormGroup
                name={"length"}
                labelName="Largo (mts)"
                placeHolder="X mts"
                value={length}
                setValue={setLength}
                checkError={hasError}
                errorMsg={errorForm.length}
                inputId="edit"
              />
              <FormUpload
                name={"photos"}
                labelName="Fotos"
                placeHolder="Seleccionar fotos (jpg o svg)"
                value={photos}
                valueName={photoName}
                setValue={uploadFileHandler}
                uploadingError={uploadingError}
                inputId="edit"
              />
            </form>
          </div>
          <div className="row p-4 mx-0 border-top">
            <div className="col-6">
              <CancelButton
                loading={false}
                text={"Cancelar"}
                submitHandler={cancelHandler}
                customStyle={"w-100"}
                modal="modal"
              />
            </div>
            <div className="col-6">
              <Button
                loading={loading}
                text={"Agregar"}
                submitHandler={submitHandler}
                customStyle={"w-100"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
