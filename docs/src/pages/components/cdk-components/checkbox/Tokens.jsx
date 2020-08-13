import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const checkboxTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>color</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>Applies to backgroundColorChecked and borderColor.</td>
      </tr>
      <tr>
        <td>checkColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to checkColor.</td>
      </tr>
      
    </DxcTable>
  );
};

export default checkboxTokensTable;
