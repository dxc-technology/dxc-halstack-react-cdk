import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    }
  ];

  return (
    <DxcSelect
      options={optionsWithoutIcon}
      onChange={onChange}
      label="Uncontrolled Select"
      margin="medium"
    ></DxcSelect>
  );
}`;

const scope = {
  DxcSelect,
  useState
};

export default { code, scope };
