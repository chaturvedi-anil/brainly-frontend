import Button from './components/ui/Button';
import PlusIcon from './icons/PlusIcon';

const App = () => {
  return (
    <div className='m-20 bg-black-400'>
      <Button variant='primary' text='Add Content' size='md' startIcon={<PlusIcon />} />
      <Button variant='secondary' text='Share' size='md' />
      <Button variant='secondary' text='Delete' size='xl' />
    </div>
  )
}

export default App;