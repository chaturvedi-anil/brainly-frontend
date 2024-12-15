import { NavLink } from 'react-router-dom';
import SunIcon from '../icons/SunIcon';
import useAuth from "../services/useAuth";

const Home = () => {
  const isAuthenticated = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with full screen height */}
      {/* Navigation Bar */}
      <nav className="bg-purple-200 flex justify-between items-center px-80 py-6">
        <div className="flex items-center">
          <SunIcon size="xl" color="text-purple-600" />
          <NavLink to={"/"}>
            <span className="text-purple-600 font-bold text-3xl ">Brainly</span>
          </NavLink>
        </div>
        
        {isAuthenticated 
          ?
            <div>
              <NavLink className="text-purple-600 text-xl font-bold mr-2" to="/dashboard">
                Dashboard
              </NavLink>
            </div>
          :
            <div>
              <NavLink className="text-purple-600 text-xl font-bold mr-2" to="/login">
                Signin
              </NavLink>
              <NavLink className="text-purple-600 text-xl font-bold" to="/signup">
                Signup
              </NavLink>
            </div>
        }
        
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-200 px-80 py-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique eum quis
          voluptatibus, eos cupiditate maiores inventore, porro magni blanditiis laudantium ipsam
          totam iste hic ullam facere harum odit? Sapiente. Omnis, nobis expedita cumque voluptatum
          voluptatem ipsum adipisci incidunt, ullam perspiciatis suscipit quia aspernatur earum
          voluptate id! Ab aliquid animi tenetur molestias minus, obcaecati assumenda ipsa maiores
          modi provident beatae! Dicta, totam. Fuga eveniet voluptatibus architecto quo eos corrupti
          excepturi! Totam id repudiandae ab cupiditate autem alias cum quasi quos, qui fuga sit ipsa
          iste quaerat tempore corporis perferendis excepturi. Numquam maiores exercitationem
          architecto blanditiis vero? Minus iste nesciunt perspiciatis nemo repudiandae. Officia
          obcaecati doloribus non fugiat, odio voluptate voluptas unde expedita magnam ipsum,
          distinctio quia atque eveniet at laudantium. Debitis molestias temporibus sed ad accusamus
          veritatis quidem, libero corrupti ex culpa non quia dolorem, sapiente in, suscipit sint
          totam nostrum iure nulla. Debitis officiis cumque, fugit non atque temporibus?
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-purple-200 flex justify-center items-center py-5">
        <p className='text-purple-600 uppercase'> &copy;2024 Brainly All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
 