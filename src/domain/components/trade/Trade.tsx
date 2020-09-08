import React from "react"
import "./Trade.scss"
import { BEM } from "../../utils/BEM"
import { ChooseTradingAsset } from "./ChooseTradingAsset"
import starcurveLogo from "../../../assets/images/starcurve_256.png"
import placeholder from "../../../assets/images/placeholder.png"
import ethIcon from "../../../assets/images/eth_logo.png"
import AmountPerAsset from "./AmountPerAsset"
import { Button } from "../core/Button"

interface Props {
  toAsset: string
}
export const Trade: React.FunctionComponent<Props> = ({ toAsset }) => {
  const bem = new BEM("Trade")

  return (
    <div className={bem.getClassName()}>
      <h3>Trade</h3>
      <div className={bem.getElement("trading-container")}>
        <div className={bem.getElement("from")}>
          <ChooseTradingAsset asset={"eth"} logo={ethIcon} />
        </div>

        <div className={bem.getElement("to")}>
          <ChooseTradingAsset asset={toAsset ? toAsset : "XSTAR"} />
          <AmountPerAsset />
        </div>
      </div>
      <Button
        title={toAsset ? "Buy " + toAsset : "Buy XSTAR"}
        onClick={() => console.log("buying asset")}
        disabled={true}
      />
    </div>
  )
}
