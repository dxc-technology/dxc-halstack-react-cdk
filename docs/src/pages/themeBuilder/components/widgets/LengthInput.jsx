import React, { useState, useEffect } from "react";
import styled from "styled-components";

const unitOptions = [
  "cm",
  "mm",
  "in",
  "px",
  "pt",
  "pc",
  "em",
  "ex",
  "ch",
  "rem",
  "vw",
  "vh",
  "vmin",
  "vmax",
  "%",
];

const LengthInput = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)
  );
  const [unitValue, changeUnitValue] = useState(
    propertyValue.match(/[a-zA-Z]+|%/g) &&
      propertyValue.match(/[a-zA-Z]+|%/g)[0]
  );

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g));
    changeUnitValue(
      propertyValue.match(/[a-zA-Z]+|%/g) &&
        propertyValue.match(/[a-zA-Z]+|%/g)[0]
    );
  }, [propertyValue]);

  return (
    <LengthInputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val + unitValue);
        }}
      />
      <StyledSelect
        onChange={(event) => {
          const val = event.target.value;
          changeUnitValue(val);
          onChangeCustomTheme(propertyName, value + val);
        }}
      >
        {unitOptions.map((unitOption) => (
          <option value={unitOption} selected={unitOption === unitValue}>
            {unitOption}
          </option>
        ))}
      </StyledSelect>
    </LengthInputContainer>
  );
};

const LengthInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 80px;
`;

const StyledSelect = styled.select`
  margin-left: 5px;
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 80px;
`;

export default LengthInput;
