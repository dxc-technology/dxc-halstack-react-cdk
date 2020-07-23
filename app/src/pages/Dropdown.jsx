import React from "react";
import { DxcDropdown, ThemeContext } from "@dxc-technology/halstack-react";
import facebookPath from "../images/facebook.svg";
import linkedinPath from "../images/linkedin.svg";
import twitterPath from "../images/twitter.svg";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
};

function App() {
  const selectOption = () => {
    console.log("selected");
  };

  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Facebook",
    },
    {
      value: 2,
      label: "Twitter",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];
  const optionsWithIcon = [
    {
      value: 1,
      label: "Facebook",
      iconSrc: facebookPath,
    },
    {
      value: 2,
      label: "Linkedin",
      iconSrc: linkedinPath,
    },
    {
      value: 3,
      label: "Twitter",
      iconSrc: twitterPath,
    },
  ];

  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcDropdown
            label="Small"
            size="small"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="medium-size">
          <DxcDropdown
            label="Medium"
            size="medium"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="large-size">
          <DxcDropdown
            label="Large"
            size="large"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="fitContent-size">
          <DxcDropdown
            label="Fit Content"
            size="fitContent"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcDropdown
            label="Fill Parent"
            size="fillParent"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <h4>Margin</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcDropdown
            label="xxSmall margin"
            margin="xxsmall"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcDropdown
            label="xSmall margin"
            margin="xsmall"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-margin">
          <DxcDropdown
            label="Small margin"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="medium-margin">
          <DxcDropdown
            label="Medium margin"
            margin="medium"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="large-margin">
          <DxcDropdown
            label="Large margin"
            margin="large"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcDropdown
            label="xLarge margin"
            margin="xlarge"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xxlarge-margin">
          <DxcDropdown
            label="xxLarge margin"
            margin="xxlarge"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="mode-basic">
          <h4>Basic dropdown and label sizes</h4>
          <DxcDropdown
            label="Basic dropdown"
            mode="basic"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-dropdown-max-size-label-oneline">
          <DxcDropdown
            label="Maximum label size for"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-dropdown-min-size-label-multiline">
          <DxcDropdown
            label="Minimum label size for12"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="mode-outlined">
          <h4>Outlined dropdown and label sizes</h4>
          <DxcDropdown
            label="Outlined dropdown"
            mode="outlined"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="mode-outlined-max-label-size-oneline">
          <DxcDropdown
            label="Maximum label size for"
            mode="outlined"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="mode-outlined-min-label-size-multiline">
          <DxcDropdown
            label="Minimum label size for12"
            mode="outlined"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="with-caret">
          <DxcDropdown
            label="Dropdown with caret"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="without-caret">
          <DxcDropdown
            label="Dropdown without caret"
            margin="small"
            options={optionsWithoutIcon}
            caretHidden={true}
          ></DxcDropdown>
        </div>
        <div>
          <h4>Dark Theme</h4>

          <div
            className="test-case"
            id="basic-dark-theme"
            style={{ backgroundColor: "black" }}
          >
            <DxcDropdown
              label="Dark theme basic dropdown"
              margin="small"
              options={optionsWithoutIcon}
            ></DxcDropdown>
          </div>
          <div
            className="test-case"
            id="outlined-dark-theme"
            style={{ backgroundColor: "black" }}
          >
            <DxcDropdown
              label="Dark theme basic dropdown"
              margin="small"
              mode="outlined"
              options={optionsWithoutIcon}
            ></DxcDropdown>
          </div>
        </div>
      </div>
      <div style={{ height: "200px", display: "flex", flexWrap: "wrap" }}>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          margin="medium"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          margin="medium"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          mode={"outlined"}
          margin="medium"
        ></DxcDropdown>
      </div>
      <div
        style={{
          background: "black",
          display: "flex",
          height: "250px",
          flexWrap: "wrap",
        }}
      >
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="dark"
          margin="medium"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="dark"
          margin="medium"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          mode={"outlined"}
          theme="dark"
          margin="medium"
          size="large"
        ></DxcDropdown>
      </div>
      <div>
        <h4>Custom Dropdown</h4>
        <div className="test-case" id="custom-colors">
          <ThemeContext.Provider value={colors}>
            <DxcDropdown
              label="Custom Dropdown"
              size="large"
              margin="small"
              options={optionsWithoutIcon}
            ></DxcDropdown>
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
