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

const defaultStyle = "rounded-md m-2 flex";

const sizeStyle ={
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6",
    "xl": "py-4 px-8"
}

const Button = (props: ButtonProps) => {

  return (
    <button className={`${defaultStyle} ${variantStyles[props.variant]} ${sizeStyle[props.size]}`} >
        {props.startIcon} {props.text} {props.endIcon}
    </button>
  )
}

export default Button