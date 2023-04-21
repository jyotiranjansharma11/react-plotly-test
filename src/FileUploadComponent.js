import { useContext, useState } from "react";
import imageDataURLContext from "./utils/imageDataURLContext";

const FileUploadComponent = ({ setImgUrl }) => {
  const onFileUploadHandler = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      setImgUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <label>Upload file here:</label>
      <input type="file" id="file" onChange={onFileUploadHandler} />
    </>
  );
};

export default FileUploadComponent;
