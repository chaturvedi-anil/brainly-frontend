import DocumentIcon from "../../icons/DocumentIcon"
import HashIcon from "../../icons/HashIcon"
import LinksIcon from "../../icons/LinksIcon"
import SunIcon from "../../icons/SunIcon"
import TwitterIcon from "../../icons/TwitterIcon"
import XcircleIcon from "../../icons/XcircleIcon"
import YoutubeIcon from "../../icons/YoutubeIcon"
import SidebarOptions from "./SidebarOptions"

const Sidebar = () => {
    const sidebarOptionsList = [
        {
            icon: <TwitterIcon size="xl" />,
            optionTitle: "Tweets"
        },
        {
            icon: <YoutubeIcon size="xl" />,
            optionTitle: "Videos"
        },
        {
            icon: <DocumentIcon size="xl" />,
            optionTitle: "Documents"
        }, 
        { 
            icon: <LinksIcon size="xl" />, 
            optionTitle: "Links",
        },
        {
            icon: <HashIcon size="xl" />,
            optionTitle: "Tags"
        }
    ] 
  return (
    <div className="h-screen bg-white w-3/12 border-r shadow-inner position-fixed left-0 top-0">
       <div className="flex items-center border-b-2 py-4 px-4">
            <SunIcon size="xl" color="text-purple-800"/>
            <span className="text-black-400 font-bold text-3xl ml-4">Brainly</span>
       </div>   
       <div className="flex p-4 flex-col">
            {sidebarOptionsList.map((option) => (
                <SidebarOptions icon={option.icon} optionTitle={option.optionTitle} />
            ))}
       </div>
    </div>
  )
}

export default Sidebar