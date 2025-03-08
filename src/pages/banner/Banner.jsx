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

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full relative mt-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className=" relative">
              <Card>
                <CardContent className="flex items-center justify-center p-4">
                  <div className="w-full relative">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlXw8TJxN7vbSGWAD5BPP2Oh6sZEEvdLf_JWhejlNZvjLG6l8EX0yRF0UmyStDFXshA8&usqp=CAU${index + 1}`}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-[36rem] rounded-lg"
                    />
                 
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous Arrow */}
      <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-blue-500 p-6 rounded-full shadow-lg text-white text-4xl flex items-center justify-center z-10 focus:outline-none focus:ring-0">
        &#x2190;
      </CarouselPrevious>

      {/* Next Arrow */}
      <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-blue-500 p-6 rounded-full shadow-lg text-white text-4xl flex items-center justify-center z-10 focus:outline-none focus:ring-0">
        &#x2192;
      </CarouselNext>
    </Carousel>
  )
}

export default Banner;
