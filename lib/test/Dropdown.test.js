import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import DxcDropdown from "../src/dropdown/Dropdown";

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});

describe("Dropdown component tests", () => {
  test("Dropdown renders with correct label", () => {
    const { getByText } = render(<DxcDropdown label="dropdown-test"></DxcDropdown>);
    expect(getByText("dropdown-test")).toBeTruthy();
  });

  test("Dropdown renders with correct icon before", () => {
    const { getAllByRole } = render(<DxcDropdown iconSrc="/testIcon" label="dropdown-test"></DxcDropdown>);
    const image = getAllByRole("img")[0];
    expect(image.getAttribute("src")).toEqual("/testIcon");
  });

  test("Dropdown renders with correct icon after", () => {
    const { getAllByRole } = render(
      <DxcDropdown iconSrc="/testIcon" iconPosition="after" label="dropdown-test"></DxcDropdown>
    );
    const image = getAllByRole("img")[0];
    expect(image.getAttribute("src")).toEqual("/testIcon");
  });

  test("onClick shows and hides option", () => {
    const options = [
      {
        value: 1,
        label: "option-test",
      },
    ];
    const { queryByText } = render(<DxcDropdown options={options} label="dropdown-test"></DxcDropdown>);
    const dropdown = queryByText("dropdown-test");
    //Before clicked is not showed
    expect(queryByText("option-test")).toBeFalsy();
    act(() => {
      fireEvent.click(dropdown);
    });
    expect(queryByText("option-test")).toBeTruthy();
  });
  test("Disabled dropdown is not clickable", () => {
    const options = [
      {
        value: 1,
        label: "option-test",
      },
    ];
    const { queryByText } = render(<DxcDropdown options={options} disabled label="dropdown-test"></DxcDropdown>);
    const dropdown = queryByText("dropdown-test");
    expect(queryByText("option-test")).toBeFalsy();
    act(() => {
      fireEvent.click(dropdown);
    });
    expect(queryByText("option-test")).toBeFalsy();
  });

  test("Dropdown renders with correct icon before option", () => {
    const options = [
      {
        value: 1,
        label: "option-test",
        iconSrc: "/testIcon",
      },
    ];
    const { getByText, getByRole } = render(<DxcDropdown options={options} label="dropdown-test"></DxcDropdown>);
    const dropdown = getByText("dropdown-test");
    act(() => {
      fireEvent.click(dropdown);
    });
    expect(getByRole("img").getAttribute("src")).toEqual("/testIcon");
  });

  test("Dropdown renders with correct icon after option", () => {
    const options = [
      {
        value: 1,
        label: "option-test",
        iconSrc: "/testIcon",
      },
    ];
    const { getByText, getByRole } = render(
      <DxcDropdown options={options} optionsIconPosition="after" label="dropdown-test"></DxcDropdown>
    );
    const dropdown = getByText("dropdown-test");
    act(() => {
      fireEvent.click(dropdown);
    });
    expect(getByRole("img").getAttribute("src")).toEqual("/testIcon");
  });

  test("Dropdown renders with caret hidden", () => {
    const { queryByRole } = render(<DxcDropdown caretHidden={true} label="dropdown-test"></DxcDropdown>);
    expect(queryByRole("img")).toBeFalsy();
  });

  test("onSelectOption fuction is called correctly", () => {
    const onSelectOption = jest.fn((i) => i);
    const options = [
      {
        value: 1,
        label: "option-test",
      },
    ];
    const { getByText } = render(
      <DxcDropdown options={options} onSelectOption={onSelectOption} label="dropdown-test"></DxcDropdown>
    );
    const dropdown = getByText("dropdown-test");
    act(() => {
      fireEvent.click(dropdown);
    });
    const option = getByText("option-test");
    act(() => {
      fireEvent.click(option);
    });
    expect(onSelectOption).toHaveBeenCalledWith(1);
  });

  test("expandOnHover shows and hides the option correctly", () => {
    const options = [
      {
        value: 1,
        label: "option-test",
      },
    ];
    const { queryByText } = render(
      <DxcDropdown options={options} expandOnHover={true} label="dropdown-test"></DxcDropdown>
    );
    const dropdown = queryByText("dropdown-test");
    //Verify that is not showed before
    expect(queryByText("option-test")).toBeFalsy();
    act(() => {
      fireEvent.mouseOver(dropdown);
    });
    expect(queryByText("option-test")).toBeTruthy();
  });
});
