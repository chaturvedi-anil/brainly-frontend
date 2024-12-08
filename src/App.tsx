import { useState } from 'react';
import Button from './components/ui/Button';
import Cart from './components/ui/Cart';
import Sidebar from './components/ui/Sidebar';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';
import TrashIcon from './icons/TrashIcon';
import CreateContentModal from './components/ui/CreateContentModal';
import YoutubeIcon from './icons/YoutubeIcon';
import TwitterIcon from './icons/TwitterIcon';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    console.log("isModalOpen  : ", isModalOpen);
    setIsModalOpen(prevState => !prevState);
  }
  const handleShareLink = () => {};
  return <div className='w-screeen h-screeen flex'>
    <Sidebar />
    {isModalOpen 
      ?
        <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
      :
        <div className='w-screen mx-8 mt-8 bg-black-400 flex flex-col'>

          <header className='flex items-center justify-between mb-12'>
            <span className='text-3xl text-purple-600 font-bold'>All Notes</span>

            <div className='flex items-center gap-3 justify-end'>
              <Button 
                variant='secondary' 
                text='Share Brain' 
                size='md' 
                startIcon={<ShareIcon size='lg' /> } 
                onClickHandler={handleShareLink}
              /> 
              <Button 
                variant='primary' 
                text='Add Content' 
                size='md' 
                startIcon={<PlusIcon size='lg' />} 
                onClickHandler={handleOpenModal} 
              />
            </div>
          </header>
          

          <div className='flex gap-12'>
            <Cart 
              title='First youbtube video' 
              linkIcon={<YoutubeIcon size='xl' color='text-youtubeRed'/>} 
              type='youtube'
              link={'https://www.youtube.com/embed/mGpBaVPsX8U?si=lGIwvGtHoG0L5Jps'}
              tags={["productivity", "c++", "java"]}
              shareIcon={<ShareIcon size='xl' />}
              trashIcon={<TrashIcon size='xl' />}
            />

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
              link={'https://twitter.com/Chaturvedi_99/status/1836803107306836267?ref_src=twsrc%5Etfw'}
              tags={["productivity", "c++", "java"]}
              shareIcon={<ShareIcon size='xl' />}
              trashIcon={<TrashIcon size='xl' />}
            />
          </div>
        </div> 
    }
  </div>
}

export default App;

