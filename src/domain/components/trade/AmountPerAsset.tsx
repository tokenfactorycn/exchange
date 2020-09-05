import React from "react";
import "./AmountPerAsset.scss";
import { BEM } from "../../utils/BEM";

export default function AmountPerAsset() {
  const bem = new BEM("AmountPerAsset");

  return (
    <div className={bem.getClassName()}>
      <p className={bem.getElement("text")}>0.000123 per ETH</p>
    </div>
  );
}
