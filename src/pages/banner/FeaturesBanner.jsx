import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../../data/companies.json";


const FeaturesBanner = () => {
    return (
       <div className="px-4 lg:my-[150px] my-24">
             <div className="text-center mb-8">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                 Featured Companies
               </h2>
               <h3 className="text-base md:text-lg lg:text-xl text-[#706e6e]">
                 Our sponsoring companies for hiring
               </h3>
             </div>
       
             <Carousel
               plugins={[Autoplay({ delay: 2000 })]}
               className="w-full py-4 md:py-8"
             >
               <CarouselContent className="flex items-center gap-3 sm:gap-5 md:gap-8">
                 {companies.map((company) => (
                   <CarouselItem 
                     key={company.id}
                     className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 px-2 py-3 md:px-4 md:py-6 border rounded shadow bg-[#2da9ecdd]"
                   >
                     <img
                       className="h-8 sm:h-10 md:h-12 lg:h-14 w-full object-contain"
                       src={company.path}
                       alt={`${company.name} logo`}
                     />
                   </CarouselItem>
                 ))}
               </CarouselContent>
             </Carousel>
           </div>
    );
};

export default FeaturesBanner;