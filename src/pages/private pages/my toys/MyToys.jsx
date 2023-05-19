import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import MyToysTableRow from './MyToysTableRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('My Toys')
    const{user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState([])
    const [sort,setSort]=useState(0)

    useEffect(()=>{
        fetch(`https://intelli-kidos-server.vercel.app/mytoys?email=${user?.email}&sort=${sort}`)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    },[])

    const handleDeleteToy=id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           fetch(`https://intelli-kidos-server.vercel.app/toys/${id}`)
           .then(res=>res.json())
           .then(data=>{
            const remaining=myToys.filter(toy=>toy._id!==id)
            setMyToys(remaining)
            Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
           })

           
            }
          })
    }

    return (
        <>
            <div className='w-9/12 mx-auto text-center'>
                <h1 className='text-4xl font-bold'>My Toys are here</h1>
                <div className="form-control">
  <div className="input-group">
    <select className="select select-bordered">
      <option disabled selected>Pick category</option>
      <option>T-shirts</option>
      <option>Mugs</option>
    </select>
    <button className="btn">Go</button>
  </div>
</div>
            </div>

 {/* table starts */}
            <div className="overflow-x-auto my-12">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Stocks</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    myToys.map(toy=><MyToysTableRow key={toy._id} toy={toy} handleDeleteToy={handleDeleteToy}></MyToysTableRow>)
   }
    </tbody>
  </table>
</div>
        </>
    );
};

export default MyToys;