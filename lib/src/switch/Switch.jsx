import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";
import DxcRequired from "../common/RequiredComponent";

import { spaces, componentTokens } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcSwitch = ({
  checked,
  value,
  label,
  labelPosition = "before",
  name,
  disabled = false,
  onChange,
  required = false,
  margin,
  size = "fitContent",
  tabIndex = 0,
}) => {
  const [innerChecked, setInnerChecked] = useState(0);
  const colorsTheme = useTheme();

  const handlerSwitchChange = (newValue) => {
    if (checked === undefined) {
      const isChecked = newValue.target.checked === undefined ? !innerChecked : newValue.target.checked;
      setInnerChecked(isChecked);
      if (typeof onChange === "function") {
        onChange(isChecked);
      }
    } else {
      if (typeof onChange === "function") {
        onChange(!checked);
      }
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.switch}>
      <SwitchContainer margin={margin} disabled={disabled} labelPosition={labelPosition} size={size}>
        <Switch
          checked={checked != undefined ? checked : innerChecked}
          inputProps={{ name: name, tabIndex: tabIndex }}
          onChange={handlerSwitchChange}
          value={value}
          disabled={disabled}
          disableRipple
        />
        <LabelContainer disabled={disabled}>
          {required && <DxcRequired />}
          {label}
        </LabelContainer>
      </SwitchContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const SwitchContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin, props.size)};
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => (props.labelPosition === "after" ? "row" : "row-reverse")};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  .MuiSwitch-root {
    align-items: center;
    width: ${(props) => props.theme.trackWidth};
    height: 45px;
    margin: 3px;

    .Mui-focusVisible {
      border: ${(props) => `${props.theme.thumbFocusColor} solid 2px`};
      padding: 7px;
    }
    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${(props) => props.theme.uncheckedTrackBackgroundColor};
      height: ${(props) => props.theme.trackHeight};
      opacity: ${(props) => (props.disabled ? "" : "1")};
    }
    .Mui-checked {
      + .MuiSwitch-track {
        opacity: ${(props) => (props.disabled ? "" : "1")};
      }
    }
    .MuiIconButton-root {
      /*Enabled and unchecked*/
      top: unset;
      .MuiSwitch-thumb {
        /*Only for thumb in all states*/
        width: ${(props) => props.theme.thumbWidth};
        height: ${(props) => props.theme.thumbHeight};
      }
      color: ${(props) => props.theme.uncheckedThumbBackgroundColor};
      &:hover {
        background-color: transparent;
      }
      &.Mui-disabled {
        /*Disabled and unchecked*/
        color: ${(props) => props.theme.disabledUncheckedThumbBackgroundColor};
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${(props) => props.theme.disabledUncheckedTrackBackgroundColor};
        }
      }
      &.Mui-disabled.Mui-checked {
        /*Disabled and checked*/
        color: ${(props) => props.theme.disabledCheckedThumbBackgroundColor};
        + .MuiSwitch-track {
          /*Disabled and checked bar*/
          background-color: ${(props) => props.theme.disabledCheckedTrackBackgroundColor};
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${(props) => props.theme.checkedThumbBackgroundColor};
        transform: translateX(${(props) => props.theme.thumbTranslateX});
        &:hover {
          background-color: transparent;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: ${(props) => props.theme.checkedTrackBackgroundColor};
        }
      }
    }
  }
`;

const LabelContainer = styled.span`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  opacity: ${(props) => (props.disabled ? "0.34" : "")};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => (props.disabled ? props.theme.disabledLabelFontStyle : props.theme.labelFontStyle)};
  font-weight: ${(props) => props.theme.labelFontWeight};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
  margin-right: ${(props) => props.theme.labelMarginRight};
`;

DxcSwitch.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};

export default DxcSwitch;
