import React from "react";
import styled from "styled-components";

const transformOptions = [
  "left",
  "right",
  "center",
  "justify",
  "justify-all",
  "start",
  "end",
  "match-parent",
];

const TextAlignInput = ({
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
        <option
          value={transformOption}
          selected={transformOption === propertyValue}
        >
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

export default TextAlignInput;
