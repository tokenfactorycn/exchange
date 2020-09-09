import React, { useEffect, useState } from "react"
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
import coinsList from "../utils/allCoins.json"
import axios from "axios"

interface Props {
  currentAsset: string
}
export const Chart: React.FunctionComponent<Props> = ({ currentAsset }) => {
  const bem = new BEM("Chart")
  const [timeFrame, setTimeFrame] = useState("5m")
  const [chartData, setChartData] = useState([])

  let coinId: string = ""
  const data = [
    { time: 10, price: 0.55 },
    { time: 11, price: 1.5 },
    { time: 12, price: 1.1 },
    { time: 13, price: 1.9 },
    { time: 14, price: 2.4 },
    { time: 15, price: 1.65 },
    { time: 16, price: 2.5 },
    { time: 17, price: 1.1 },
    { time: 18, price: 2.9 },
    { time: 19, price: 2.6 },
    { time: 20, price: 2.8 },
    { time: 21, price: 3.5 },
    { time: 22, price: 3.9 },
    { time: 23, price: 3.6 },
  ]

  useEffect(() => {
    getSymbolId(currentAsset)
  }, [currentAsset])

  return (
    <div className={bem.getClassName()}>
      <div className={bem.getElement("chart-top")}>
        <div className={bem.getElement("chart-timeframes")}>
          {/* <button className={bem.getElement("timeframe")}>1m</button> */}
          <button disabled={true} className={bem.getElement("timeframe")}>
            5m
          </button>
          {/* <button className={bem.getElement("timeframe")}>10m</button> */}
          <button disabled={true} className={bem.getElement("timeframe")}>
            30m
          </button>
          <button className={bem.getElement("timeframe--active")}>1h</button>
          <button disabled={true} className={bem.getElement("timeframe")}>
            2h
          </button>
          <button disabled={true} className={bem.getElement("timeframe")}>
            4h
          </button>
          <button disabled={true} className={bem.getElement("timeframe")}>
            12h
          </button>
          <button disabled={true} className={bem.getElement("timeframe")}>
            1d
          </button>
          {/* <div className={bem.getElement("timeframe")}>1w</div> */}
        </div>
        <h3>{currentAsset ? currentAsset : "XSTAR"}</h3>
      </div>
      <ResponsiveContainer width={"99%"} height={"55%"} maxHeight={"40vh"}>
        <LineChart data={chartData.length > 3 ? chartData : data}>
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

  function getSymbolId(symbol: string) {
    coinsList.forEach((coin) => {
      if (symbol.toLowerCase() === coin.symbol) {
        coinId = coin.id
        let time = 1

        if (
          timeFrame === "1m" ||
          timeFrame === "5m" ||
          timeFrame === "30m" ||
          timeFrame === "1h" ||
          timeFrame === "2h"
        ) {
          time = 1
        } else if (timeFrame === "4h") {
          time = 2
        } else if (timeFrame === "12h") {
          time = 5
        } else if (timeFrame === "1d") {
          time = 12
        }

        const url =
          "https://api.coingecko.com/api/v3/coins/" +
          coinId +
          "/market_chart?vs_currency=usd&days=" +
          time

        axios.get(url).then(
          (response) => {
            let firstHour: number

            const coinChartData: any = response.data.prices
              .map((price: number[], index: number) => {
                if (firstHour !== Number(getReadableDate(price[0], "hours"))) {
                  firstHour = Number(getReadableDate(price[0], "hours"))
                  return {
                    time: getReadableDate(price[0], "hours"),
                    price: price[1],
                  }
                }
              })
              .filter(function (element: any) {
                return element !== undefined
              })

            setChartData(
              coinChartData.slice(Math.max(coinChartData.length - 12, 0))
            )
          },
          (error) => {
            console.log(error)
          }
        )
      }
    })
  }

  function timeConverter(UNIX_timestamp: number) {
    var a = new Date(UNIX_timestamp)
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec
    return time
  }

  function getReadableDate(unixTime: number, formattedType?: string) {
    let date = new Date(unixTime)
    let hours = date.getHours()
    let minutes = "0" + date.getMinutes()
    let seconds = "0" + date.getSeconds()
    let formattedTime = hours + ":" + minutes.substr(-2)
    if (formattedType === "minutes") {
      return minutes.substr(-2)
    }
    if (formattedType === "hours") {
      return hours
    }

    return formattedTime
  }
}
