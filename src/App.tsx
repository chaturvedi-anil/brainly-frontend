import Button from './components/ui/Button';
import Cart from './components/ui/Cart';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';
import TrashIcon from './icons/TrashIcon';

const App = () => {
  return (
    <div className='m-8 bg-black-400 flex flex-col'>
      <div className='flex items-center gap-2 justify-end'>
        <Button variant='secondary' text='Share Brain' size='md' startIcon={<ShareIcon size='lg' />} /> 
        <Button variant='primary' text='Add Content' size='md' startIcon={<PlusIcon size='lg' />} />
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
  )
}

export default App;