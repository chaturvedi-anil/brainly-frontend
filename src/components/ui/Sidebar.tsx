import SunIcon from "../../icons/SunIcon"

const Sidebar = () => {
  return (
    <div className="h-screen bg-white w-3/12 border-r shadow-inner position-fixed left-0 top-0">
       <div className="flex items-center border-b-2 py-4 px-4">
            <SunIcon size="xl"/>
            <span className="text-purple-600 font-bold text-3xl ml-4">Brainly</span>
       </div>   
       <div className="flex">

       </div>
    </div>
  )
}

export default Sidebar