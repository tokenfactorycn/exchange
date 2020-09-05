import React from "react";
import "./ChooseTradingAsset.scss";
import { BEM } from "../../utils/BEM";

interface Props {
  logo: string;
  asset: string;
}

export const ChooseTradingAsset: React.FunctionComponent<Props> = ({
  asset,
  logo,
}) => {
  const bem = new BEM("ChooseTradingAsset");
  const assetBalance = 38912;

  return (
    <div className={bem.getClassName()}>
      <div className={bem.getElement("asset")}>
        <div className={bem.getElement("asset-icon")}>
          <img src={logo} alt={"asset from icon"} />
        </div>
        <select className={bem.getElement("asset-select")}>
          <option>{asset}</option>
        </select>
      </div>
      <div className={bem.getElement("asset-info")}>
        <div className={bem.getElement("asset-info-top")}>
          <div className={bem.getElement("amount")}>Amount</div>
          <div className={bem.getElement("asset-balance")}>
            Balance: {assetBalance}
          </div>
        </div>
        <div className={bem.getElement("asset-amount")}>121231</div>
      </div>
    </div>
  );
};
