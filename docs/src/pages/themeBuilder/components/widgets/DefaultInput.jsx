import React from "react";
import styled from "styled-components";

const DefaultInput = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  return (
    <DefaultInputContainer>
      <StyledInput
        type="text"
        value={propertyValue}
        onChange={(event) => {
          const val = event.target.value;
          onChangeCustomTheme(propertyName, val);
        }}
      />
    </DefaultInputContainer>
  );
};

const DefaultInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  font: normal 12px/17px Open Sans;
  width: 165px;
`;

export default DefaultInput;
