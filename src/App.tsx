import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

import Dashboard from './pages/Dashboard'
import Sidebar from './components/ui/Sidebar';
import CreateContentModal from './components/ui/CreateContentModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup /> } />
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' 
        element={
          <div>
            <div className='w-screeen h-screeen flex'>
              <Sidebar />
              <Dashboard setIsModalOpen={setIsModalOpen} />
            </div>
            {isModalOpen && <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />}  
          </div> 
        }
      />
    </Routes>
  </BrowserRouter>
}


export default App;

