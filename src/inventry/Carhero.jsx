import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Share2, Calendar, Gauge, Fuel, Users, Star, Play } from 'lucide-react';

const CarHero = ({ car }) => {
  const defaultCar = {
    id: "1",
    name: "BMW M4 Competition",
    brand: "BMW",
    model: "M4",
    year: 2023,
    price: 45999,
    mileage: 12500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    seats: 4,
    image: "/placeholder.svg",
    description:
      "Experience the perfect blend of luxury and performance with this stunning BMW M4 Competition. Featuring a twin-turbo engine, premium interior, and cutting-edge technology.",
    features: [
      "Premium Sound System",
      "Leather Interior",
      "Navigation",
      "Backup Camera",
      "Heated Seats"
    ]
  };

  const carData = car || defaultCar;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left */}
          <div className="space-y-10 animate-fade-in">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-blue-400 border-blue-400/50 bg-blue-400/10 text-lg px-6 py-3 backdrop-blur-sm">
                {carData.brand}
              </Badge>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                ))}
                <span className="text-gray-300 ml-2">4.8 (127 reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text leading-tight">
                {carData.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">{carData.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  ${carData.price.toLocaleString()}
                </span>
                <span className="text-gray-400 text-xl line-through">${(carData.price + 5000).toLocaleString()}</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-400/50">Save $5,000</Badge>
              </div>
              <p className="text-gray-400">Starting MSRP • Financing available from $599/mo</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Stat icon={<Calendar />} label="Model Year" value={carData.year} />
              <Stat icon={<Gauge />} label="Miles" value={carData.mileage.toLocaleString()} />
              <Stat icon={<Fuel />} label="Fuel Type" value={carData.fuelType} />
              <Stat icon={<Users />} label="Seats" value={carData.seats} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25 group">
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

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Premium Features</h3>
              <div className="flex flex-wrap gap-3">
                {carData.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-200 hover:from-blue-600/30 hover:to-cyan-600/30 px-6 py-3 text-base border border-blue-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative group">
              <div className="relative h-[700px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-96 h-48 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-2xl border border-white/30 flex items-center justify-center mb-8 backdrop-blur-sm shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{carData.brand}</div>
                        <div className="text-2xl text-blue-200">{carData.model}</div>
                      </div>
                   </div>
                    <p className="text-2xl text-white/80 font-light">Premium Vehicle</p>
                    <p className="text-lg text-blue-200">High-Resolution Image</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8">
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-4 text-white border border-white/20">
                    <div className="text-sm text-gray-300">Special Offer</div>
                    <div className="font-bold text-xl text-green-400">0% APR Available</div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <Card className="bg-black/50 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-6 text-white">
                        <div className="text-center">
                          <div className="font-bold text-2xl text-blue-400">{carData.transmission}</div>
                          <div className="text-sm text-gray-300">Transmission</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-2xl text-cyan-400">503 HP</div>
                          <div className="text-sm text-gray-300">Engine Power</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, value, label }) => (
  <div className="group">
    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
      <CardContent className="p-6 text-center">
        <div className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-white font-bold text-2xl">{value}</div>
        <div className="text-gray-400 text-sm">{label}</div>
      </CardContent>
    </Card>
  </div>
);

export default CarHero;
