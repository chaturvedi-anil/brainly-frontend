interface InputProps {
    type: string,
    placeholder?: string,
    onChangeHandler: () => void,
    size: "sm" | "md" | "lg"
}

const sizeStyle = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
}

const Input = (props: InputProps) => {
  return ( 
    <input 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={props.onChangeHandler}  
        className={`rounded-md border px-4 py-2 mt-4 w-full text-gray-500 ${sizeStyle[props.size]}`}
    />
  )
}

export default Input