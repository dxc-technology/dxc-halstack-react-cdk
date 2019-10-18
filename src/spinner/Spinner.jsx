import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcSpinner = ({ label = "", theme = "light", overlay = true, value, showValue = false }) => {
  return (
    <BackgroundSpinner theme={theme} overlay={overlay}>
      <DXCSpinner overlay={overlay} showValue={showValue}>
        <SpinnerLabel theme={theme} overlay={overlay}>
          {label}
        </SpinnerLabel>
        <SpinnerProgress theme={theme} overlay={overlay} showValue={showValue}>
          {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}%
        </SpinnerProgress>
        <CircularProgress
          variant={showValue ? "determinate" : "indeterminate"}
          value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
        />
      </DXCSpinner>
    </BackgroundSpinner>
  );
};

DxcSpinner.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  overlay: PropTypes.bool,
  value: PropTypes.number,
  showValue: PropTypes.bool
};

const BackgroundSpinner = styled.div`
  background-color: ${props => (props.overlay === true ? colors.black.concat("B3") : "transparent")};
  background-color: ${props =>
    props.overlay === true ? `${colors.black}B3` : props.theme === "dark" ? `${colors.black}` : `${colors.white}`};
  width: ${props => (props.overlay === true ? "100%" : "")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.overlay === true ? "center" : "")};
  height: ${props => (props.overlay === true ? "100vh" : "")};
  align-items: ${props => (props.overlay === true ? "center" : "")};
`;

const DXCSpinner = styled.div`
  border-radius: 80px;
  border: 9px solid white;
  width: 120px;
  height: 120px;
  margin-top: 34px;
  margin-left: 111px;
  margin-right: 111px;
  margin-bottom: 34px;
  z-index: ${props => (props.overlay === true ? "100" : "")};

  .MuiCircularProgress-colorPrimary {
    color: ${colors.yellow};
    width: 140px !important;
    height: 140px !important;
    margin-top: ${props => (props.showValue === true && "-90px") || "-76px"};
    margin-left: -10px;
  }
`;

const SpinnerLabel = styled.div`
  margin-top: 52px;
  color: ${props => (props.theme === "dark" || props.overlay === true ? colors.white : colors.black)};
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
`;

const SpinnerProgress = styled.div`
  display: ${props => (props.value !== "" && props.showValue === true && "block") || "none"};
  color: ${props => (props.theme === "dark" || props.overlay === true ? colors.white : colors.black)};
  font-size: 12px;
  text-align: center;
`;

export default DxcSpinner;
