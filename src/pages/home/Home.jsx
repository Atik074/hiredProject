import React from 'react';
import companies from "../../data/companies.json"
import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import Header from '../header/Header';

const Home = () => {
    return (
        <div className='container'>
          
            {/* components */}
            <Header/>



          <h2>Find Your Dream Job and Get Hired</h2>

           <Button variant="blue" size="lg" >Find Jobs</Button> 
           <Button variant="destructive" size="lg">Post a Job</Button>


      


    <Carousel
      plugins={[ Autoplay({delay:2000})]}
      className="w-full py-10"
    >
       <CarouselContent className="flex items-center gap-5 sm:gap-20 ">
       {
        companies.map(({id , path})=>{
            return(
                   <CarouselItem 
                    className="basis-1/5 lg:basis-1/6"
                   key={id}>
                     <img 
                     className='bg-amber-400 h-9 object-contain sm:h-14' 
                     src={path} alt="picture" />
                  </CarouselItem>
            )
        })
       }
      </CarouselContent>
     
    </Carousel>
            

          
           
        </div>
    );
};

export default Home;