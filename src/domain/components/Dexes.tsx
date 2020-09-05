import React from "react";
import "./Dexes.scss";
import { BEM } from "../utils/BEM";
import iconLogo from "../../assets/images/starcurve_256.png";

export default function Dexes() {
  const bem = new BEM("Dexes");

  const DATA = [
    {
      logo: iconLogo,
      dex: "STARCURVE",
      liquidity: 123.123,
      gasFee: 0.88,
    },
    {
      logo: iconLogo,
      dex: "Market",
      liquidity: 123.321,
      gasFee: 1.02,
    },
    {
      logo: iconLogo,
      dex: "STARCURVE",
      liquidity: 123.123,
      gasFee: 0.88,
    },
    {
      logo: iconLogo,
      dex: "Market",
      liquidity: 123.321,
      gasFee: 1.02,
    },
    {
      logo: iconLogo,
      dex: "STARCURVE",
      liquidity: 123.123,
      gasFee: 0.88,
    },
    {
      logo: iconLogo,
      dex: "Market",
      liquidity: 123.321,
      gasFee: 1.02,
    },
    {
      logo: iconLogo,
      dex: "STARCURVE",
      liquidity: 123.123,
      gasFee: 0.88,
    },
    {
      logo: iconLogo,
      dex: "Market",
      liquidity: 123.321,
      gasFee: 1.02,
    },
  ];

  return (
    <div className={bem.getClassName()}>
      <h3>DEXes</h3>
      {DATA.map((asset) => {
        return renderAsset(
          asset.logo,
          asset.dex,
          asset.liquidity,
          asset.gasFee
        );
      })}
    </div>
  );

  function renderAsset(
    logo: string,
    dex: string,
    liquidity: number,
    gasFee: number
  ) {
    return (
      <div className={bem.getElement("dex")}>
        <div className={bem.getElement("dex-icon-text")}>
          <img
            src={logo}
            alt={"Coin logo"}
            className={bem.getElement("icon-logo")}
          />
          <div className={bem.getElement("dex-info")}>
            <p className={bem.getElement("dex-name")}>{dex}</p>
            <p className={bem.getElement("liquidity")}>{liquidity}</p>
          </div>
        </div>
        <div className={bem.getElement("gas-info")}>
          <p className={bem.getElement("gas")}>Tx Gas</p>
          <p>${gasFee}</p>
        </div>
        <div className={bem.getElement("fee-difference")}>
          <p className={bem.getElement("percentage")}>-0.23%</p>
        </div>
      </div>
    );
  }
}
