import React, { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('car_4.jpg')"
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Hero Image */}
      

        {/* Main Content */}
        <div className={`transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Find Your Perfect
            <span className="block font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Drive
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            Discover exceptional vehicles crafted for those who appreciate quality, 
            performance, and timeless design.
          </p>
        </div>

        {/* Search Bar */}
      

        {/* Simple CTA */}
        <div className={`transform transition-all duration-1000 delay-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

<button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105">
            Browse Collection
          </button>

          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;