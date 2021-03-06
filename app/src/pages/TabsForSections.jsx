import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

function TabsForSections() {
  return (
    <DxcTabsForSections
      tabsMode="underlined"
      sections={[
        {
          tabLabel: "Tab1",
          section: () => <div style={{ height: "500px" }}>content 1</div>,
        },
        {
          tabLabel: "Tab2",
          section: () => <div style={{ height: "500px" }}>content 2</div>,
        },
        {
          tabLabel: "Tab3",
          section: () => <div style={{ height: "500px" }}>content 3</div>,
        },
      ]}
    ></DxcTabsForSections>
  );
}

export default TabsForSections;
