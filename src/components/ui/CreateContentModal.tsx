import XcircleIcon from "../../icons/XcircleIcon"
import Button from "./Button"
import Input from "./Input"

interface ModalProps {
  open: boolean,
  onClose: () => void
}

const CreateContentModal = (props: ModalProps) => {
  return <>
    {props.open && 
        <div className='w-screen h-screen top-0 left-0 flex justify-center items-center'>
          <div className="bg-white w-96 min-w-auto p-4 rounded-lg z-20">
            <div className="flex items-center justify-between">

              <h3 className="text-gray-500 font-bold text-xl capitalize">Create Content</h3>
              {/* TODO add onClick function on Icons Interface */}
              <span className="cursor-pointer hover:scale-110 " onClick={props.onClose}>
                <XcircleIcon size="lg" />
              </span>

            </div>
            <div className="mt-4">
              <Input 
                type="text" 
                size="lg" 
                placeholder="Enter Title" 
                onChangeHandler={() => console.log()} 
              />
              <Input 
                type="url" 
                size="lg" 
                placeholder="Enter Link" 
                onChangeHandler={() => console.log()} 
              />

              <div className="mt-4 flex justify-center">
                <Button 
                  variant="primary"
                  onClickHandler={() => {
                    console.log("submit button");
                  }}
                  text="Submit"
                  size="lg"
                />
              </div>
            </div>

          </div>
        </div>
    }
  </>
}

export default CreateContentModal