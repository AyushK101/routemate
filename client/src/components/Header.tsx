import { FaRoute } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { Link,  useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootStore, useAppDispatch } from '../redux/store';
import { logoutUserSlice } from '../redux/slices/userSlice';
import { useLogoutUserApiMutation } from '../redux/apis/userApi';
// import { useErrorBoundary } from 'react-error-boundary';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {authStatus,user} = useSelector((store: RootStore)=> store.userSlice)
  const dispatch = useAppDispatch();
  const [logoutUserApi, {isError,isSuccess,error}] = useLogoutUserApiMutation()
  // const {showBoundary}= useErrorBoundary()
  const navigate = useNavigate()

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(()=>{
    if(isError) {
      console.log("in header",isError)
      // if(isError)
      //   // showBoundary(error)
      } 
    if(isSuccess){
      dispatch(logoutUserSlice(false))
      navigate('/login')
    }
  },[dispatch, error, isError, isSuccess, navigate])

  async function logoutFunc() {
     await logoutUserApi(null)
  }

  return (
    <header className=' border-b-2 shadow-lg text-3xl fixed bg-white w-full z-10'>
      <div className="p-5 mx-auto max-w-screen-xl flex justify-between items-center">
        <div className='flex gap-2 items-center'>
          <FaRoute height="40" width="40" color='blue' />
          <span className='text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl'>
            RouteMate
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? 'X' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 text-gray-400 items-center text-base font-medium`}>
          <div>
            <Link to='#'>Features</Link>
          </div>
          <div>
            <Link to="#">Find Partners</Link>
          </div>
          <div>
            <Link to="#">About Us</Link>
          </div>
          {authStatus ? (
              <>
              <h1>{user?.username}</h1>
              <Link to={'/login'} onClick={logoutFunc}>logout</Link></>) : (<Link to={'/'}>Login</Link>)}
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4 text-gray-400 items-center">
            <Link to="#">Features</Link>
            <Link to="#">Find Partners</Link>
            <Link to="#">About Us</Link>
            {authStatus ? (
              <>
              <h1>{user?.username}</h1>
              <Link to={'/login'} onClick={logoutFunc}>logout</Link></>) : (<Link to={'/'}>Login</Link>)}
              
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
