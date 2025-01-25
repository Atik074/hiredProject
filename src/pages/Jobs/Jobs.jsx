import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';

const Jobs = () => {
    const {user} = useContext(AuthContext)
   
    return (
        <div>
            all jobs present here
        </div>
    );
};

export default Jobs;