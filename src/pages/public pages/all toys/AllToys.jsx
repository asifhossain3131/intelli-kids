import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ToyRow from './ToyRow';
import { useNavigation } from 'react-router-dom';

const AllToys = () => {
    useTitle('All Toys')
    const[toys,setToys]=useState([]) 
    const [search,setSearch]=useState('')
  

    useEffect(()=>{
       async function fetchData(){
        const res=await fetch(`https://intelli-kidos-server.vercel.app/toys`,{
          method:'GET'
        })
        const data=await res.json()
        setToys(data)
       }
       fetchData()
    },[])
   
    return (
        <>
            <div className='w-9/12 mx-auto text-center mb-12'>
                <h1 className='font-bold text-4xl mb-2'>All Toys here:</h1>
                <div className="form-control">
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search your toys here" className="input input-bordered" />
    </div>
            </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead >
      <tr>
        <th></th>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available quantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
    {
        toys?.filter((item)=>{
            return search.toLowerCase()===''? item : item.toysName.toLowerCase().includes(search)
        }).map((toy)=><ToyRow key={toy._id} toy={toy}></ToyRow>)
    }
    </tbody>
  </table>
</div>
        </>
    );
};

export default AllToys;