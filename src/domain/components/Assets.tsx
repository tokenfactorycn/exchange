import React from "react"
import "./Assets.scss"
import iconLogo from "../../assets/images/starcurve_256.png"
import { BEM } from "../utils/BEM"

interface Props {
  assets: any
  onClick: (symbol: string) => void
}

export const Assets: React.FunctionComponent<Props> = ({ assets, onClick }) => {
  const bem = new BEM("Assets")

  const DATA = [
    {
      logo: iconLogo,
      shortName: "ETH",
      name: "Ethereum",
      assetAmount: 888,
      assetValue: 12312,
    },
    {
      logo: iconLogo,
      shortName: "ETH",
      name: "Ethereum",
      assetAmount: 888,
      assetValue: 12312,
    },
  ]

  return (
    <div className={bem.getClassName()}>
      <h3>Assets</h3>
      {Object.values(assets).map((asset: any) => {
        return renderAsset(
          asset.logo,
          asset.symbol,
          asset.name,
          asset.assetAmount,
          asset.assetValue
        )
      })}
    </div>
  )

  function renderAsset(
    logo: string,
    symbol: string,
    name: string,
    amount: number,
    value: number
  ) {
    return (
      <div
        className={bem.getElement("asset")}
        onClick={() => onClick(symbol)}
        key={symbol}
      >
        {logo && (
          <img
            src={logo}
            alt={"Coin logo"}
            className={bem.getElement("icon-logo")}
          />
        )}
        <div className={bem.getElement("asset-name")}>
          <p className={bem.getElement("name-short")}>{symbol}</p>
          <p className={bem.getElement("name")}>{name}</p>
        </div>
        <div className={bem.getElement("asset-value")}>
          <p>{amount}</p>
          <p>${value ? value : 0}</p>
        </div>
      </div>
    )
  }
}
