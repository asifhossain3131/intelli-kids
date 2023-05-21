import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabCard from './CategoryTabCard';

const CategoryTab = () => {
    const [toys,setToys]=useState([])
    const[category,setCategory]=useState('Math')
    const [currentPage,setCurrentPage]=useState(0)
    const[itemPerPage,setItemPerPage]=useState(2)
    const[totalToys,setTotalToys]=useState(0)
    const totalPages=Math.ceil(totalToys/itemPerPage)

    const pageNumbers=[...Array(totalPages).keys()]
  
    useEffect(() => {
        const fetchToys = async () => {
        
            const response = await fetch(`https://intelli-kidos-server.vercel.app/toys?category=${category}&limit=${itemPerPage}&page=${currentPage}`);
            const data = await response.json();
            setToys(data)
        }
        fetchToys();
      }, [category,itemPerPage,currentPage]);

      useEffect(()=>{
        const fetchToyNumbers=async()=>{
          const res=await fetch(`https://intelli-kidos-server.vercel.app/countToys/${category}`)
          const data=await res.json()
          setTotalToys(data.toysNumbers)
        }
        fetchToyNumbers()
      },[category])

      const handleSetcategory=category=>{
        if(category==='Math'){
          setCategory(category)
        }
        else if(category==='Science'){
          setCategory(category)
        }
        else{
          setCategory(category)
        }
        setCurrentPage(0)
      }
    return (
      <section className=' mt-20'>
        <h1 className='text-center font-semibold text-3xl lg:text-5xl mb-12'>Choose Your Toys By Your <br /> Favorite Categories</h1>
          <div className='w-10/12 text-center mx-auto lg:h-[550px] bg-[#F4F3F0]'>
             <Tabs>
    <TabList className='bg-cyan-500 font-bold p-4'>
        <Tab onClick={()=>handleSetcategory('Math')}>Math</Tab>
      <Tab onClick={()=>handleSetcategory('Science')}>Science</Tab>
      <Tab onClick={()=>handleSetcategory('Language')} >Language</Tab>
    </TabList>

<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:p-8'>
{
    toys.map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
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
</div>
        </div>
      </section>
    );
};

export default CategoryTab;