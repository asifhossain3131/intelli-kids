import React, { useContext } from 'react';
import logo from '../../src/assets/images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const{user}=useContext(AuthContext)
    return (
        <>
            <div className="navbar bg-base-700">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
        <li><Link to='/'>Home</Link></li>
        {
        user && <>
         <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add Toys</Link></li>
        </>
       }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
      </ul>
    </div>
   <Link to='/'> <img src={logo} alt="logo" className='w-[100px]'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><Link to='/'>Home</Link></li>
       {
        user && <>
         <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add Toys</Link></li>
        </>
       }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
    user? 
    <>
    <div className="dropdown dropdown-end tooltip tooltip-left"  data-tip={user.name? user?.name:'Unknown'}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200/300" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </> :
    <>
    <Link to='/login'><button class="btn btn-outline btn-info">Login</button></Link>
    </>
  }
  </div>
</div>
        </>
    );
};

export default Header;