import { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg" | "xl";
    extraClass?: string,
    text?: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClickHandler: () => any,
    loading?: boolean,
    disabled?: boolean
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultStyle = "flex items-center rounded-md";

const sizeStyle = {
    "sm": "py-1 px-2 text-sm",
    "md": "py-2 px-4 text-md",
    "lg": "py-3 px-6 text-lg",
    "xl": "py-4 px-8 text-xl"
}

const disabledStyle = "disabled:bg-purple-500 disabled:text-white disabled:border-slate-200 disabled:shadow-none"

const Button = (props: ButtonProps) => {
  
  return (
    <button 
      className={`${defaultStyle} ${variantStyles[props.variant]} ${sizeStyle[props.size]} ${props.extraClass} ${props.disabled && disabledStyle}`} 
      onClick={props.onClickHandler} 
      disabled={props.disabled}
    >
        {props.loading && "loading..."}
        {props.startIcon && <span className="mr-2">{props.startIcon}</span>} 
        {props.text} 
        {props.endIcon && <span className="ml-2"> {props.endIcon}</span>}
    </button>
  )
}

export default Button;