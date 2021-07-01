import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageConfig = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [logoImage, setLogoImage] = useState(propertyValue || null);
  const clickToUpload = function (event) {
    event.target.previousSibling.click();
  };
  const upload = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    onChangeCustomTheme(propertyName, url);
    setLogoImage(url);
  };

  useEffect(() => {
    setLogoImage(propertyValue || null);
  }, [propertyValue]);

  return (
    <UploadContainer>
      <LogoImage src={logoImage} />
      <UploadInputFile
        type="file"
        name="file"
        accept="image/*"
        onChange={upload}
      ></UploadInputFile>
      <UploadButton
        onClick={clickToUpload}
      >
        Choose a file
      </UploadButton>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
  background-color: #d9d9d9;
`;

const UploadInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const UploadButton = styled.button`
  margin-left: 10px;
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 140px;
`;

export default ImageConfig;
