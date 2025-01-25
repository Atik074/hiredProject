import { JobDataContext } from '@/context/AuthContext';
import React, { useState } from 'react';

const JobDataProvider = ({children}) => {
    const [jobs , setJobs] = useState([])


    return (
    <JobDataContext.Provider value={{jobs , setJobs}}>
        {children}
    </JobDataContext.Provider>
    
)
   
};

export default JobDataProvider;