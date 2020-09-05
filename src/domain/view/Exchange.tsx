/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Exchange.scss";
import { BEM } from "../utils/BEM";
import Logo from "../components/Logo";
import ConnectToWallet from "../components/ConnectToWallet";
import blob_orange from "../../assets/images/background_blob_orange.png";
import blob_yellow from "../../assets/images/background_blob_yellow.png";
import Assets from "../components/Assets";
import Dexes from "../components/Dexes";
import Trade from "../components/trade/Trade";
import TradingHistory from "../components/TradingHistory";
import Chart from "../components/Chart";

export default class Exchange extends React.Component {
  private bem = new BEM("Exchange");

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
              <ConnectToWallet />
              <Assets />
            </div>
            <div className={this.bem.getElement("middle")}>
              <Chart />
              <TradingHistory />
              <Trade />
            </div>
            <div className={this.bem.getElement("right")}>
              <Dexes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
