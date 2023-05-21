import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RelatedCategoriesToy = ({categoryData}) => {
    const{_id, toysName,toysPhoto,toysPrice,toysQuantity}=categoryData
    const{user}=useContext(AuthContext)
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
        <div className="card w-96 bg-[#F4F3F0] shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={toysPhoto} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{toysName}</h2>
    <p className='font-semibold'>Price: ${toysPrice}</p>
    <p>In stock: {toysQuantity}</p>
    <div className="card-actions">
    <button onClick={()=>handleShowDetails(_id)} className="btn bg-violet-500 border-none">View Details</button>
    </div>
  </div>
</div>
    );
};

export default RelatedCategoriesToy;