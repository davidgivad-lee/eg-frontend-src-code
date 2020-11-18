import React, { useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as CancelIcon } from "../../assets/icons/xCircle.svg";
import "./FileUploader.scss";

const FileUploader = (props) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadErrors, setUploadErrors] = useState([]);

  const [uploadedImage, setUploadedImage] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  useEffect(() => {
    if (Object.keys(uploadedImage).length > 0) {
      const files = [...props.value];
      files.push(uploadedImage);
      props.setValue(files);
    }
  }, [uploadedImage]);

  useEffect(() => {
    if (errorResponse.length > 0) {
      const listError = [...uploadErrors];
      listError.push(errorResponse);
      setUploadErrors(listError);
    }
  }, [errorResponse]);

  const handleChange = (e) => {
    const fileList = Array.from(e.target.files);
    fileList.forEach((file, i) => {
      uploadHandler(file, i);
    });

    const mappedFiles = fileList.map((file) => ({
      file: file,
      preview: URL.createObjectURL(file),
    }));
    const previews = [...imagePreviews];
    previews.push(...mappedFiles);
    setImagePreviews(previews);
  };

  const uploadHandler = (file, index) => {
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
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
        setUploadedImage({ name: file.name, uploadName: response.data });
      })
      .catch((err) => {
        if (err.response) {
          setErrorResponse(file.name);
          return err.response.data.error;
        } else {
          console.log(err);
        }
      });
  };

  const checkErrorFile = (file) => {
    return uploadErrors.indexOf(file.name) !== -1;
  };

  const handleDeleteImage = (file) => {
    const previewList = [...imagePreviews];
    const index = previewList.map((item) => item.file.name).indexOf(file.name);
    const indexError = uploadErrors.indexOf(file.name);
    if (indexError !== -1) {
      const errorList = [...uploadErrors];
      errorList.splice(indexError, 1);
      setUploadErrors(errorList);
      setErrorResponse("");
    } else {
      const fileList = [...props.value];
      const fIndex = fileList.map((item) => item.name).indexOf(file.name);
      fileList.splice(fIndex, 1);
      props.setValue(fileList);
      setUploadedImage("");
    }
    previewList.splice(index, 1);
    setImagePreviews(previewList);
  };
  const hasError = props.uploadingError && props.uploadingError.length !== 0;

  return (
    <div className={"custom-file d-inline mb-4 " + props.customStyle}>
      <label
        className="font-13 text-black-50 d-block"
        htmlFor={props.name + "Input"}
      >
        {props.labelName + ":"}
      </label>
      <input
        type="file"
        className={
          hasError ? "custom-file-input is-invalid" : "custom-file-input"
        }
        id={props.inputId + props.name + "Input"}
        onChange={(e) => handleChange(e)}
        multiple
      />
      <label className="custom-file-label mt-4" htmlFor={props.name + "Input"}>
        {props.valueName === "" ? props.placeHolder : props.valueName}
      </label>
      <div className={hasError ? "invalid-feedback" : "hidden"}>
        {props.uploadingError}
      </div>

      {uploadErrors.length > 0 && (
        <p className="text-danger mb-0 mt-2">
          Tamaño de archivo Excedido. El tamaño de imágen debe ser menor a 1 MB.
        </p>
      )}
      <div className="d-flex flex-row flex-wrap mt-2">
        {imagePreviews.length > 0 &&
          imagePreviews.map((item, i) => (
            <div
              className={
                checkErrorFile(item.file)
                  ? "d-inline-flex position-relative preview-img border-error mr-3 mb-3 p-1"
                  : "d-inline-flex position-relative preview-img border mr-3 mb-3 p-1"
              }
              key={i}
            >
              <a
                href="#"
                onClick={() => handleDeleteImage(item.file)}
                className="delete-icon"
              >
                <CancelIcon className="text-muted" width="16" height="16" />
              </a>
              <div className="d-flex img-container">
                <img className="d-block w-auto h-100" src={item.preview} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUploader;
