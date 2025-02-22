import companies from "../../data/companies.json";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#09090bee] px-4 mt-4 shadow rounded">
         <p className="text-white text-center text-[27px] font-semibold py-6">Our sponsors company for Hirring</p>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex items-center gap-5 sm:gap-20 ">
            {companies.map(({ id, path }) => {
              return (
                <CarouselItem className="basis-1/5 lg:basis-1/6" key={id}>
                  <img
                    className=" h-9 object-contain sm:h-14"
                    src={path}
                    alt="picture"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
