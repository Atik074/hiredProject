import React from 'react';

import Header from '../header/Header';
import { Link } from 'react-router-dom';
import FeatureJobs from '../featureJobs/FeatureJobs';
import Banner from '../banner/Banner';


const Home = () => {
    return (

      <div >
          <Header/>
         
<div className='container'>
    
     <FeatureJobs/>  
     <Banner/>
          
          {/* components */}
        
           {/* <h2>Find Your Dream Job and Get Hired</h2>
          <Link to="/alljobs"> 
             <Button variant="outline" size="lg" >Find Jobs</Button> 
          </Link>
        
         <Button variant="destructive" size="lg">Post a Job</Button> */}

    


 
          
     
        
         
      </div>
      </div>
        
    );
};

export default Home;