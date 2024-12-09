import { useState } from 'react';
import Sidebar from './components/ui/Sidebar';
import Dashboard from './pages/Dashboard';
import CreateContentModal from "./components/ui/CreateContentModal";
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return <Signin />
  // return ( <>
  //           <div className='w-screeen h-screeen flex'>
  //             <Sidebar />
  //             <Dashboard setIsModalOpen={setIsModalOpen} />
          
  //           </div>
  //           {isModalOpen && <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> }
  //   </> )
}

export default App;

