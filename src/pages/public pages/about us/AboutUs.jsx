import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
<div className='flex gap-4 justify-center items-center  bg-cyan-500 bg-opacity-75 p-8'>
<Link to='/'>Home</Link>
            <FaBackward></FaBackward>
            <Link to='/alltoys'>All Toys</Link>
            <FaBackward></FaBackward>
            <Link to='/mytoys'>My Toys</Link>
            <FaBackward></FaBackward>
            <Link to='/addtoys'>Add Toys</Link>
            <FaBackward></FaBackward>
            <Link to='/blogs'>Blogs</Link>
            <FaBackward></FaBackward>
            <Link className='text-blue-500 font-semibold'>About us</Link>
         </div>
  

        </>
    );
};

export default AboutUs;