import ShareIcon from "../../icons/ShareIcon"
import PlusIcon from "../../icons/PlusIcon"
import Button from "./Button"

interface HeaderProps {
    handleShareLink: () => void,
    handleOpenModal: () => void
}

const Header = ({handleShareLink, handleOpenModal}: HeaderProps) => {
  return (
    <header className='flex items-center justify-between mb-10 '>
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
  )
}

export default Header