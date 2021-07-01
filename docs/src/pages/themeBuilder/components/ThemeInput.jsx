import React from "react";
import styled from "styled-components";
import ImageConfig from "./widgets/ImageConfig";
import ColorPicker from "./widgets/ColorPicker";
import DefaultInput from "./widgets/DefaultInput";
import LengthInput from "./widgets/LengthInput";
import FontWeightInput from "./widgets/FontWeightInput";
import FontStyleInput from "./widgets/FontStyleInput";
import TextTransformInput from "./widgets/TextTransformInput";
import BorderStyleInput from "./widgets/BorderStyleInput";
import FontFamily from "./widgets/FontFamily";
import BorderWidthInput from "./widgets/BorderWidthInput";
import AlphaValueInput from "./widgets/AlphaValueInput";
import IntegerInput from "./widgets/IntegerInput";
import TextAlignInput from "./widgets/TextAlignInput";
import { makeReadable } from "../utils";

const ThemeInput = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
  tokenType,
}) => {
  return (
    <PropertyContainer key={`property-${propertyName}`}>
      <PropertyName>{makeReadable(propertyName)}</PropertyName>
      <PropertyValue>
        {(() => {
          switch (tokenType) {
            case "color":
              return (
                <ColorPicker
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "image":
              return (
                <ImageConfig
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "length":
              return (
                <LengthInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "fFamily":
              return (
                <FontFamily
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "fWeight":
              return (
                <FontWeightInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "fStyle":
              return (
                <FontStyleInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "fTextTransform":
              return (
                <TextTransformInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "bStyle":
              return (
                <BorderStyleInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "bWidth":
              return (
                <BorderWidthInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "alphaValue":
              return (
                <AlphaValueInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "integer":
              return (
                <IntegerInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            case "textAlign":
              return (
                <TextAlignInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
            default:
              return (
                <DefaultInput
                  propertyName={propertyName}
                  propertyValue={propertyValue}
                  onChangeCustomTheme={onChangeCustomTheme}
                />
              );
          }
        })()}
      </PropertyValue>
    </PropertyContainer>
  );
};

const PropertyName = styled.div`
  font: normal 13px Open Sans;
  color: #000000;
  width: 160px;
  line-height: 13px;
  margin-right: 5px;
`;

const PropertyValue = styled.div`
  margin-right: 10px;
`;

const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 7px 0;
`;

export default React.memo(ThemeInput);
