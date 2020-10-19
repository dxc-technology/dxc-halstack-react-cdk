import React, { useState, useContext, useMemo } from "react";
import Slider from "@material-ui/lab/Slider";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import DxcInput from "../input-text/InputText";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getMargin, getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcSlider = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  value,
  showLimitsValues = false,
  showInput = false,
  name,
  onChange,
  onDragEnd,
  disabled = false,
  marks = false,
  margin,
  size = "fillParent",
}) => {
  const [innerValue, setInnerValue] = useState(0);

  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  const handlerSliderChange = (event, newValue) => {
    if (value == null) {
      const valueToCheck = value !== undefined ? value : innerValue;
      if (valueToCheck !== newValue) {
        setInnerValue(newValue);
      }
    }
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  };
  const handlerInputChange = (event) => {
    if (value == null) {
      setInnerValue(event > maxValue ? maxValue : event);
    }
    if (typeof onChange === "function") {
      onChange(event > maxValue ? maxValue : event);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.slider}>
      <SliderContainer margin={margin} size={size} minValue={minValue}>
        {showLimitsValues && <MinLabelContainer disabled={disabled}>{minValue}</MinLabelContainer>}
        <Slider
          value={(value != null && value >= 0 && value) || innerValue}
          min={minValue}
          max={maxValue}
          onChange={handlerSliderChange}
          onChangeCommitted={onDragEnd && ((event, selectedValue) => onDragEnd(selectedValue))}
          step={step}
          marks={marks || []}
          disabled={disabled}
        />
        {showLimitsValues && (
          <MaxLabelContainer disabled={disabled} step={step}>
            {maxValue}
          </MaxLabelContainer>
        )}
        {showInput && (
          <StyledTextInput>
            <DxcInput
              name={name}
              value={(value != null && value >= 0 && value) || innerValue}
              disabled={disabled}
              onChange={handlerInputChange}
              size="small"
              margin={{ left: "medium" }}
            />
          </StyledTextInput>
        )}
      </SliderContainer>
    </ThemeProvider>
  );
};

const sizes = {
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

DxcSlider.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showLimitsValues: PropTypes.bool,
  showInput: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  disabled: PropTypes.bool,
  marks: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

const StyledTextInput = styled.div`
  .MuiTextField-root {
    font-size: 16px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  width: ${(props) => calculateWidth(props.margin, props.size)};

  .MultiSlider-root {
    display: flex;
    align-items: center;
  }
  .MuiSlider-container {
    padding: 30px 24px;
  }

  .MuiSlider-root.Mui-disabled {
    opacity: ${(props) => props.theme.disabledthumbBackgroundColor};
    color: ${(props) => props.theme.color};
    cursor: not-allowed;
  }

  .MuiSlider-root > .MuiSlider-mark.MuiSlider-markActive ~ .MuiSlider-mark.MuiSlider-markActive {
    display: ${(props) => props.minValue > 0 && "block"};
  }

  .MuiSlider-mark.MuiSlider-markActive {
    display: none;
  }

  .Mui-disabled {
    & .MuiSlider-thumb {
      height: 14px;
      width: 14px;
      background-color: ${(props) => props.theme.color};
      top: 35%;
    }
    & .MuiSlider-track {
      background-color: ${(props) => props.theme.color};
    }
    & > .MuiSlider-mark.MuiSlider-markActive {
      background-color: ${(props) => props.theme.color} !important;
    }
    & > .MuiSlider-mark {
      background-color: ${(props) => props.theme.color};
      width: 6px;
      height: 6px;
      border-radius: 18px;
    }
    & .MuiSlider-rail {
      opacity: 1;
      opacity: ${(props) => props.theme.disabledtotalLine};
    }
  }
  .MuiSlider-thumb {
    height: 14px;
    width: 14px;
    background-color: ${(props) => props.theme.color};
    top: 45%;
    :hover,
    &.Mui-focusVisible {
      box-shadow: none;
    }
    &.MuiSlider-active {
      box-shadow: none;
    }
    :hover:not(:active) {
      box-shadow: "0px 0px 0px 18px #66666633";
    }
    :active {
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      background-color: ${(props) => props.theme.color};
      top: 45%;
      transform: scale(1.25);
      transform-origin: center;
    }
    &:focus {
      outline: ${(props) => props.theme.focusColor} auto 1px;
    }
  }
  .MuiSlider-track {
    background-color: ${(props) => props.theme.color};
    height: 2px;
    top: 50%;
  }

  .MuiSlider-track.MuiSlider-trackAfter {
    background-color: ${(props) => props.theme.color};
  }
  .MuiSlider-rail {
    background-color: ${(props) => props.theme.color};
    top: 50%;
    opacity: ${(props) => props.theme.totalLine};
  }

  .MuiSlider-mark.MuiSlider-markActive {
    background-color: ${(props) => props.theme.color};
  }

  .MuiSlider-mark {
    background-color: ${(props) => props.theme.color};
    width: 6px;
    height: 6px;
    border-radius: 18px;
    top: 42%;
  }
`;

const MinLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  font-size: 16px;
  margin-right: 15px;
`;

const MaxLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  font-size: 16px;
  margin-left: ${(props) => (props.step === 1 ? "15px" : "20px")};
`;

export default DxcSlider;
