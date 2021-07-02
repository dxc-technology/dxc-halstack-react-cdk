import { DxcHeader, DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcHeader
      underlined={false}
      margin="medium"
      content={<DxcButton label={"Custom Button"} />}
      responsiveContent={(closeHandler) => <DxcButton label={"Custom Button"} onClick={closeHandler} />}
    />
  );
}`;

const scope = {
  DxcHeader,
  DxcButton,
};

export default { code, scope };
