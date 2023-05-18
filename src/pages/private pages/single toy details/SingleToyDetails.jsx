import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const SingleToyDetails = () => {
    const toy=useLoaderData()
    const{sellerName,subCategory,toysDescription,toysName,toysPhoto,toysPrice,toysQuantity,toysRatings}=toy
    return (
        <>
         <div className='flex gap-4 justify-center items-center bg-[#F4F3F0] p-8'>
            <Link to='/'>Home</Link>
            <FaBackward></FaBackward>
            <Link to='/alltoys'>All toys</Link>
            <FaBackward></FaBackward>
            <Link className='text-blue-500'>Toy Details</Link>
         </div>
         <DetailsCard toy={toy}></DetailsCard>
        </>
    );
};

export default SingleToyDetails;