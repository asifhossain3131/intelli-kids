import React from 'react';
import Marquee from 'react-fast-marquee';

const Sponsors = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-center mb-12'>Our Sponsors</h1>
            <Marquee className='flex items-center'> 
                <img className='w-[300px] h-[200px]' src="https://cdn.corporate.walmart.com/dims4/WMT/15870a4/2147483647/strip/true/crop/1224x792+0+0/resize/870x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F0e%2F78%2F1c0917c94ce29c76e21e59934d25%2Flogo-walamrtspark-blue-transparent-background.png" alt="" />
                <img className='w-[300px] h-[200px]' src="https://logowik.com/content/uploads/images/453_alibaba.jpg" alt="" />
                <img className='w-[300px] h-[200px]' src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png" alt="" />
                <img className='w-[300px] h-[200px]' src="https://upload.wikimedia.org/wikipedia/commons/3/38/Hamleys_logo.png" alt="" />
                <img className='w-[300px] h-[200px]' src="https://1000logos.net/wp-content/uploads/2017/04/New-York-Times-logo.png" alt="" />
                <img className='w-[300px] h-[200px]' src="https://download.logo.wine/logo/E-mart/E-mart-Logo.wine.png" alt="" />
</Marquee>
        </div>
    );
};

export default Sponsors;