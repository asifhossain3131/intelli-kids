import React from 'react';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysTableRow = ({toy,handleDeleteToy}) => { 
    const{_id,sellerName,toysName,subCategory,toysPrice,toysQuantity, toysPhoto}=toy

  
    return (
        <tr>
        <td>
        <div className="avatar">
    <div className="w-12">
      <img src={toysPhoto} />
    </div>
  </div>
        </td>
        <td>{toysName}</td>
        <td>{subCategory}</td>
        <td>{toysPrice}</td>
        <td>{toysQuantity}</td>
        <td>
<Link to={`/updatetoy/${_id}`}><button className="btn btn-circle btn-outline">
<FaPen></FaPen></button></Link>
        </td>
        <td>
        <button onClick={()=>handleDeleteToy(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </td>
      </tr>
    );
};

export default MyToysTableRow;