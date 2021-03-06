/* eslint-disable no-undef */
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import {} from "../../common/variables.js";
import uploadFile from "./upload_file.svg";
import dropFile from "./upload_drop.svg";
import Button from "../../button/Button";
import useTheme from "../../useTheme.js";

const DxcDragAndDropArea = ({ dashed = false, addFile, tabIndexValue }) => {
  const [dragging, setDragging] = React.useState(false);
  const colorsTheme = useTheme();

  const text = "There are no files to upload";
  const description = "Drag and drop your files here or choose one from your computer";
  const textHover = "Drag your file here";

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const filesObject = e.dataTransfer.files;
    if (filesObject && filesObject.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
      e.dataTransfer.clearData();
    }
  };

  const selectFile = (e) => {
    const filesObject = e.target.files;
    if (filesObject && filesObject.length > 0) {
      const filesArray = Object.keys(filesObject).map((key) => filesObject[key]);
      addFile(filesArray);
    }
  };

  const handleClick = () => {
    document.getElementById("chooseFiles").click();
  };

  return (
    <ThemeProvider theme={colorsTheme.upload}>
      <DXCDragAndDrop
        onDrop={handleDrop}
        onDragEnter={handleDragIn}
        onDragOver={handleDrag}
        onDragLeave={handleDragOut}
        dashed={dashed}
      >
        {!dragging && !dashed && (
          <DXCDragAndDropArea>
            <DragAndDropContent>
              <DragAndDropIcon />
              <DragAndDropText>
                <DragAndDropTitle>{text}</DragAndDropTitle>
                <DragAndDropDescription>{description}</DragAndDropDescription>
              </DragAndDropText>
              <div>
                <Button label="CHOOSE FILES" onClick={handleClick} tabIndex={tabIndexValue} />
                <input id="chooseFiles" type="file" multiple onChange={selectFile} style={{ display: "none" }} />
              </div>
            </DragAndDropContent>
          </DXCDragAndDropArea>
        )}
        {!dragging && dashed && (
          <DragAndDropContentHover>
            <DragAndDropContent>
              <DragAndDropIcon />
              <DragAndDropText>
                <DragAndDropTitle>{text}</DragAndDropTitle>
                <DragAndDropDescription>{description}</DragAndDropDescription>
              </DragAndDropText>
              <ButtonChooseFiles>
                <Button theme="light" label="CHOOSE FILES" onClick={handleClick} tabIndex={tabIndexValue} />
                <input id="chooseFiles" type="file" multiple onChange={selectFile} style={{ display: "none" }} />
              </ButtonChooseFiles>
            </DragAndDropContent>
          </DragAndDropContentHover>
        )}
        {dragging && (
          <DragAndDropContentHover>
            <DragAndDropTextHover>{textHover}</DragAndDropTextHover>
            <DragAndDropIconHover />
          </DragAndDropContentHover>
        )}
      </DXCDragAndDrop>
    </ThemeProvider>
  );
};

DxcDragAndDropArea.propTypes = {
  dashed: PropTypes.bool,
  addFile: PropTypes.func,
};

const DXCDragAndDrop = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
`;

const DXCDragAndDropArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 3px 6px ${(props) => props.theme.shadowColor};
`;

const DragAndDropContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DragAndDropIcon = styled.div`
  background-color: ${(props) => props.theme.dragAndDropIconColor};
  mask: url(${uploadFile}) no-repeat center;
  mask-size: ${(props) => `${props.theme.dragAndDropIconSize} ${props.theme.dragAndDropIconSize}`};
  height: ${(props) => props.theme.dragAndDropIconSize};
  width: ${(props) => props.theme.dragAndDropIconSize};
  margin-bottom: 20px;
`;

const DragAndDropText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DragAndDropTitle = styled.div`
  font-size: ${(props) => props.theme.dragAndDropTitleFontSize};
  font-style: ${(props) => props.theme.dragAndDropTitleFontStyle};
  font-weight: ${(props) => props.theme.dragAndDropTitleFontWeight};
  text-transform: ${(props) => props.theme.dragAndDropTitleFontTextTransform};
  color: ${(props) => props.theme.dragAndDropTitleFontColor};
  margin-bottom: 10px;
`;

