import React from 'react';

const AboutUs = () => {
    return (
        <div>

       <div className='overflow-hidden w-80 relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
        <img
          src='https://img.freepik.com/free-photo/little-boy-having-idea_23-2149352405.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph'
          alt='gallery'
          className='object-cover w-full h-56 lg:h-64 xl:h-80'
        />

        <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Hello</h1>
        </div>
      </div>
      
        </div>
    );
};

export default AboutUs;