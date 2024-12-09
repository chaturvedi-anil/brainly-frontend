import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <Link className='pl-10' to={"/dashboard"}> Dashboard </Link>
      <Link className='pl-10' to={"/signup"}> Signup </Link>
      <Link className='pl-10' to={"/signin"}> Signin</Link>
    </div>
  )
}

export default Home;