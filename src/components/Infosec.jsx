import React from 'react';
import { Car, Calendar, Tag, Headphones } from 'lucide-react';

const Infosec = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Well maintained vehicles",
      description: "All our cars are well-maintained and regularly serviced, ensuring safe and smooth driving."
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Easy online booking",
      description: "Book your car in minutes with our user-friendly online platform. Fast, simple, and convenient!"
    },
    {
      icon: <Tag className="w-8 h-8 text-purple-600" />,
      title: "Affordable pricing",
      description: "Enjoy competitive rates with no hidden fees. Rent the perfect car without breaking the bank."
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      title: "24/7 support",
      description: "We're here to assist you anytime, anywhere. Drive with peace of mind knowing help is just a call away."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Enjoy flexibility and unbeatable rates with our{' '}
            <span className="text-blue-600 relative">
              city car rentals
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full transform -rotate-1"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the freedom of the road with our premium car rental service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Car className="w-5 h-5 mr-2" />
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Infosec;