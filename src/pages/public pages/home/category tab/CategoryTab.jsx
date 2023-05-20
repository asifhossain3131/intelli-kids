import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabCard from './CategoryTabCard';

const CategoryTab = () => {
    const [toys,setToys]=useState([])
    const[category,setCategory]=useState('Math')
    const [currentPage,setCurrentPage]=useState(0)
    const[itemPerPage,setItemPerPage]=useState(2)
    const totalPages=Math.ceil(toys.length/itemPerPage)
    const options=[2,5,10]

    const pageNumbers=[...Array(totalPages).keys()]

    useEffect(() => {
        const fetchToys = async () => {
        
            const response = await fetch(`https://intelli-kidos-server.vercel.app/toys?category=${category}&limit=${itemPerPage}&page=${currentPage}`);
            const data = await response.json();
            setToys(data)
        }
        fetchToys();
      }, [category,itemPerPage,currentPage]);

      const handleOnChange=e=>{
        setItemPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }
    return (
      <section className=' mt-20'>
        <h1 className='text-center font-semibold text-4xl mb-12'>Choose Your Toys By Your <br /> Favorite Categories</h1>
          <div className='w-10/12 text-center mx-auto lg:h-[550px] bg-[#F4F3F0]'>
             <Tabs>
    <TabList className='bg-violet-500 font-bold p-4'>
      <Tab onClick={()=>setCategory('Math')}>Math</Tab>
      <Tab onClick={()=>setCategory('Science')}>Science</Tab>
      <Tab onClick={()=>setCategory('Language')}>Language</Tab>
    </TabList>

<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
  </Tabs>

  <div className='lg:mx-auto w-1/2 lg:text-center my-12'>
<div className="btn-group">
{
    pageNumbers.map(pageNumber=>
        <button key={pageNumber} onClick={()=>setCurrentPage(pageNumber)} className={currentPage===pageNumber? 'btn btn-active':'btn' }>{pageNumber}</button>
    )
}
 </div>
 <select className='select select-bordered ms-2' value={itemPerPage} onChange={handleOnChange}>
{
    options.map(option=>
    <option key={option} value={option}>{option}</option>
    )
}
</select>
</div>
        </div>
      </section>
    );
};

export default CategoryTab;