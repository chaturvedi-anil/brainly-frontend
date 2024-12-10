import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

import Dashboard from './pages/Dashboard'
import Sidebar from './components/ui/Sidebar';
import CreateContentModal from './components/ui/CreateContentModal';
import useAuth from './services/useAuth';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useAuth();
  
  return <BrowserRouter>
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<Home />} />
      <Route element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirectPath='/dashboard'/>} >
        <Route path='/login' element={<Signin />} />
        <Route path='/signup' element={<Signup /> } />
      </Route>
      


      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectPath='/login ' />} >
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
      </Route>
    </Routes>
  </BrowserRouter>
}


export default App;

