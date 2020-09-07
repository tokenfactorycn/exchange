import React from "react"
import "./ConnectToWallet.scss"
import { BEM } from "../utils/BEM"

interface Props {
  disabled?: boolean
}

export const ConnectToWallet: React.FunctionComponent<Props> = ({
  disabled,
}) => {
  const bem = new BEM("ConnectToWallet", () => ({
    disabled: disabled,
  }))
  const connected = false

  return (
    <div className={bem.getClassName()}>
      {connected ? (
        <>
          <p>$1,838,812.85</p>
          <p className={bem.getElement("address")}>0x88…888</p>
        </>
      ) : (
        <p className={bem.getElement("not-connected")}>Connect your wallet</p>
      )}
    </div>
  )
}
