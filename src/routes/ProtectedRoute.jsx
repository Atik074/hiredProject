import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { RiseLoader } from 'react-spinners';


const ProtectedRoute = ({children}) => {
    const {user ,  loading } = useContext(AuthContext)
    const location = useLocation()
   

    if(loading) return  <RiseLoader
    color="#1552bb"
    size={25}
    className='flex justify-center items-center my-32'
  />

    if(user) return children ;

     return <Navigate to="/login" state={{from:location}} replace />

};

export default ProtectedRoute;