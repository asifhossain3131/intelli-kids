import React from 'react';
import { FaFacebook, FaHeart, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const DetailsCard = ({toy}) => {
    const{sellerName,subCategory,toysDescription,toysName,toysPhoto,toysPrice,toysQuantity,toysRatings}=toy
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={toysPhoto} className=" rounded-lg shadow-2xl" />
          <div className='space-y-4'>
            <h1 className="text-5xl font-bold">{toysName}</h1>
            <h1 className="text-3xl font-bold text-violet-500">Price: ${toysPrice}</h1>

<div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Ratings</div>
    <div className="stat-value">{toysRatings}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">In stocks</div>
    <div className="stat-value">{toysQuantity}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Discount</div>
    <div className="stat-value">30%</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
<div>
<button className="btn rounded-full">Add To Cart</button>
<button className="btn btn-link font-semibold text-xl text-black"><span className='me-2'>Add To Wishlist</span><FaHeart></FaHeart></button>
</div>

<div className='flex items-center gap-4'>
    <p className='font-semibold text-[20px]'>Share:</p>
    <div className='flex items-center gap-4'>
<FaFacebook></FaFacebook>
<FaTwitter></FaTwitter>
<FaInstagram></FaInstagram>
<FaPinterest></FaPinterest>
    </div>
</div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;