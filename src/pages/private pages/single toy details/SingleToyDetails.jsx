import React, { useEffect, useState } from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import DetailsTab from './DetailsTab';
import RelatedCategoriesToy from './RelatedCategoriesToy';

const SingleToyDetails = () => {
    const toy=useLoaderData()
    const{_id,sellerName,subCategory,toysDescription,toysName,toysPhoto,toysPrice,toysQuantity,toysRatings}=toy
     const[categoriesData, setCategoriesData]=useState([])
    useEffect(()=>{
        fetch(`https://intelli-kidos-server.vercel.app/toy/${subCategory}`)
        .then(res=>res.json())
        .then(datas=>{
          const fillteredCategory=datas.filter(data=>data._id!==_id)
         setCategoriesData(fillteredCategory)
        })
    },[subCategory])
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
         <DetailsTab toy={toy}></DetailsTab>
         <section className='mt-12 mb-20'>
         <h1 className='text-5xl font-semibold text-center mb-12'>Find Other Toys Of <br /> {subCategory} category</h1>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mx-12'>
{
    categoriesData.map(categoryData=><RelatedCategoriesToy key={categoryData._id} categoryData={categoryData}></RelatedCategoriesToy>)
}
         </div>
         </section>
        </>
    );
};

export default SingleToyDetails;