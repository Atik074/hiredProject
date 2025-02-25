import React from 'react';

import Header from '../header/Header';
import { Link } from 'react-router-dom';
import FeatureJobs from '../featureJobs/FeatureJobs';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';


const Home = () => {
    return (

      <div >
          <Header/>
         
<div className='container'>
     <FeatureJobs/>  
     <Banner/>
    
  </div>
    <Footer/>
      </div>
        
    );
};

export default Home;