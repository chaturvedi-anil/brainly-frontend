import { useRef } from "react"
import XcircleIcon from "../../icons/XcircleIcon"
import Button from "./Button"
import Input from "./Input"

import useHttp from "../../services/useHttp"

interface ModalProps {
  open: boolean,
  onClose: () => void
}

const CreateContentModal = (props: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);

  const { isLoading, isError, sendHttpRequest } = useHttp();

  const handleSubmit = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = typeRef.current?.value;

    if (!title || !link || !type) {
      console.log("all fields are mandatry!");
      return;
    } else {
      const responseData = await sendHttpRequest({method:"post", url: "/content", body: {title, link, type}});
      
      if(isError){
        console.log("Error in content cration : ", isError);
        return;
      } else {
        console.log("responseData : ", responseData);
        props.onClose();
      }
    }

    if (titleRef.current) titleRef.current.value = "";
    if (linkRef.current) linkRef.current.value = "";
  }
  return <>
    {props.open && 
        <div className='w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-slate-600 opacity-95'>
          <div className="bg-white w-96 min-w-auto p-4 rounded-lg transition-all">
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
                ref={titleRef}
              />
              <Input 
                type="url" 
                size="lg" 
                placeholder="Enter Link" 
                ref={linkRef}
              />
              <Input 
                type="text" 
                size="lg" 
                placeholder="Link Type eg: image, audio, video, article" 
                ref={typeRef}
              />

              <div className="mt-4 flex justify-center">
                <Button 
                  variant="primary"
                  onClickHandler={handleSubmit}
                  text="Submit"
                  size="lg"
                  loading={isLoading}
                  disabled={isLoading}
                />
              </div>
            </div>

          </div>
        </div>
    }
  </>
}

export default CreateContentModal