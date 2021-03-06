import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const checkboxPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>callbackUpload: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the 'Upload' button
          for every file to be uploaded, we will send as a parameter the File
          object; apart from that this function should return one promise on
          which we should make 'then'(here we should show a Success alert) or
          'catch' (in this case we would receive the error message as a string).
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>
          Value of the tabindex given to every interactuable elementio.
        </td>
      </tr>
    </DxcTable>
  );
};

export default checkboxPropsTable;
