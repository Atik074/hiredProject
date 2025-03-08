import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // Define your image URLs in an array
  const images = [
    "https://t4.ftcdn.net/jpg/04/30/53/87/360_F_430538727_kcdeqM3VDkVh9KbDhyvJGj2M48aZb08B.jpg",
    "https://media.istockphoto.com/id/1352938039/photo/home-office.jpg?s=612x612&w=0&k=20&c=8jhyn987gHKhLIGG6vySdDDc7ImUPJdS9MJOQFa6FLI=",
    "https://img.freepik.com/free-photo/front-view-woman-posing-her-office-laptop_23-2148908837.jpg",
    "https://media.istockphoto.com/id/1326171171/photo/mature-businessman-looking-at-job-search-website-on-a-laptop-computer.jpg?s=612x612&w=0&k=20&c=_aOnZyAqbJqudAum-gwsEhC5nWTo9D-pcW4lut-aNzI=",
  
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full relative mb-24"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <Card className="border-none w-full">
                <CardContent className="flex items-center justify-center p-4">
                  <div className="w-full relative">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-[20rem] md:h-[30rem] lg:h-[36rem] rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-blue-500 p-4 md:p-6 rounded-full shadow-lg text-white text-2xl md:text-4xl flex items-center justify-center z-10 focus:outline-none focus:ring-0">
        &#x2190;
      </CarouselPrevious>

      <CarouselNext className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-blue-500 p-4 md:p-6 rounded-full shadow-lg text-white text-2xl md:text-4xl flex items-center justify-center z-10 focus:outline-none focus:ring-0">
        &#x2192;
      </CarouselNext>
    </Carousel>
  )
}

export default Banner;
