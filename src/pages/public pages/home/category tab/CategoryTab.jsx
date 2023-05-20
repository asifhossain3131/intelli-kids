import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabCard from './CategoryTabCard';

const CategoryTab = () => {
    const [toys,setToys]=useState([])
    const[category,setCategory]=useState('Math')

    useEffect(() => {
        const fetchToys = async () => {
          try {
            const response = await fetch(`https://intelli-kidos-server.vercel.app/toys?category=${category}`);
            const data = await response.json();
            setToys(data);
          } catch (error) {
            console.error('Failed to fetch toys:', error);
          }
        };
    
        fetchToys();
      }, [category]);

    return (
        <div className='w-9/12 text-center mx-auto mt-12 h-[400px] bg-[#F4F3F0]'>
             <Tabs>
    <TabList className='bg-violet-500 font-bold p-4'>
      <Tab onClick={()=>setCategory('Math')}>Math</Tab>
      <Tab onClick={()=>setCategory('Science')}>Science</Tab>
      <Tab onClick={()=>setCategory('Language')}>Language</Tab>
    </TabList>

<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
<TabPanel>
<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
{
    toys.slice(0,2).map(toy=><CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>)
}
</div>
</TabPanel>
  </Tabs>
        </div>
    );
};

export default CategoryTab;