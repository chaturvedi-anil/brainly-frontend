import ShareIcon from '../icons/ShareIcon';
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import TrashIcon from "../icons/TrashIcon";
import Cart from "../components/ui/Cart";
import Header from '../components/ui/Header';


interface DashboardProps {
    setIsModalOpen: (value: boolean | ((prevState: boolean) => boolean)) => void
}

const Dashboard = ({setIsModalOpen}: DashboardProps) => {

    const handleOpenModal = () => {
        setIsModalOpen((prevState) => !prevState);
      }
    
    const handleShareLink = ():void => {};
    return (
        <main className='w-full mx-8 mt-8 bg-black-400 flex flex-col'>
            <Header handleShareLink={handleShareLink} handleOpenModal={handleOpenModal} />
            <div className='flex flex-wrap gap-12 overflow-y-scroll h-[720px]'>
                <Cart 
                    title='First twitter post' 
                    linkIcon={<TwitterIcon size='xl' color='text-twitterBlue'/>} 
                    type='twitter'
                    link={'https://twitter.com/Chaturvedi_99/status/1836803107306836267?ref_src=twsrc%5Etfw'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />

                <Cart 
                    title='First twitter post' 
                    linkIcon={<TwitterIcon size='xl' color='text-twitterBlue' />} 
                    type='twitter'
                    link={'https://twitter.com/Chaturvedi_99/status/1864732576302403930?ref_src=twsrc%5Etfw'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />
                <Cart 
                    title='First twitter post' 
                    linkIcon={<TwitterIcon size='xl' color='text-twitterBlue' />} 
                    type='twitter'
                    link={'https://twitter.com/Chaturvedi_99/status/1863958997663093241?ref_src=twsrc%5Etfw'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />
                <Cart 
                    title='First twitter post' 
                    linkIcon={<TwitterIcon size='xl' color='text-twitterBlue' />} 
                    type='twitter'
                    link={'https://twitter.com/Chaturvedi_99/status/1836803107306836267?ref_src=twsrc%5Etfw'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />
                <Cart 
                    title='First twitter post' 
                    linkIcon={<TwitterIcon size='xl' color='text-twitterBlue' />} 
                    type='twitter'
                    link={'https://twitter.com/Chaturvedi_99/status/1863606977374588956?ref_src=twsrc%5Etfw'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />
                <Cart 
                    title='First youbtube video' 
                    linkIcon={<YoutubeIcon size='xl' color='text-youtubeRed'/>} 
                    type='youtube'
                    link={'https://www.youtube.com/embed/mGpBaVPsX8U?si=lGIwvGtHoG0L5Jps'}
                    tags={["productivity", "c++", "java"]}
                    shareIcon={<ShareIcon size='xl' />}
                    trashIcon={<TrashIcon size='xl' />}
                />
            </div>
        </main>
    )
}

export default Dashboard;