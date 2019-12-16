import React from "react";
import PropsTable from "../../common/PropsTable";

const tabbedSectionsPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>sections: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the tabs/sections. Each of them has
          the following properties:
          <ul>
            <li>
              <b>tabLabel</b>: Tab label.
            </li>
            <li>
              <b>section</b>: React component for the section that will be
              linked to the tab. Each section will be rendered right bellow the
              previous one, and clicking in the tab will scroll the user to its associted
              section.
            </li>
          </ul>
        </td>
      </tr>

      <tr>
        <td>tabsMode: 'filled' | 'underlined'</td>
        <td>
          <code>'filled'</code>
        </td>
        <td>Uses one of the available tab modes.</td>
      </tr>
      <tr>
        <td>tabsTheme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available tab themes.</td>
      </tr>
      <tr>
        <td>disableTabsRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled on the tabs.</td>
      </tr>
      <tr>
        <td>stickAtPx: number</td>
        <td>
          <code>0</code>
        </td>
        <td>The number of pixels from the top of the parent container, where the tabs will stick when scrolling.</td>
      </tr>
    </PropsTable>
  );
};

export default tabbedSectionsPropsTable;
