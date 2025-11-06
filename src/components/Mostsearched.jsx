import React from "react";
import Fakedata from "@/shared/Fakedata";
import Carlist from "./Carlist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Mostsearched() {
  return (
    <section className="py-20 px-4 md:px-6  text-black">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
          Most Searched Cars
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="max-w-7xl mx-auto">
            <CarouselContent>
              {Fakedata.carList.map((car, index) => (
                <CarouselItem
                  key={index}
                  className="basis-11/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                >
                  <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl overflow-hidden">
                    <Carlist car={car} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:text-white transition" />
            <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:text-white transition" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Mostsearched;
