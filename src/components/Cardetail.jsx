import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carsData from "../data/cars.json";
import Header from "./Header";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Calendar, Fuel, Gauge, Users, Play ,Heart,Share2} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Stat from "./ui/stat";
import { Separator } from "./ui/separator";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Find car by id (assuming id is unique and matches a car's id)
    const foundCar = carsData.find((c) => c.id.toString() === id);
    setCar(foundCar);
  }, [id]);

  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <>
      
      <div className=" relative min-h-screen bg-black mt-18">
        <Header />
        <div className="relative z-10 container mx-auto px-6 py-12 grid grid-cols-2 gap-15">
          <div className="space-y-10">
            {/* left side  */}

            <div className="flex gap-5 mb-5">
              <Badge
                variant="outline"
                className="text-blue-400 border-blue-400/50 bg-blue-400/10 text-lg px-6 py-3 backdrop-blur-sm"
              >
                {car.make}
              </Badge>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                ))}
                <span className="text-gray-300 ml-2">4.8 (127 reviews)</span>
              </div>
            </div>

            <div className="space-y-6 mb-3">
              <h1 className="text-6xl md:text-8xl font-bold text-white">{car.model}</h1>
              <p className="text-xl  font-medium max-w-2xl text-white">
                {car.description}
              </p>
            </div>
<Separator className='bg-blue-400'/>
            <div >
              <div >
                <span className="text-5xl mr-6 md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  ">
                  ${car.price.toLocaleString()}
                </span>
                <Badge className="bg-green-500/20 text-green-400 border-green-400/50 mb-4">
                  Save $5,000
                </Badge>
              </div>
              

              <p className="text-gray-400">
                Starting MSRP • Financing available from $599/mo
              </p>
            </div>
          
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
              <Stat icon={<Calendar />} label="Model Year" value={car.year} />
              <Stat
                icon={<Gauge />}
                label="Miles"
                value={car.mileage.toLocaleString()}
              />
              <Stat icon={<Fuel />} label="Fuel Type" value={car.fuelType} />
              <Stat icon={<Users />} label="Seats" value={car.seats} />
            </div>
           <Separator className='bg-blue-400'/>
            <div className="mb-8 flex gap-4">
              <Button className=" bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25 group">
                <Play className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                Schedule Test Drive
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white p-6 group">
                  <Heart className="h-6 w-6 group-hover:scale-110 group-hover:text-red-400 transition-all" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white p-6 group">
                  <Share2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
            <Separator className='bg-blue-400'/>
            <div className="flex flex-col "> 
              <h1 className="text-4xl text-white mb-5 ">Premium Features</h1>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-200 hover:from-blue-600/30 hover:to-cyan-600/30 px-6 py-3 text-base border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="shadow-2xl rounded-xl p-4 bg-black/10 mt-35 ">
            <div className="p-4 grid items-center inline-grid">
              <div className="absolute top-50 right-8 ">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-4 text-white border border-white/20">
                  <div className="text-sm text-gray-300">Special Offer</div>
                  <div className="font-bold text-xl text-green-400">
                    0% APR Available
                  </div>
                </div>
              </div>

              <div className="mb-10   ">
                <img
                  src={car.image}
                  width={500}
                  height={500}
                  alt=""
                  
                />
              </div>
              <Card className="bg-black/50 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 text-white">
                    <div className="text-center">
                      <div className="font-bold text-2xl text-blue-400">
                        {car.transmission}
                      </div>
                      <div className="text-sm text-gray-300">Transmission</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-2xl text-cyan-400">
                        503 HP
                      </div>
                      <div className="text-sm text-gray-300">Engine Power</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center hover:scale-105 transition-all  mt-5">
              <Button
                variant="outline"
                className=" bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-200 hover:from-blue-600/30 hover:to-cyan-600/30 px-6 py-3 text-base border backdrop-blur-sm transition-all duration-300 hover:scale-105 text-xl p-6"
              >
                Buy Your Dream{" "}
              </Button>
            </div>
          </div>
        </div>
        
      </div>
     
    </>
  );
};

export default CarDetail;  