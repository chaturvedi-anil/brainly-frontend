import { useEffect, useState } from 'react';

import TwitterIcon from '../icons/TwitterIcon';
import Header from '../components/ui/Header';
import Cart from '../components/ui/Cart';
import useHttp from '../services/useHttp';
import ShareIcon from '../icons/ShareIcon';
import TrashIcon from '../icons/TrashIcon';
import EditIcon from '../icons/EditIcon';


interface DashboardProps {
    setIsModalOpen: (value: boolean | ((prevState: boolean) => boolean)) => void
}

interface Content {
    _id: string, 
    title: string,
    link: string, 
    type: string,
    tags: string[],
}

const Dashboard = ({setIsModalOpen}: DashboardProps) => {
    const [contentData, setContentData] = useState<Content[]>([]);
    const { isLoading: getContentLoading, isError: getContentError, sendHttpRequest: getContent } = useHttp();
    const { isLoading: deleteContentLoading, isError: deleteContentError, sendHttpRequest: deleteContent } = useHttp();

    const handleOpenModal = () => {
        setIsModalOpen((prevState) => !prevState);
      }
    
    const handleShareLink = ():void => {};

    const handleContentDelete = (contentId: string):void => {
        deleteContent({method: "delete", url: `/content/${contentId}`})
        .then((res) => {
            console.log("delete response : ", res);
            
        })
        .catch((error) => {
            console.log("delete error : ", deleteContentError);
        })
        fetchContent();
    };  

    const fetchContent = () => {
        getContent({method: "get", url: "/content"}).then((res)=> {
            setContentData(res.data); 
            console.log("res.data : ", res.data);
            
        })
        .catch((error) => {
            console.log("content fetched error ", getContentError);
        })
    }
    
    useEffect(() => {
        fetchContent();
    }, []);

    useEffect(() => {
        if(!deleteContentLoading){
            fetchContent();
        }
    }, [deleteContentLoading]);
    
    return (
        <main className='w-full mx-8 mt-8 bg-black-400 flex flex-col'>
            <Header handleShareLink={handleShareLink} handleOpenModal={handleOpenModal} />
            <div className='flex flex-wrap gap-12 overflow-y-scroll h-[720px]'>
                { getContentLoading && 
                    <div className='w-full flex items-center justify-center text-3xl font-bold'> Loading... </div>}

                {contentData && contentData.map((content, index) => (
                    <Cart 
                        key= {index}
                        title = {content.title}
                        tags = {content.tags}
                        link = {content.link}
                        type = {content.type}
                        linkIcon = {<TwitterIcon size='lg' color='text-twitterBlue'/>} 
                        shareIcon = {<ShareIcon size='lg' />}
                        trashIcon = {<TrashIcon size='lg' color='text-red-500' onClick={() => handleContentDelete(content._id)}/>}
                    />
                )) }
            </div>
        </main>
    )
}

export default Dashboard;