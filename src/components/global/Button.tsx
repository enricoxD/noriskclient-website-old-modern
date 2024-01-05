"use client"
import React, {ComponentProps, SyntheticEvent} from "react";
import Icon from "@mdi/react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "beige" | "default" | "warning" | "surface" | "light";
  icon?: string;
  onClick?: (event: SyntheticEvent) => void;
  href?: string;
}

export const Button = (props: ButtonProps) => {
  const {children, icon, color, disabled, onClick, href, ...attributes} = props;
  const className = `button ${disabled ? "disabled" : ""} ${color && color != "default" ? `is-${color}` : ""}`
  const invokeOnClick = (event: SyntheticEvent) => {
    if (disabled) return
    onClick && onClick(event)
  }

  return (
    <>
      {
        href ?
          <a href={href} style={{textDecoration: "none"}} className={className}>
            <p>
              {icon && <Icon path={icon} className={"icon"} size={0.75}/>}
              {children}
            </p>
          </a>
          :
          <button
            className={className}
            disabled={disabled}
            onClick={invokeOnClick}
            {...attributes}
          >
            <span>
              {icon && <Icon path={icon} className={"icon"} size={0.75}/>}
              {children}
            </span>
          </button>
      }
    </>
  );
};
