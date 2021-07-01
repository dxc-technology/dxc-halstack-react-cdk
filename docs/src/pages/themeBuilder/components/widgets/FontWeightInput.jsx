import React from "react";
import styled from "styled-components";

const weightOptions = [
  "normal",
  "bold",
  "lighter",
  "bolder",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const FontWeightInput = ({
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
      {weightOptions.map((weightOption) => (
        <option value={weightOption} selected={weightOption === propertyValue}>
          {weightOption}
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

export default FontWeightInput;
