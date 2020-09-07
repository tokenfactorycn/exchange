/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./Exchange.scss"
import { BEM } from "../utils/BEM"
import Logo from "../components/Logo"
import { ConnectToWallet } from "../components/ConnectToWallet"
import blob_orange from "../../assets/images/background_blob_orange.png"
import blob_yellow from "../../assets/images/background_blob_yellow.png"
import axios from "axios"

import TradingHistory from "../components/TradingHistory"

import { Assets } from "../components/Assets"
import { Trade } from "../components/trade/Trade"
import { Chart } from "../components/Chart"
import { Dexes } from "../components/Dexes"

export interface Props {}

export interface State {
  assets: any
  selectedToAsset: string
  selectedFromAsset: string
  buyAmount: number
  quoteData: any
}

export default class Exchange extends React.Component<Props, State> {
  private bem = new BEM("Exchange")

  public state: State = {
    assets: [],
    selectedToAsset: "",
    selectedFromAsset: "ETH",
    buyAmount: 10,
    quoteData: [],
  }

  componentDidMount() {
    axios.get("https://api.1inch.exchange/v1.1/tokens").then(
      (response) => {
        // console.log(response.data)
        this.setState({ assets: response.data })
      },
      (error) => {
        console.log(error)
      }
    )
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className={this.bem.getClassName()}>
        <img
          src={blob_yellow}
          alt="bg image"
          className={this.bem.getElement("blob-yellow")}
        />
        <img
          src={blob_orange}
          alt="bg image"
          className={this.bem.getElement("blob-orange")}
        />
        <div className={this.bem.getElement("container")}>
          {/* <div className={this.bem.getElement("top-container")}>
            <Logo />
          </div> */}
          <div className={this.bem.getElement("content-container")}>
            <div className={this.bem.getElement("left")}>
              <Logo />
              <ConnectToWallet disabled={true} />
              <Assets
                assets={this.state.assets}
                onClick={this.getCurrentAsset}
              />
            </div>
            <div className={this.bem.getElement("middle")}>
              <Chart currentAsset={this.state.selectedToAsset} />
              <TradingHistory />
              <Trade toAsset={this.state.selectedToAsset} />
            </div>
            <div className={this.bem.getElement("right")}>
              <Dexes DEXes={this.state.quoteData} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  private getCurrentAsset = (asset: string) => {
    this.setState(
      {
        selectedToAsset: asset,
      },
      () => {
        const url =
          "https://api.1inch.exchange/v1.1/quote?fromTokenSymbol=" +
          this.state.selectedFromAsset +
          "&toTokenSymbol=" +
          this.state.selectedToAsset +
          "&amount=" +
          this.state.buyAmount

        axios.get(url).then(
          (response) => {
            console.log(response.data)
            this.setState({ quoteData: response.data })
          },
          (error) => {
            console.log(error)
          }
        )
      }
    )
  }
}
