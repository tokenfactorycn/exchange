import React from "react";
import "./TradingHistory.scss";
import { BEM } from "../utils/BEM";

export default function TradingHistory() {
  const bem = new BEM("TradingHistory");

  const DATA = [
    {
      date: "24/08/2020 20:20:38",
      fromAsset: "ETH",
      fromAmount: 1.245,
      toAsset: "XSTAR",
      toAmount: 255.231,
      gas: 1.52,
    },
    {
      date: "24/08/2020 20:20:38",
      fromAsset: "ETH",
      fromAmount: 1.245,
      toAsset: "XSTAR",
      toAmount: 255.231,
      gas: 1.52,
    },
    {
      date: "24/08/2020 20:20:38",
      fromAsset: "ETH",
      fromAmount: 1.245,
      toAsset: "XSTAR",
      toAmount: 255.231,
      gas: 1.52,
    },
    {
      date: "24/08/2020 20:20:38",
      fromAsset: "ETH",
      fromAmount: 1.245,
      toAsset: "XSTAR",
      toAmount: 255.231,
      gas: 1.52,
    },
    {
      date: "24/08/2020 20:20:38",
      fromAsset: "ETH",
      fromAmount: 1.245,
      toAsset: "XSTAR",
      toAmount: 255.231,
      gas: 1.52,
    },
  ];

  return (
    <div className={bem.getClassName()}>
      <h4 className={bem.getElement("header")}>Transaction history</h4>
      {DATA.map((history) =>
        renderHistory(
          history.date,
          history.fromAsset,
          history.fromAmount,
          history.toAsset,
          history.toAmount,
          history.gas
        )
      )}
    </div>
  );

  function renderHistory(
    date: string,
    fromAsset: string,
    fromAmount: number,
    toAsset: string,
    toAmount: number,
    gas: number
  ) {
    return (
      <div className={bem.getElement("single-history")}>
        <div className={bem.getElement("date-container")}>
          <p className={bem.getElement("container-name")}>Date</p>
          <p className={bem.getElement("container-value")}>{date}</p>
        </div>
        <div className={bem.getElement("from-container")}>
          <p className={bem.getElement("container-name")}>From {fromAsset}</p>
          <p className={bem.getElement("container-value")}>{fromAmount}</p>
        </div>
        <div className={bem.getElement("to-container")}>
          <p className={bem.getElement("container-name")}>To {toAsset}</p>
          <p className={bem.getElement("container-value")}>{toAmount}</p>
        </div>
        <div className={bem.getElement("gas-container")}>
          <p className={bem.getElement("container-name")}>Gas Tx</p>
          <p className={bem.getElement("container-value")}>{gas}</p>
        </div>
      </div>
    );
  }
}
