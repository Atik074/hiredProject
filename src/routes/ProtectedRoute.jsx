import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import {InfinitySpin} from 'react-loader-spinner'


const ProtectedRoute = ({children}) => {
    const {user ,  loading } = useContext(AuthContext)
    const location = useLocation()
   

    if(loading) return  <InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    ariaLabel="infinity-spin-loading"
    />

    if(user) return children ;

     return <Navigate to="/login" state={{from:location}} replace />

};

export default ProtectedRoute;