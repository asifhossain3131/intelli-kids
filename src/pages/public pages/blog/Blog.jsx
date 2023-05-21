import React from 'react';
import faq from '../../../../public/138566-frequently-asked-question-faq.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';


const Blog = () => {
  useTitle('Blogs')
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
            <Link className='text-blue-500 font-semibold'>Blogs</Link>
         </div>

       <div className='flex flex-col lg:flex-row mx-12 mb-20 gap-4 lg:items-center'>
       <div className='lg:w-1/2'>
      <Lottie animationData={faq} loop={true} />
      </div>
    
    {/* collapse part */}
      <div className='lg:w-1/2'>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is an access token and refresh token? How do they work and where should we store them on the client-side?
  </div>
  <div className="collapse-content">
   <p>
    <b>Access Token:</b> After user login successful, a token is being generated in server side to authorize the user in which data they have access and that is called an Access token. Access token gives permission to the user to access his own resources or data.
   </p>
   <p>
    <b>Refresh token:</b> While generating token after authentication,server returns two tokens. The second one is a refresh token that keep refreshing the access token untill it becomes expired
   </p>
   <p>
    <b>How works and where to store:</b> After getting authentication successful status,server generates token for the user and return it to client side. Usually the token gets stored in two places whereas http only cookies is more safer than local storagae. A user can access to his particular data after successfully getting token and if no access token, then server sends a 401 status with unauthorized access message. The refresh token usually has a long expiry time than access token. But whenever the refresh token becomes expired, server forces the user to login again.
   </p>
  </div>
</div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Compare SQL and NoSQL databases?
  </div>
  <div className="collapse-content">
    <p>
      <b>SQL:</b> Means structured query language that deals with relational database. It is a collection of highly structured tables where a row indicates a data entity and each column defines a specific information. It is a underlying query lanuage for all RDBMS
    </p>
    <p>
      <b>No-SQL:</b> Means no structured query or non-tabular database. Therefore, it is more flexible, scalable than sql and easy to handle as it avoids joins like SQL. Mainly used for distributed data stores with homogenous data storage needs.
    </p>
  </div>
</div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is express js? What is Nest JS?
  </div>
  <div className="collapse-content">
    <p>
      <b>Express.js:</b> A node js application framework that provides a broad features for building modern server side website. It is commonly used to crete a single page application. Express js has made it easy to manage server, routes as it reduces the quantity of code  writing with node. It is mainly created on middlewares concepts.
    </p>
    <p>
      <b>Nest.js:</b> An another powerful node.js application framework for building scalable and efficient server side applications. Mainly it is pre-defined structured and built-in-modular system that does not give programmer much flexibility whereas express.js gives more. It also combines elements of oop, functional programming and reactive programming that helps to build a strong applications though it has some strict conventions to follow
    </p>
  </div>
</div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is MongoDB aggregate and how does it work?
  </div>
  <div className="collapse-content">
<p>
  <b>MongoDB aggregate:</b> It is a powerful method that gives flexibility to perform complex queries, modifications and data processing on colllections. It has some powerful built in functionalities such as sort(), limit(), skip(), match() etc. We can chain them together and perform or retrive complex data piplines to modify,filter or analyze data.We can give parameters to these stage and accordingly it performs an operation on our collections and helps to get our target one . 
</p>
  </div>
</div>
      </div>
       </div>
   </>
  );
};

export default Blog;