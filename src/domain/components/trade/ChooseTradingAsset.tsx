import React from "react"
import "./ChooseTradingAsset.scss"
import { BEM } from "../../utils/BEM"
import starcurveLogo from "../../../assets/images/starcurve_256.png"

interface Props {
  asset: string
  logo?: string
}

export const ChooseTradingAsset: React.FunctionComponent<Props> = ({
  asset,
  logo,
}) => {
  const bem = new BEM("ChooseTradingAsset")
  const assetBalance = 38912
  const assetLogo = "/crypto_icons/" + asset + "@2x.png"

  return (
    <div className={bem.getClassName()}>
      <div className={bem.getElement("asset")}>
        <div className={bem.getElement("asset-icon")}>
          <img
            src={asset === "XSTAR" ? starcurveLogo : assetLogo}
            onError={addDefaultSrc}
            alt={"asset from icon"}
          />
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
  )

  function addDefaultSrc(ev: any) {
    ev.target.src = "/crypto_icons/generic@2x.png"
  }
}
