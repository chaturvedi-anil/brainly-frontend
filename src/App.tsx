import { useState } from 'react';
import Sidebar from './components/ui/Sidebar';
import Dashboard from './pages/Dashboard';
import CreateContentModal from "./components/ui/CreateContentModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return ( <>
            <div className='w-screeen h-screeen flex'>
              <Sidebar />
              <Dashboard setIsModalOpen={setIsModalOpen} />
          
            </div>
            {isModalOpen && <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> }
    </> )
}

export default App;

