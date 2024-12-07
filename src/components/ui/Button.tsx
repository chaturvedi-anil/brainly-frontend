import { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg" | "xl";
    text: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void 
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-300 text-purple-600 "
}

const defaultStyle = "flex items-center";

const sizeStyle = {
    "sm": "py-1 px-2 rounded-sm text-sm",
    "md": "py-2 px-4 rounded-md text-md",
    "lg": "py-4 px-6 rounded-lg text-lg",
    "xl": "py-4 px-8 rounded-xl text-xl"
}

const Button = (props: ButtonProps) => {

  return (
    <button className={`${defaultStyle} ${variantStyles[props.variant]} ${sizeStyle[props.size]}`} >
        {props.startIcon && <span className="mr-2">{props.startIcon}</span>} 
        {props.text} 
        {props.endIcon && <span className="ml-2"> {props.endIcon}</span>}
    </button>
  )
}

export default Button;