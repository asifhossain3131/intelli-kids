import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestNews = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the original trigger point
            easing: 'ease-in-out', // Easing function for the animation
            delay: 100, // Delay (in milliseconds) before the animation starts
          });
      }, []);
    return (
        <div className='my-12'>
           <div className='text-center w-1/2 mx-auto mb-8'>
           <h1 className='text-3xl lg:text-5xl font-semibold'>Latest News</h1>
           <p className='text-gray-600 mt-4'>Making your robust makes us pleasure. Have a look at our latest news how we engaging your child</p>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-9/12 mx-auto'>

                {/* first card */}
            <div data-aos="flip-left" className=" card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/astronomy-banners-set_98292-2906.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais" alt="Shoes" className='h-[200px] w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">New Science Toy Enables Kids to Explore the Wonders of Astronomy</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View news</button>
    </div>
  </div>
</div>

                {/* second card */}
          
            <div data-aos="flip-right" className=" card-compact  w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/schoolgirl-sitting-with-puzzles_23-2147663922.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais" alt="Shoes" className='w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">Mathematical Puzzle Sets on Toy  Boost Kids' Problem-Solving Skills</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View news</button>
    </div>
  </div>
</div>

                {/* third card */}
          
            <div data-aos="flip-up" className=" card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/kids-fashion-concept_155003-7062.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais" alt="Shoes" className='h-[200px] w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">Language Learning Goes Interactive with Cutting-Edge Toy</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View news</button>
    </div>
  </div>
</div>
                {/* fourth card */}
            <div data-aos="flip-down" className=" card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/classroom-scene-with-science-teacher-equipments_1308-37098.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais" alt="Shoes" className='h-[200px] w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">Scientists to Introduce STEM Kits for Kids</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View news</button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default LatestNews;