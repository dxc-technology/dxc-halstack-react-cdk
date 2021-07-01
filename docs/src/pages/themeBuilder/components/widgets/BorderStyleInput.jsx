import React from "react";
import styled from "styled-components";

const styleOptions = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

const BorderStyleInput = ({
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

export default BorderStyleInput;
