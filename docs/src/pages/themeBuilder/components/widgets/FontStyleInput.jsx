import React from "react";
import styled from "styled-components";

const styleOptions = ["normal", "italic", "oblique"];

const FontStyleInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}) => {
  return (
    <StyledSelect
      onChange={(event) => {
        onChangeCustomTheme(propertyName, event.target.value);
      }}
    >
      {styleOptions.map((styleOption) => (
        <option value={styleOption} selected={styleOption === propertyValue}>
          {styleOption}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 87px;
`;

export default FontStyleInput;
