import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import $ from "jquery";

import { categories, listColors } from "../../utils/datas";
import { saveProduct } from "../../redux/Products/productsActions";
import FormGroup from "../../components/Form/FormGroup";
import FormSelect from "../../components/Form/FormSelect";
import FormCheckbox from "../../components/Form/FormCheckbox";
import Button from "../../components/Button/Button";
import CancelButton from "../../components/Button/CancelButton";
import FileUploader from "../../components/FileUploader/FileUploader";

const AddProductModal = (props) => {
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
  const [photos, setPhotos] = useState([]);

  const [errorForm, addError] = useState({});
  const [uploadingError, setUploadingError] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const { loading, product, success, error } = productSave;

  const dispatch = useDispatch();

  const ref = useRef(null);

  let inputRefs = {};

  const setInputRefs = (element) => {
    if (element) {
      inputRefs[element.id] = element;
    }
  };

  useEffect(() => {
    if (success) {
      $("#addModal").modal("hide");
      // should not reload and clear all inputs including previews list...
      window.location.reload();
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
    e.preventDefault();
    console.log(photos);
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
    if (photos.length === 0) {
      setUploadingError("Debes agregar una foto.");
    } else {
      setUploadingError("");
    }
    addError(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      const photoList = photos.map((item) => item.uploadName);
      dispatch(
        saveProduct({
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
          photos: photoList,
        })
      );
    } else {
      const inputName = "add" + Object.keys(errors)[0] + "Input";
      const aux = Object.entries(inputRefs).filter(([key, value]) => {
        return value && key === inputName;
      });
      aux[0][1].focus();
      //inputRefs.addnameInput.focus()
    }
  };

  const cancelHandler = () => {
    console.log("cancelar");
  };

  const hasError = (key) => {
    return errorForm.hasOwnProperty(key);
  };

  return (
    <div
      className="modal"
      id="addModal"
      tabIndex="-1"
      data-backdrop="static"
      data-keyboard="false"
      ref={ref}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar nuevo producto</h5>
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
                name="name"
                labelName="Nombre"
                placeHolder="Juguete XX"
                value={name}
                setValue={setName}
                checkError={hasError}
                errorMsg={errorForm.name}
                setRef={setInputRefs}
                inputId="add"
              />
              <FormGroup
                name="nameDetail"
                labelName="Nombre detallado"
                placeHolder="Juguete con XX y XXXX, etc"
                value={nameDetail}
                setValue={setNameDetail}
                checkError={hasError}
                errorMsg={errorForm.nameDetail}
                inputId="add"
              />
              <FormGroup
                name="description"
                labelName="Descripción"
                placeHolder="Descripción acerca del producto"
                value={description}
                setValue={setDescription}
                checkError={hasError}
                errorMsg={errorForm.description}
                textArea={true}
                setRef={setInputRefs}
                inputId="add"
              />
              <FormGroup
                name="price"
                labelName="Precio por unidad"
                placeHolder="XX"
                value={price}
                setValue={setPrice}
                checkError={hasError}
                errorMsg={errorForm.price}
                setRef={setInputRefs}
                inputId="add"
              />
              <FormGroup
                name="wholePrice"
                labelName="Precio por caja"
                placeHolder="XXX"
                value={wholePrice}
                setValue={setWholePrice}
                checkError={hasError}
                errorMsg={errorForm.wholePrice}
                inputId="add"
              />
              <FormGroup
                name="rating"
                labelName="Clasificación"
                placeHolder="1 ~ 50"
                value={rating}
                setValue={setRating}
                checkError={hasError}
                errorMsg={errorForm.rating}
                inputId="add"
              />
              <FormCheckbox
                name="colors"
                labelName="Colores"
                placeHolder="Rojo, amarillo, azul"
                value={colors}
                options={listColors}
                setValue={selectColors}
                checkError={hasError}
                errorMsg={errorForm.colors}
                inputId="add"
              />
              <FormSelect
                name="category"
                labelName="Categoría"
                options={categories}
                value={category}
                setValue={setCategory}
                checkError={hasError}
                errorMsg={errorForm.category}
                setRef={setInputRefs}
                inputId="add"
              />
              <FormGroup
                name="height"
                labelName="Altura (mts)"
                placeHolder="X mts"
                value={height}
                setValue={setHeight}
                checkError={hasError}
                errorMsg={errorForm.height}
                inputId="add"
              />
              <FormGroup
                name="width"
                labelName="Ancho (mts)"
                placeHolder="X mts"
                value={width}
                setValue={setWidth}
                checkError={hasError}
                errorMsg={errorForm.width}
                inputId="add"
              />
              <FormGroup
                name="length"
                labelName="Largo (mts)"
                placeHolder="X mts"
                value={length}
                setValue={setLength}
                checkError={hasError}
                errorMsg={errorForm.length}
                inputId="add"
              />
              <FileUploader
                name="photos"
                labelName="Fotos"
                placeHolder="Seleccionar fotos (jpg o png)"
                uploadingError={uploadingError}
                value={photos}
                setValue={setPhotos}
                setRef={setInputRefs}
                inputId="add"
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

export default AddProductModal;
