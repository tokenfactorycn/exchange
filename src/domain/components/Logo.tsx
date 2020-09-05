import React from "react";
import logo from "../../assets/images/logo.png";
import "./Logo.scss";
import { BEM } from "../utils/BEM";

export default function Logo() {
  const bem = new BEM("Logo");

  return (
    <div className={bem.getClassName()}>
      <img src={logo} alt="Starcurve logo" />
    </div>
  );
}
