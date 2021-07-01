import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BorderWidthInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}) => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)
  );
  const unitValue =
    propertyValue.match(/[a-zA-Z]+|%/g) &&
    propertyValue.match(/[a-zA-Z]+|%/g)[0];

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g));
  }, [propertyValue]);

  return (
    <BorderWidthInputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val + unitValue);
        }}
      />
      <StyledLabel> {unitValue}</StyledLabel>
    </BorderWidthInputContainer>
  );
};

const BorderWidthInputContainer = styled.div`
  display: flex;
  align-items: center;
  font: normal 12px/17px Open Sans;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 80px;
`;

const StyledLabel = styled.span`
  font: normal 12px/17px Open Sans;
  padding-left: 5px;
`;

export default BorderWidthInput;
