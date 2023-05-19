import React, { useContext, useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const MyToys = () => {
    useTitle('My Toys')
    const{user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://intelli-kidos-server.vercel.app/mytoys?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;