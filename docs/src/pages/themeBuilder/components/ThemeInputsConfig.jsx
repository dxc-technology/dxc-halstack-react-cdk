import React from "react";
import styled from "styled-components";
import ThemeInput from "./ThemeInput";

const ThemeInputsConfig = ({
  componentInputs,
  componentInputsTypes,
  onChangeCustomTheme,
}) => {
  return (
    <ThemeInputsConfigContainer>
      <Title>Theme Inputs</Title>
      <InputsList>
        {Object.keys(componentInputs).map((propertyName, index) => (
          <ThemeInput
            key={`themeInput-${index}`}
            propertyName={propertyName}
            propertyValue={componentInputs[propertyName]}
            onChangeCustomTheme={onChangeCustomTheme}
            tokenType={componentInputsTypes[propertyName]}
          />
        ))}
      </InputsList>
    </ThemeInputsConfigContainer>
  );
};

const Title = styled.h3`
  font-size: 16px;
  color: #6F2C91;
  font-weight: 600;
  margin: 0px;
  padding: 11.5px 24px;
  border-bottom: 1px solid rgb(191, 191, 191);
`;

const ThemeInputsConfigContainer = styled.div`
  height: calc(100vh - 114px);
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  position: sticky;
  top: 89px;
  margin: 25px;
`;

const InputsList = styled.div`
  width: 350px;
  padding: 25px;

  overflow: hidden auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(214, 214, 214);
    border-radius: 26px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(102, 102, 102);
    border-radius: 26px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default ThemeInputsConfig;
