import React from "react";
import styled from "styled-components";

const transformOptions = ["none", "uppercase", "lowercase", "capitalize"];

const TextTransformInput = ({
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
      {transformOptions.map((transformOption) => (
        <option value={transformOption} selected={transformOption === propertyValue}>
          {transformOption}
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

export default TextTransformInput;
