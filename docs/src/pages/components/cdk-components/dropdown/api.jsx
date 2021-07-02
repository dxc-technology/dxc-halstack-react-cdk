import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const dropdownPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>options: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the options. Each object has the
          following properties:
          <ul>
            <li>
              <b>label</b>: Option display value.
            </li>
            <li>
              <b>icon</b>: Element used as the icon that will be placed next to
              the option label.
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon that will be placed next to the
              option label. <b>Deprecated.</b>
            </li>
            <li>
              <b>value</b>: Option inner value.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>optionsIconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>
          In case options include icons, whether the icon should appear after or
          before the label.
        </td>
      </tr>
      <tr>
        <td>icon: node</td>
        <td></td>
        <td>
          Element used as the icon that will be placed next to the dropdown
          label.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td>
          <code></code>
        </td>
        <td>
          <b>Deprecated.</b> URL of the icon that will be placed next to the
          dropdown label.
        </td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the icon should appear after or before the label.</td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed within the dropdown.</td>
      </tr>
      <tr>
        <td>caretHidden: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>Whether the arrow next to the label must be displayed or not.</td>
      </tr>
      <tr>
        <td>onSelectOption: function</td>
        <td></td>
        <td>
          This function will be called every time the selection changes. The
          value of the selected option will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>expandOnHover: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the options are showed when the dropdown is hover.</td>
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
        <td>size: string | object</td>
        <td>
          <code>'fitContent'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fitContent' |
          'fillParent' ).
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
    </DxcTable>
  );
};

export default dropdownPropsTable;
