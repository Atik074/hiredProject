import React from 'react';

import Header from '../header/Header';
import { Link } from 'react-router-dom';
import FeatureJobs from '../featureJobs/FeatureJobs';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import FeaturesBanner from '../banner/FeaturesBanner';
import JobAccordian from '@/components/constantUi/JobAccordian';


const Home = () => {
    return (

      <div >
          <Header/>
          <Banner/>
         
<div className='container'>
     <FeatureJobs/>  
    <FeaturesBanner/>
    <JobAccordian/>
    
  </div>
    <Footer/>
      </div>
        
    );
};

export default Home;