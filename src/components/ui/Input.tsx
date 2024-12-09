import { forwardRef } from "react"

interface InputProps {
    type: string,
    placeholder?: string,
    size: "sm" | "md" | "lg",
}

const sizeStyle = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
}

const Input = forwardRef<HTMLInputElement, InputProps>(({type, placeholder, size}, ref) => {
  return ( 
    <input 
        type={type} 
        placeholder={placeholder} 
        ref={ref}  
        className={`rounded-md border px-4 py-2 mt-4 w-full text-gray-500 focus:outline-purple-200 ${sizeStyle[size]}`}
    />
  )
})

export default Input