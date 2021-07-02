import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import { ClickAwayListener } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcDropdown = ({
  options = [],
  optionsIconPosition = "before",
  icon,
  iconSrc = "",
  iconPosition = "before",
  label = "",
  disabled = false,
  caretHidden = false,
  onSelectOption,
  margin,
  size = "fitContent",
  expandOnHover = false,
  tabIndex = 0,
}) => {
  const [width, setWidth] = useState();
  const colorsTheme = useTheme();

  const ref = useRef(null);
  const handleResize = () => {
    if (ref.current) setWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (ref.current) ref.current.removeEventListener("resize", handleResize);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(option) {
    setAnchorEl(null);
    if (typeof onSelectOption === "function") {
      onSelectOption(option.value);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleCloseOver = expandOnHover ? handleClose : undefined;

  const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M7 14l5-5 5 5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  const DownArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DxCDropdownContainer margin={margin} size={size} disabled={disabled}>
        <div
          onMouseOver={expandOnHover && !disabled ? handleClickListItem : undefined}
          onMouseOut={handleCloseOver}
          onFocus={handleCloseOver}
          onBlur={handleCloseOver}
        >
          <DropdownTrigger
            opened={anchorEl === null ? false : true}
            onClick={handleClickListItem}
            disabled={disabled}
            label={label}
            caretHidden={caretHidden}
            margin={margin}
            size={size}
            ref={ref}
            tabIndex={tabIndex}
          >
            <DropdownTriggerContainer iconPosition={iconPosition} caretHidden={caretHidden}>
              {icon ? (
                <ListIconContainer label={label} iconPosition={iconPosition}>
                  {typeof icon === "object" ? icon : React.createElement(icon)}
                </ListIconContainer>
              ) : (
                iconSrc && <ListIcon label={label} src={iconSrc} iconPosition={iconPosition} />
              )}
              <DropdownTriggerLabel iconPosition={iconPosition} label={label}>
                {label}
              </DropdownTriggerLabel>
            </DropdownTriggerContainer>
            <CaretIcon>
              {caretHidden !== true &&
                (anchorEl === null ? (
                  <DownArrowIcon caretHidden={caretHidden} margin={margin} />
                ) : (
                  <UpArrowIcon caretHidden={caretHidden} margin={margin} />
                ))}
            </CaretIcon>
          </DropdownTrigger>
          <DxcMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            optionsIconPosition={optionsIconPosition}
            size={size}
            width={width}
            role={undefined}
            transition
            disablePortal
            placement="bottom-start"
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={Boolean(anchorEl)} id="menu-list-grow">
                      {options.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          disableRipple={true}
                          onClick={(event) => handleMenuItemClick(option)}
                        >
                          {option.icon ? (
                            <ListIconContainer label={option.label} iconPosition={optionsIconPosition}>
                              {typeof option.icon === "object" ? option.icon : React.createElement(option.icon)}
                            </ListIconContainer>
                          ) : (
                            option.iconSrc && (
                              <ListIcon label={option.label} src={option.iconSrc} iconPosition={optionsIconPosition} />
                            )
                          )}
                          <span className="optionLabel">{option.label}</span>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </DxcMenu>
        </div>
      </DxCDropdownContainer>
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

const DxCDropdownContainer = styled.div`
  opacity: ${(props) => (props.disabled ? "0.34" : "unset")};
  height: 40px;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  text-overflow: ellipsis;
  overflow: hidden;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-block;

  &:focus {
    outline: ${(props) => props.theme.focusColor} auto 1px;
  }
`;

const DxcMenu = styled(Popper)`
  z-index: 1;

  .MuiMenuItem-gutters {
    width: ${(props) => calculateWidth(props.margin, props.size)};
  }
  .MuiMenuItem-root {
    min-height: 36px;
    padding-top: ${(props) => props.theme.optionsPaddingTop};
    padding-bottom: ${(props) => props.theme.optionsPaddingBottom};
    padding-left: ${(props) => props.theme.optionsPaddingLeft};
    padding-right: ${(props) => props.theme.optionsPaddingRight};
    height: auto;
  }

  .MuiPaper-root {
    min-width: ${(props) => `${props.width}px`};

    color: ${(props) => props.theme.optionsListFontColor};
    border-width: ${(props) => props.theme.borderThickness};
    border-style: ${(props) => props.theme.borderStyle};
    border-color: ${(props) => props.theme.borderColor};

    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    max-height: 230px;
    overflow: auto;
    .MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .MuiListItem-button {
      display: flex;
      flex-direction: ${(props) => (props.optionsIconPosition === "after" && "row-reverse") || "row"};
      justify-content: ${(props) => (props.optionsIconPosition === "after" && "flex-end") || ""};
      font-size: ${(props) => props.theme.optionsFontSize};
      font-style: ${(props) => props.theme.optionsFontStyle};
      font-weight: ${(props) => props.theme.optionsFontWeight};
      color: ${(props) => props.theme.optionsFontColor};
      cursor: pointer;
    }
    .MuiListItem-button:hover {
      background-color: ${(props) => props.theme.optionsListHoverBackgroundColor};
      color: ${(props) => props.theme.dropdownFontColor};
    }

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollBarTrackColor};
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollBarThumbColor};
      border-radius: 3px;
    }
  }
`;

const DropdownTrigger = styled.button`
  padding: 0 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.buttonFontSize};
  font-style: ${(props) => props.theme.buttonFontStyle};
  font-weight: ${(props) => props.theme.buttonFontWeight};
  width: 100%;
  height: auto;
  min-height: 40px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};

  min-width: ${(props) => (props.label === "" ? "0px" : calculateWidth(props.margin, props.size))};

  padding-top: ${(props) => props.theme.labelPaddingTop};
  padding-bottom: ${(props) => props.theme.labelPaddingBottom};
  padding-left: ${(props) => props.theme.labelPaddingLeft};
  padding-right: ${(props) => props.theme.labelPaddingRight};
  &:focus {
    outline: none;
  }

  background-color: ${(props) =>
    props.opened === true ? props.theme.buttonHoverBackgroundColor : props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonFontColor};

  border-bottom-right-radius: ${(props) => (props.opened === true ? "0px" : props.theme.borderRadius)};
  border-bottom-left-radius: ${(props) => (props.opened === true ? "0px" : props.theme.borderRadius)};
  &:hover {
    background-color: ${(props) => (!props.disabled ? props.theme.buttonHoverBackgroundColor : "")};
  }
  &:active {
    background-color: ${(props) => (!props.disabled ? "#d9d9d9" : "")};
  }
`;

const DropdownTriggerLabel = styled.span`
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DropdownTriggerContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.iconPosition === "after" && "row-reverse") || "row"};
  margin-left: 0px;
  margin-right: 0px;
  width: ${(props) => (props.caretHidden ? "100%" : "calc(100% - 36px)")};
  white-space: nowrap;
`;

const ListIcon = styled.img`
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  margin-left: ${(props) =>
    (props.iconPosition === "after" && props.label !== "" && props.theme.iconOptionSpacing) || "0px"};
  margin-right: ${(props) =>
    (props.iconPosition === "before" && props.label !== "" && props.theme.iconOptionSpacing) || "0px"};
`;

const ListIconContainer = styled.div`
  color: ${(props) => props.theme.iconColor};
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  overflow: hidden;
  margin-left: ${(props) =>
    (props.iconPosition === "after" && props.label !== "" && props.theme.iconOptionSpacing) || "0px"};
  margin-right: ${(props) =>
    (props.iconPosition === "before" && props.label !== "" && props.theme.iconOptionSpacing) || "0px"};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const CaretIcon = styled.div`
  display: ${(props) => (props.caretHidden === true ? "none" : "inline-flex")};
  margin-top:${(props) => props.theme.caretIconMarginTop};
  margin-bottom${(props) => props.theme.caretIconMarginBottom};
  margin-left: ${(props) => props.theme.caretIconMarginLeft};
  margin-right: ${(props) => props.theme.caretIconMarginRight};
  & > svg {
    fill: ${(props) => props.theme.fontColor};
  }
`;

DxcDropdown.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  optionsIconPosition: PropTypes.oneOf(["after", "before", ""]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  iconSrc: PropTypes.string,
  iconPosition: PropTypes.oneOf(["after", "before", ""]),
  label: PropTypes.string,
  caretHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  onSelectOption: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
    })
  ),
  tabIndex: PropTypes.number,
};

export default DxcDropdown;
