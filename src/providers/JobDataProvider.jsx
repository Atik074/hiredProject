import { JobDataContext } from '@/context/AuthContext';
import React, { useState } from 'react';

const JobDataProvider = ({children}) => {
    const [job , setJob] = useState(null)


    return (
    <JobDataContext.Provider value={{job , setJob}}>
        {children}
    </JobDataContext.Provider>
    
)
   
};

export default JobDataProvider;