const DragAndDropDescription = styled.div`
  font-size: ${(props) => props.theme.dragAndDropDescriptionFontSize};
  font-style: ${(props) => props.theme.dragAndDropDescriptionFontStyle};
  font-weight: ${(props) => props.theme.dragAndDropDescriptionFontWeight};
  text-transform: ${(props) => props.theme.dragAndDropTextDescriptionFontTextTransform};
  color: ${(props) => props.theme.dragAndDropTextDescriptionFontColor};
  margin-bottom: 40px;
`;

const ButtonChooseFiles = styled.div``;

const DragAndDropContentHover = styled.div`
  --border-color: #666666;
  --border-weight: 1px;
  --dash-size: 8px;
  --gap-size: 8px;
  background: linear-gradient(90deg, var(--border-color) 100%, transparent 100%) top left no-repeat,
    linear-gradient(
        90deg,
        transparent calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)),
        transparent calc(var(--gap-size) / 2 + var(--dash-size))
      )
      top center repeat-x,
    linear-gradient(90deg, var(--border-color) 100%, transparent 100%) top right no-repeat,
    linear-gradient(0deg, var(--border-color) 100%, transparent 100%) top left no-repeat,
    linear-gradient(
        0deg,
        transparent calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)),
        transparent calc(var(--gap-size) / 2 + var(--dash-size))
      )
      center left repeat-y,
    linear-gradient(0deg, var(--border-color) 100%, transparent 100%) bottom left no-repeat,
    linear-gradient(90deg, var(--border-color) 100%, transparent 100%) bottom left no-repeat,
    linear-gradient(
        90deg,
        transparent calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)),
        transparent calc(var(--gap-size) / 2 + var(--dash-size))
      )
      bottom center repeat-x,
    linear-gradient(90deg, var(--border-color) 100%, transparent 100%) bottom right no-repeat,
    linear-gradient(0deg, var(--border-color) 100%, transparent 100%) top right no-repeat,
    linear-gradient(
        0deg,
        transparent calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2),
        var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)),
        transparent calc(var(--gap-size) / 2 + var(--dash-size))
      )
      center right repeat-y,
    linear-gradient(0deg, var(--border-color) 100%, transparent 100%) bottom right no-repeat;
  background-size: var(--dash-size) var(--border-weight), calc(var(--dash-size) + var(--gap-size)) var(--border-weight),
    var(--dash-size) var(--border-weight), var(--border-weight) var(--dash-size),
    var(--border-weight) calc(var(--dash-size) + var(--gap-size)), var(--border-weight) var(--dash-size);
  background-color: ${(props) => props.theme.draggingAreaBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DragAndDropIconHover = styled.div`
  background-color: ${(props) => props.theme.dragAndDropDraggingStateIconColor};
  mask: url(${dropFile}) no-repeat center;
  mask-size: ${(props) =>
    `${props.theme.dragAndDropDraggingStateIconSize} ${props.theme.dragAndDropDraggingStateIconSize}`};
  height: ${(props) => props.theme.dragAndDropDraggingStateIconSize};
  width: ${(props) => props.theme.dragAndDropDraggingStateIconSize};
`;

const DragAndDropTextHover = styled.div`
  font-size: ${(props) => props.theme.dragAndDropDraggingStateFontSize};
  font-style: ${(props) => props.theme.dragAndDropDraggingStateFontStyle};
  font-weight: ${(props) => props.theme.dragAndDropDraggingStateFontWeight};
  text-transform: ${(props) => props.theme.dragAndDropTextDraggingStateFontTextTransform};
  color: ${(props) => props.theme.dragAndDropTextDraggingStateFontColor};
  margin-bottom: 10px;
`;

export default DxcDragAndDropArea;
