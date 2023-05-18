import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const AddToys = () => {
    useTitle('Add Toys')
    const {user}=useContext(AuthContext)

    const handleAddToys=e=>{
        e.preventDefault()
        const form=e.target 
        const toysName=form.toysName.value 
        const toysPhoto=form.toysPhoto.value 
        const sellerName=form.sellerName.value 
        const sellerEmail=form.sellerEmail.value 
        const toysPrice=form.toysPrice.value 
        const toysRatings=form.toysRatings.value 
        const toysDescription=form.toysDescription.value 
        const toysQuantity=form.toysQuantity.value 
        const subCategory=form.subCategory.value 
        const toysInfo={
 toysName,
toysPhoto,
sellerName,
sellerEmail,
toysPrice,
toysRatings,
toysDescription,
toysQuantity,
subCategory,
        }

        fetch('https://intelli-kidos-server.vercel.app/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toysInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Toy has been added successfully')
            form.reset()
        })
    }
    return (
        <div>
        <div className="card lg:card w-10/12 mx-auto bg-[#F4F3F0] shadow-xl">
         <div className='text-center mt-8 mb-4 w-1/2 mx-auto'>
         <h1 className='font-bold text-4xl mb-2'>Add A Toy</h1>
            <p>Adding a toy always should be a pleasure as it always opens a new unique way for children to learn about science and technology with kits</p>
         </div>
  <div className="card-body">
<form onSubmit={handleAddToys}>
 <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
 <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Toy Name" name='toysName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Toy Photo URL" name='toysPhoto' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name" name='sellerName' defaultValue={user?.displayName} className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" placeholder="Seller Email" name='sellerEmail' defaultValue={user?.email} className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" name='toysPrice' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input type="text" placeholder="Ratings" name='toysRatings' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" name='toysDescription' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="number" placeholder="Available Quantity" name='toysQuantity' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category: </span>
          </label>
   <div className='flex gap-4'>
   <label className='flex items-center gap-2'><input type="radio" name="subCategory" value='Math' className="radio" defaultChecked /><span className="label-text">Math Toys</span> </label>
   <label className='flex items-center gap-2'><input type="radio" name="subCategory" value='Science' className="radio" defaultChecked /><span className="label-text">Science Toys</span> </label>
   <label className='flex items-center gap-2'><input type="radio" name="subCategory" value='Language' className="radio" defaultChecked /><span className="label-text">Language Toys</span> </label>
   </div>

        </div>
 </div>
        <div className="form-control mt-6">
        <input type="submit" value="Add Toy" className='btn btn-purple'/>
        </div>
</form>
  </div>
</div>
        </div>
    );
};

export default AddToys;