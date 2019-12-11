import React from "react";
import PropsTable from "../../common/PropsTable";

const switchPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>checked</td>
        <td>
          <code> boolean </code>
        </td>
        <td></td>
        <td>If true, the component is checked.</td>
      </tr>
      <tr>
        <td>value</td>
        <td>
          <code> any </code>
        </td>
        <td></td>
        <td>
          Will be passed to the value attribute of the html input element. When
          inside a form, this value will be only submitted if the switch is
          checked{" "}
        </td>
      </tr>
      <tr>
        <td>label</td>
        <td>
          <code>string</code>
        </td>
        <td></td>
        <td>Text to be placed next to the switch.</td>
      </tr>
      <tr>
        <td>labelPosition</td>
        <td>
          <code>string: 'before' | 'after'</code>
        </td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the label should appear after or before the switch.</td>
      </tr>
      <tr>
        <td>theme</td>
        <td>
          <code> string: 'light' | 'dark'</code>
        </td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>name</td>
        <td>
          <code>string</code>
        </td>
        <td>
        </td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>disableRipple</td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td>
          <code>function</code>
        </td>
        <td></td>
        <td>
          This function will be called when the user clicks the radio. The new
          value will be passed as a parameter.
        </td>
      </tr>
    </PropsTable>
  );
};

export default switchPropsTable;
