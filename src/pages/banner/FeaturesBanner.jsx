import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../../data/companies.json";

const FeaturesBanner = () => {
  return (
    <div className="px-4 lg:my-[150px] my-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#2D2D2D]">
          Featured Companies
        </h2>
        <h3 className="text-base md:text-lg lg:text-xl text-[#706e6e]">
          Our sponsoring companies for hiring
        </h3>
      </div>

      {/* Carousel Section */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-4 md:py-8"
      >
        <CarouselContent className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {companies.map((company) => (
            <CarouselItem
              key={company.id}
              className="flex justify-center items-center basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 px-4 py-6 md:px-8 md:py-10 border rounded-lg shadow-lg bg-gradient-to-r from-[#2da9ecdd] to-[#1b8ab9] hover:scale-105 transform transition-all duration-300"
            >
              <img
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-full object-contain"
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
