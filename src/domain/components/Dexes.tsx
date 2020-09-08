import React from "react"
import "./Dexes.scss"
import { BEM } from "../utils/BEM"
import iconLogo from "../../assets/images/starcurve_256.png"
import placeholder from "../../assets/images/placeholder.png"

const DATA = [
  {
    logo: iconLogo,
    dex: "STARCURVE",
    liquidity: 123.123,
    gasFee: 0.88,
  },
]

interface Props {
  DEXes?: any
}

export const Dexes: React.FunctionComponent<Props> = ({ DEXes }) => {
  const bem = new BEM("Dexes")
  console.log(Object.values(DEXes).length)

  return (
    <div className={bem.getClassName()}>
      <h3>DEXes</h3>
      {Object.values(DEXes).length > 0
        ? Object.values(DEXes.exchanges).map((asset: any) => {
            return renderAsset(
              asset.logo,
              asset.name,
              asset.liquidity,
              asset.gasFee
            )
          })
        : DATA.map((asset: any) => {
            return renderAsset(
              asset.logo,
              asset.dex,
              asset.liquidity,
              asset.gasFee
            )
          })}
    </div>
  )

  function renderAsset(
    logo: string,
    dex: string,
    liquidity: number,
    gasFee: number
  ) {
    const dexLogo = "/dex_icons/" + dex + ".png"

    return (
      <div className={bem.getElement("dex")} key={dex}>
        <div className={bem.getElement("dex-icon-text")}>
          <div className={bem.getElement("icon-container")}>
            <img
              src={dexLogo}
              onError={addDefaultSrc}
              alt={"asset icon"}
              className={bem.getElement("icon-logo")}
            />
          </div>
          <div className={bem.getElement("dex-info")}>
            <p className={bem.getElement("dex-name")}>{dex}</p>
            <p className={bem.getElement("liquidity")}>Liquidity</p>
          </div>
        </div>
        <div className={bem.getElement("gas-info")}>
          <p className={bem.getElement("gas")}>Tx Gas</p>
          <p>${gasFee}</p>
        </div>
        <div className={bem.getElement("fee-difference")}>
          <p className={bem.getElement("percentage")}>-</p>
        </div>
      </div>
    )
  }

  function addDefaultSrc(ev: any) {
    ev.target.src = "/dex_icons/placeholder.png"
  }
}
