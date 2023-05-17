import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const loaction=useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;