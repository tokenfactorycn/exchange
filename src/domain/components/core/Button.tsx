import React from "react";
import "./Button.scss";
import { BEM } from "../../utils/BEM";

interface Props {
  title: string;
  onClick: () => void;
}

export const Button: React.FunctionComponent<Props> = ({ title }) => {
  const bem = new BEM("Button");

  return <div className={bem.getClassName()}>{title}</div>;
};
