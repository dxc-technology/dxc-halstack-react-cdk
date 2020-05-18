import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { colors, spaces } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcTable = ({ children, margin }) => {
  const colorsTheme = useContext(ThemeContext) || colors;

  return (
    <ThemeProvider theme={colorsTheme}>
      <DxcTableContainer margin={margin}>
        <DxcTableContent>{children}</DxcTableContent>
      </DxcTableContainer>
    </ThemeProvider>
  );
};

const DxcTableContainer = styled.div`
  overflow-x: auto;

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.darkGrey};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.lightGrey};
    border-radius: 6px;
  }
`;

const DxcTableContent = styled.table`
  border-collapse: collapse;
  width: 100%;

  & tr {
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }

  & td {
    color: ${(props) => props.theme.darkGrey};
    min-height: 48px;
  }

  & th {
    padding: 16px 20px 16px 40px;
    min-height: 60px;
  }

  & td {
    padding: 14px 20px 12px 40px;
  }

  & th {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 100;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }

  & th:first-child {
    border-top-left-radius: 4px;
  }

  & th:last-child {
    border-top-right-radius: 4px;
  }
`;

export default DxcTable;
