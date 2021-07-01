import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AlphaValueInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}) => {
  const [value, changeValue] = useState(
    propertyValue.match(/-?[0-9]+(.[0-9]+)?/g)
  );

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+(.[0-9]+)?/g));
  }, [propertyValue]);

  return (
    <AlphaValueInputContainer>
      <StyledInput
        type="number"
        value={value}
        min="0"
        max="1"
        step="0.01"
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val);
        }}
      />
    </AlphaValueInputContainer>
  );
};

const AlphaValueInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 80px;
`;

export default AlphaValueInput;
