import Button from './components/ui/Button';
import PlusIcon from './icons/PlusIcon';
import ShareIcon from './icons/ShareIcon';

const App = () => {
  return (
    <div className='m-20 bg-black-400'>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='sm' />} endIcon={<ShareIcon size='sm'/>}/> <br />
      <Button variant='primary' text='Add Content' size='md' startIcon={<PlusIcon size='md' />} endIcon={<ShareIcon size='md'/>}/> <br />
      <Button variant='primary' text='Add Content' size='lg' startIcon={<PlusIcon size='lg' />} endIcon={<ShareIcon size='lg'/>}/> <br />
      <Button variant='primary' text='Add Content' size='xl' startIcon={<PlusIcon size='xl' />} endIcon={<ShareIcon size='xl'/>}/> <br />
      <Button variant='secondary' text='Add Content' size='sm' startIcon={<PlusIcon size='sm' />} endIcon={<ShareIcon size='sm'/>}/> <br /> 
      <Button variant='secondary' text='Add Content' size='md' startIcon={<PlusIcon size='md' />} endIcon={<ShareIcon size='md'/>}/> <br />
      <Button variant='secondary' text='Add Content' size='lg' startIcon={<PlusIcon size='lg' />} endIcon={<ShareIcon size='lg'/>}/> <br />
      <Button variant='secondary' text='Add Content' size='xl' startIcon={<PlusIcon size='xl' />} endIcon={<ShareIcon size='xl'/>}/> <br />
    </div>
  )
}

export default App;