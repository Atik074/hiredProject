import { JobDataContext } from '@/context/AuthContext';
import React, { useState } from 'react';

const JobDataProvider = ({children}) => {
    const [job , setJob] = useState(null)
    const [loading, setLoading] = useState("");


    return (
    <JobDataContext.Provider value={{job , setJob ,loading, setLoading}}>
        {children}
    </JobDataContext.Provider>
    
)
   
};

export default JobDataProvider;