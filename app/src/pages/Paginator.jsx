import React from "react";
import { useState } from "react";
import { DxcPaginator, ThemeProvider } from "@dxc-technology/halstack-react";

function App() {
  const [page, changePage] = useState(1);

  const colors = {
    paginator: {
      baseColor: "#fabada",
      fontColor: "red",
    },
  };

  const goToPageFunc = (newPage) => {
    changePage(newPage);
  };

  return (
    <div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={10}
          totalItems={27}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={10}
          itemsPerPageOptions={[10, 15]}
          itemsPerPageFunction={(value) => console.log(value)}
          totalItems={27}
          showGoToPage={true}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div>
      <div className="test-case" id="custom-paginator">
        <h4>Custom paginator</h4>
        <ThemeProvider theme={colors}>
          <DxcPaginator
            currentPage={page}
            itemsPerPage={10}
            itemsPerPageOptions={[10, 15]}
            itemsPerPageFunction={(value) => console.log(value)}
            totalItems={27}
            onPageChange={goToPageFunc}
          ></DxcPaginator>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
