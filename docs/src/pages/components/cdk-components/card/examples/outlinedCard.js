import { DxcCard } from "@dxc-technology/halstack-react";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <DxcCard 
      outlined={true} 
      image={<img src={iceCreamImagePath}></img>} 
      imageCover={true} margin="small">
      Lorem Ipsum
    </DxcCard>
  );
}`;

const scope = {
  DxcCard,
  iceCreamImagePath,
  useState
};

export default { code, scope };
