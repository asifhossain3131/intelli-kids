import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from '../../../../public/139742-error-404.json'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className='w-10/12 mx-auto text-center'>
        <Lottie className='w-[400px] mx-auto' animationData={errorAnimation} loop={true} />
         <p className='text-red-500 font-semibold text-center mb-4'>{error?.error?.message}</p>
         <Link to='/'><button className="btn btn-accent">Back to homepage</button></Link>
        </div>
    );
};

export default ErrorPage;