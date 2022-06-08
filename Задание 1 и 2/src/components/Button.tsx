import React from "react";
import "./Button.scss";
import { FiLoader } from "react-icons/fi";

// types
type iProps = {
  children: [JSX.Element, string];
  loading: boolean;
  disabled: boolean;
  type?: "danger" | "success" | "warning" | "primary";
  min?: boolean;
  large?: boolean;
  block?: boolean;
  outlined?: boolean;
  text?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  loading,
  disabled,
  type = "primary",
  min,
  large,
  block,
  outlined,
  text,
  onClick,
}: iProps) {
  const className = `
    button
    button__type_${type}
    ${min ? "button__min" : ""}
    ${large ? "button__large" : ""}
    ${block ? "button__block" : ""}
    ${text ? "button__text" : ""}
    ${outlined ? "button__outlined" : ""}
    ${disabled ? "button__disabled" : ""}
  `;

  function disabledClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    console.log("button is disabled");
  }

  const iconLoading = <FiLoader />;
  const icon = children[0];
  const content = children[1];
  return (
    <button className={className} onClick={disabled ? disabledClick : onClick}>
      <span className="button__icon">{loading ? iconLoading : icon}</span>
      {content}
    </button>
  );
}
