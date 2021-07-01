import React, { useState, useEffect } from "react";
import styled from "styled-components";

const IntegerInput = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [value, changeValue] = useState(propertyValue.match(/-?[0-9]+/g));

  useEffect(() => {
    changeValue(propertyValue.match(/-?[0-9]+/g));
  }, [propertyValue]);

  return (
    <IntegerInputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={(event) => {
          const val = event.target.value;
          changeValue(val);
          onChangeCustomTheme(propertyName, val);
        }}
      />
    </IntegerInputContainer>
  );
};

const IntegerInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 80px;
`;

export default IntegerInput;
