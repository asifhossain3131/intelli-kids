import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CategoryTabCard = ({toy}) => {
  const{user}=useContext(AuthContext)
    const {_id,toysPhoto,toysPrice,toysRatings,toysName}=toy||{}
    const navigate=useNavigate()

    const handleShowDetails=id=>{
      if(!user){
        Swal.fire({
          title: 'You have to login first',
          text: "You can't see details without logging in",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go To Login'
        }).then((result) => {
          if (result.isConfirmed) {
         navigate('/login')
          }
        })
      }
      navigate(`/toy/${id}`)
    }
    return (
<div className="card lg:card-side gap-4 bg-base-100 shadow-xl lg:h-[300px]">
  <figure><img src={toysPhoto} alt="Album" className='w-9/12'/></figure>
  <div className="card-body items-center">
    <h2 className="card-title text-2xl">{toysName}</h2>
    <span className='font-semibold text-gray-500'>Price: ${toysPrice}</span>
    <span className='font-semibold text-gray-500'>Ratings: {toysRatings}</span>
    <div className="card-actions justify-center">
      <button onClick={()=>handleShowDetails(_id)} className="btn btn-outline btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default CategoryTabCard;