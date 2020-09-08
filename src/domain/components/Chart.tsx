import React from "react"
import "./Chart.scss"
import { BEM } from "../utils/BEM"
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts"

interface Props {
  currentAsset: string
}
export const Chart: React.FunctionComponent<Props> = ({ currentAsset }) => {
  const bem = new BEM("Chart")

  const data = [
    { time: 10, price: 0.0025 },
    { time: 11, price: 0.006 },
    { time: 12, price: 0.01 },
    { time: 13, price: 0.04 },
    { time: 14, price: 0.09 },
    { time: 15, price: 0.14 },
    { time: 16, price: 0.27 },
    { time: 17, price: 0.36 },
    { time: 18, price: 0.45 },
    { time: 19, price: 0.6 },
    { time: 20, price: 0.74 },
    { time: 21, price: 0.88 },
    { time: 22, price: 1.12 },
    { time: 23, price: 1.62 },
  ]

  return (
    <div className={bem.getClassName()}>
      <div className={bem.getElement("chart-top")}>
        <div className={bem.getElement("chart-timeframes")}>
          <div className={bem.getElement("timeframe")}>1m</div>
          <div className={bem.getElement("timeframe")}>5m</div>
          {/* <div className={bem.getElement("timeframe")}>15m</div> */}
          <div className={bem.getElement("timeframe")}>30m</div>
          <div className={bem.getElement("timeframe")}>1h</div>
          <div className={bem.getElement("timeframe")}>2h</div>
          <div className={bem.getElement("timeframe")}>4h</div>
          <div className={bem.getElement("timeframe")}>12h</div>
          <div className={bem.getElement("timeframe")}>1d</div>
          {/* <div className={bem.getElement("timeframe")}>1w</div> */}
        </div>
        <h3>{currentAsset ? currentAsset : "XSTAR"}</h3>
      </div>
      <ResponsiveContainer width={"99%"} height={"55%"} maxHeight={"40vh"}>
        <LineChart data={data}>
          <XAxis dataKey="time" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} orientation={"right"} />
          <Tooltip cursor={false} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FFD55E"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
