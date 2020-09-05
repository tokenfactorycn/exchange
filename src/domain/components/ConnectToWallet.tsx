import React from "react";
import "./ConnectToWallet.scss";
import { BEM } from "../utils/BEM";

export default function ConnectToWallet() {
  const bem = new BEM("ConnectToWallet");

  return (
    <div className={bem.getClassName()}>
      <p>$1,838,812.85</p>
      <p className={bem.getElement("address")}>0x88…888</p>
    </div>
  );
}
