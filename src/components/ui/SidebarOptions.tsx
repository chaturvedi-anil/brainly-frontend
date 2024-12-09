import { ReactElement } from "react"

interface SidebarProps {
    icon: ReactElement,
    optionTitle: string,  
}
const SidebarOptions = (props: SidebarProps) => {
  return (
    <div className="flex min-w-80 items-center text-gray-500 px-4 py-2 mb-2 rounded-md text-gray-800 cursor-pointer hover:bg-purple-200 hover:text-purple-600">
        <span className="mr-4 text-xl">
            {props.icon}
        </span>
        <span className="text-xl">
            {props.optionTitle}
        </span>
    </div>
  )
}

export default SidebarOptions;