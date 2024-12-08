import {ReactElement} from 'react'

interface CartProps {
    title: string,
    linkIcon: ReactElement,
    type: "twitter" | "youtube",
    link: string,
    tags: string[],
    shareIcon: ReactElement,
    trashIcon: ReactElement
}

const defaultStyle = "rounded-xl p-6 border shadow-inner w-96 bg-white"

const Cart = (props: CartProps) => {
  return (
    <div className={`${defaultStyle}`}>
        <div className='flex align-center justify-between'>

            <div className='flex items-center'>
                <span className='mr-3'>{props.linkIcon}</span>
                <span className='text-lg font-normal capitalize'>{props.title}</span>
            </div>

            <div className='flex items-center'>
                <span className='mr-2'>{props.shareIcon}</span>
                <span>{props.trashIcon}</span>
            </div>
        </div>  

        <div className='my-4 text-gray-500'>
            {props.type === "twitter" && 
                <blockquote className="twitter-tweet">
                    <a href={props.link} />
                </blockquote> 
            }
            {props.type === "youtube" && 
                <iframe className='w-full rounded-md' src={props.link.replace("watch", "emded")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            }

        </div>

        <div className='flex items-center my-2'>
            {props.tags.map((tag, index) => (
                <span className='bg-purple-200 text-purple-600 rounded-3xl px-4 py-1 mr-2' key={index}>
                    {`#${tag}`}
                </span>
            ))}
        </div>

        <div className='flex items-center mt-2'>
            <span className='text-gray-600'>
                Added on 09/11/2024
            </span>
        </div>

    </div>
  )
}

export default Cart;