import React, { useState } from "react";
import { DxcRadio } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);

  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <div>
      <div className="test-case" id="label-before">
        <h4>Label before</h4>
        <DxcRadio
          label="Radio"
          labelPosition="before"
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div className="test-case" id="label-after">
        <h4>Label after</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div>
        <h4>Dark theme</h4>
        <div
          className="test-case"
          id="dark-theme"
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcRadio
            checked={checked}
            theme="dark"
            label="Radio"
            onClick={onClick}
          />
        </div>
      </div>

      <div className="test-case" id="color-checked">
        <h4>Color checked checkbox</h4>
        <DxcRadio label="Radio" checked={true} onClick={onClick} />
      </div>

      <div className="test-case" id="color-unchecked">
        <h4>Color unchecked checkbox</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div className="test-case" id="disabled-radio">
        <h4>Disabled Radio</h4>
        <DxcRadio
          label="Radio"
          disabled={true}
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div className="test-case" id="required-radio">
        <h4>Required checkbox</h4>
        <DxcRadio
          label="Radio"
          required={true}
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size-single-line">
          <h5>Small size - Label max size single line</h5>
          <DxcRadio
            label="Small si"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div className="test-case" id="small-size-multi-line">
          <h5>Small size - Label min size multi line</h5>
          <DxcRadio
            label="Small siz"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div className="test-case" id="medium-size-single-line">
          <h5>Medium size - Label max size single line</h5>
          <DxcRadio
            label="Medium size example la"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-multi-line">
          <h5>Medium size - Label min size multi line</h5>
          <DxcRadio
            label="Medium size example lab"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="large-size-single-line">
          <h5>Large size - Label max size single line</h5>
          <DxcRadio
            label="Large size example label radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-multi-line">
          <h5>Large size - Label min size multi line</h5>
          <DxcRadio
            label="Large size example label radio radio radio radio radio"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="fillParent-size-single-line">
          <h5>FillParent size - Label max size single line</h5>
          <DxcRadio
            label="FillParent size example label radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio rad"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-multi-line">
          <h5>FillParent size - Label min size multi line</h5>
          <DxcRadio
            label="FillParent size example label radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fitContent-size-single-line">
          <h5>FitContent size - Label max size single line</h5>
          <DxcRadio
            label="FitContent size example label radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio ra"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fitContent"
          />
        </div>
        <div className="test-case" id="fitContent-size-multi-line">
          <h5>FitContent size - Label min size multi line</h5>
          <DxcRadio
            label="FitContent size example label radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio rad"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fitContent"
          />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxlarge"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
