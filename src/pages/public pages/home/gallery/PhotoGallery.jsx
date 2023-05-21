import React, { useEffect, useState } from 'react';

const PhotoGallery = () => {
    const [galleries,setGalleries]=useState([])
    useEffect(()=>{
        fetch('https://intelli-kidos-server.vercel.app/galleries')
        .then(res=>res.json())
        .then(data=>setGalleries(data))
    },[])
    return (
        <section className='my-20'>
         <div className='w-1/2 mx-auto my-8 text-center'>
            <h1 className='text-3xl lg:text-5xl mb-2 font-semibold'>Photo Gallery</h1>
            <p className='text-gray-700'>Have a quick look what our super kids have achived and got to learn through our provided kits and toys</p>
         </div>

         <div className='grid grid-cols-2 lg:grid-cols-4 mx-12 lg:mx-32 gap-4'>
            {
                galleries.map(gallery=>
                    <div className='overflow-hidden w-48 relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img
                      src={gallery.image}
                      alt='gallery'
                      className='object-cover w-full h-48 '
                    />
            
                    <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold'>{gallery.name}</h1>
                    </div>
                  </div>
                    )
            }
         </div>
        </section>
    );
};

export default PhotoGallery;