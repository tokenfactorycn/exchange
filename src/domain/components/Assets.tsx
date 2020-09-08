import React from "react"
import "./Assets.scss"
import iconLogo from "../../assets/images/starcurve_256.png"
import { BEM } from "../utils/BEM"

interface Props {
  assets: any
  selectedToAsset: string
  onClick: (symbol: string) => void
}

export const Assets: React.FunctionComponent<Props> = ({
  assets,
  onClick,
  selectedToAsset,
}) => {
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
      <div className={bem.getElement("asset-list")}>
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
    </div>
  )

  function renderAsset(
    logo: string,
    symbol: string,
    name: string,
    amount: number,
    value: number
  ) {
    const assetLogo = "/crypto_icons/" + symbol + "@2x.png"
    const selected = symbol === selectedToAsset

    return (
      <div
        className={bem.getElement("asset", () => ({
          selected: selected,
        }))}
        onClick={() => onClick(symbol)}
        key={symbol}
      >
        <img
          src={assetLogo}
          onError={addDefaultSrc}
          alt={"Coin logo"}
          className={bem.getElement("icon-logo")}
        />

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

  function addDefaultSrc(ev: any) {
    ev.target.src = "/crypto_icons/generic@2x.png"
  }
}
