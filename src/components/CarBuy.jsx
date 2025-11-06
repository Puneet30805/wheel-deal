import React from "react";
import carShop from "../data/carShop.json";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";



const CarBuy = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Cars</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {carShop.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={car.image || "/fallback.jpg"}
                alt={car.heading}
                className="w-full h-99 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.heading}</h3>
                <p className="text-gray-600 mt-1 text-sm">{car.description}</p>
                <Badge className="mt-2 inline-block bg-green-100 text-green-700 text-sm border border-green-300 rounded-full px-3 py-1">
                  {car.price}
                </Badge>

                <Link
                  to={`/car/${car.id}`}
                  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default CarBuy;
