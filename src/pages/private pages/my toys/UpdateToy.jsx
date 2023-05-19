import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy=useLoaderData()
    const{_id,toysName,toysPrice,toysQuantity,toysDescription}=toy
    const handleToyUpdate=e=>{
        e.preventDefault()
        const form=e.target 
        const toysName=form.toysName.value 
        const toysPrice=form.toysPrice.value 
        const toysDescription=form.toysDescription.value 
        const toysQuantity=form.toysQuantity.value 
        const toysInfo={
 toysName,
 toysPrice,
 toysDescription,
 toysQuantity,
        }
   
         
Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toysInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire('Saved!', '', 'success')
        })
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved')
    }
  })

    }
    return (
        <div>
        <div className="card lg:card w-10/12 mx-auto bg-[#F4F3F0] my-12 shadow-xl">
         <div className='text-center mt-8 mb-4 w-1/2 mx-auto'>
         <h1 className='font-bold text-4xl mb-2'>Update Toy- <span className='text-violet-500'>{toysName}</span></h1>
         </div>
  <div className="card-body">
<form onSubmit={handleToyUpdate}>
 <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
 <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Toy Name" name='toysName'  defaultValue={toysName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" name='toysPrice' defaultValue={toysPrice} className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" name='toysDescription' defaultValue={toysDescription} className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="number" placeholder="Available Quantity" name='toysQuantity' defaultValue={toysQuantity} className="input input-bordered" required/>
        </div>
        <div className="form-control">
        </div>
 </div>
        <div className="form-control mt-6">
        <input type="submit" value="Update Toy" className='btn btn-purple'/>
        </div>
</form>
  </div>
</div>
        </div>
    );
};

export default UpdateToy;