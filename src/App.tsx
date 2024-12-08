import { useState } from 'react';
import Button from './components/ui/Button';
import Cart from './components/ui/Cart';
import Sidebar from './components/ui/Sidebar';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';
import TrashIcon from './icons/TrashIcon';
import CreateContentModal from './components/ui/CreateContentModal';

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
        <div className='w-screen m-8 bg-black-400 flex flex-col'>
          <div className='flex items-center gap-2 justify-end mb-5'>
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

          <div className='flex gap-4'>
            <Cart 
              title='First youbtube video' 
              linkIcon={<ShareIcon size='lg' />} 
              type='youtube'
              link={'https://www.youtube.com/embed/mGpBaVPsX8U?si=lGIwvGtHoG0L5Jps'}
              tags={["productivity", "c++", "java"]}
              shareIcon={<ShareIcon size='lg' />}
              trashIcon={<TrashIcon size='lg' />}
            />

            <Cart 
              title='First twitter post' 
              linkIcon={<ShareIcon size='lg' />} 
              type='twitter'
              link={'https://twitter.com/Chaturvedi_99/status/1836803107306836267?ref_src=twsrc%5Etfw'}
              tags={["productivity", "c++", "java"]}
              shareIcon={<ShareIcon size='lg' />}
              trashIcon={<TrashIcon size='lg' />}
            />
          </div>
        </div> 
    }
  </div>
}

export default App;

