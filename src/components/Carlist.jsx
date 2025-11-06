import React, { useState } from "react";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiCalendarAlt } from "react-icons/bi";
import { FaCar, FaShieldAlt } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";

// Mock Link component for demonstration
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

function Carlist({ car }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Mock data for demonstration
  const mockCar = {
    listingTitle: "BMW X5 M Sport",
    sellingPrice: "45,50,000",
    mileage: "12 kmpl",
    fuelType: "Petrol",
    transmission: "Automatic",
    images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop"],
    year: "2022",
    kmDriven: "15,000 km",
    location: "Chandigarh",
    ownerType: "First Owner",
    isVerified: true,
    condition: "Excellent",
    ...car
  };

  const carSpecs = [
    { icon: LuFuel, label: "Mileage", value: mockCar.mileage },
    { icon: TbBrandSpeedtest, label: "Fuel", value: mockCar.fuelType },
    { icon: GiGearStickPattern, label: "Transmission", value: mockCar.transmission },
    { icon: BsSpeedometer2, label: "Driven", value: mockCar.kmDriven }
  ];

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
            New
          </span>
          {mockCar.isVerified && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center">
              <FaShieldAlt className="mr-1" size={10} />
              Verified
            </span>
          )}
        </div>
        
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
        >
          {isFavorite ? (
            <MdFavorite className="text-red-500 text-lg" />
          ) : (
            <MdFavoriteBorder className="text-gray-600 text-lg" />
          )}
        </button>

        <div className="relative h-56 bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
              <FaCar className="text-gray-400 text-4xl" />
            </div>
          )}
          <img
            src={mockCar.images?.[0] || "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop"}
            alt={mockCar.listingTitle}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {mockCar.listingTitle}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <BiCalendarAlt className="mr-1" />
              <span>{mockCar.year}</span>
              <span className="mx-2">•</span>
              <span>{mockCar.ownerType}</span>
            </div>
            <div className="flex items-center">
              <IoLocationOutline className="mr-1" />
              <span>{mockCar.location}</span>
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {carSpecs.map((spec, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group/spec"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3 group-hover/spec:bg-blue-100 transition-colors duration-300">
                <spec.icon className="text-gray-600 group-hover/spec:text-blue-600 transition-colors duration-300" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{spec.label}</p>
                <p className="text-sm font-semibold text-gray-900">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Condition Badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            mockCar.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
            mockCar.condition === 'Good' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            Condition: {mockCar.condition}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Starting from</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{mockCar.sellingPrice}
              <span className="text-sm font-normal text-gray-500 ml-1">onwards</span>
            </p>
          </div>
          
          <Link 
            to={`/car-detail/${mockCar.id || '1'}`}
            className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-2">View Details</span>
            <MdOutlineOpenInNew className="group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
}

export default Carlist;