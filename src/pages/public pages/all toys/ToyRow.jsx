import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({toy, index}) => {
   const{_id,sellerName,toysName,subCategory,toysPrice,toysQuantity,}=toy
    return (
        <tr>
        <th>{index+1}</th>
        <td>{sellerName}</td>
        <td>{toysName}</td>
        <td>{subCategory}</td>
        <td>{toysPrice}</td>
        <td>{toysQuantity}</td>
        <td>
            <Link to={`/toy/${_id}`}><button className="btn btn-outline btn-info">See more</button></Link>
        </td>
      </tr>
    );
};

export default ToyRow;