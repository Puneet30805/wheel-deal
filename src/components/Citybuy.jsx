import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../configs';
import { CarListing, CarImages } from '../../configs/schema';
import { eq, and, ilike, desc } from 'drizzle-orm';
import { MapPin, Car, AlertCircle, RefreshCw, Plus, Search } from 'lucide-react';
import Carlist from './Carlist';
import LocationSelector from './locationSelector/LocationSelector';

const formatCarResults = (rows) => {
  const groupedCars = {};
 
  rows.forEach((row) => {
    const car = row.carListing;
    const image = row.carImages;
 
    if (!car) return;
 
    if (!groupedCars[car.id]) {
      groupedCars[car.id] = {
        ...car,
        images: [],
      };
    }
 
    if (image?.imageUrl) {
      groupedCars[car.id].images.push(image.imageUrl);
    }
  });
 
  return Object.values(groupedCars);
};

// Loading skeleton component
const CarSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
);

export default function CityBuy() {
  const { city = 'all' } = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
 
  const allowedLocations = ['chandigarh', 'mohali', 'panchkula', 'all'];
 
  const isValidLocation = (loc) => {
    if (!loc || typeof loc !== 'string') return false;
    return allowedLocations.includes(loc.toLowerCase());
  };
 
  const getDisplayLocation = () => {
    if (city === 'all') return 'All Locations';
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  const getLocationIcon = () => {
    const locationData = {
      chandigarh: { emoji: '🏛️', color: 'text-blue-600' },
      mohali: { emoji: '🌆', color: 'text-green-600' },
      panchkula: { emoji: '🏘️', color: 'text-purple-600' },
      all: { emoji: '🗺️', color: 'text-gray-600' }
    };
    return locationData[city?.toLowerCase()] || locationData.all;
  };

  // Filter cars based on search term
  const filteredCars = searchTerm
  ? cars.filter(car =>
      car.make?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.year?.toString().includes(searchTerm) ||
      car.fuelType?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : cars;

  
 
  const loadCars = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const whereConditions = [];
 
      whereConditions.push(eq(CarListing.isActive, true));
 
      if (city && city.toLowerCase() !== 'all') {
        whereConditions.push(ilike(CarListing.location, `%${city}%`));
      }
 
      const results = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
        .where(and(...whereConditions))
        .orderBy(desc(CarListing.postedOn));
 
      console.log("Query results:", results);
      setCars(formatCarResults(results));
    } catch (err) {
      console.error("Database error:", err);
      setError("We couldn't load the car listings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
    if (!isValidLocation(city)) {
      navigate('/cars/city/all', { replace: true });
      return;
    }
 
    loadCars();
  }, [city]);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded-lg w-1/3 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>
          
          {/* Cars Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <CarSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
              <AlertCircle className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white">Oops! Something went wrong</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={loadCars}
                className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{getLocationIcon().emoji}</span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Available Cars in{' '}
                  <span className={`${getLocationIcon().color} relative`}>
                    {getDisplayLocation()}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full transform -rotate-1"></div>
                  </span>
                </h1>
              </div>
              <p className="text-lg text-gray-600">
                Find your perfect ride from our premium collection
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by make, model, year..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div className="mb-8">
          <LocationSelector currentLocation={city} />
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Car className="w-4 h-4" />
            <span>
              {searchTerm 
                ? `${filteredCars.length} cars found for "${searchTerm}"` 
                : `${cars.length} cars available`
              }
            </span>
          </div>
        </div>

        {/* Cars Grid or Empty State */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredCars.map(car => (
              <div key={car.id} className="transform hover:-translate-y-1 transition-all duration-300">
                <Carlist car={car} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              {searchTerm ? (
                <>
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    No cars match your search
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse all available cars.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Clear Search
                  </button>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    No cars available in {getDisplayLocation()}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Be the first to list your car in this location and connect with potential buyers.
                  </p>
                  <button
                    onClick={() => navigate('/add-listing')}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    List Your Car
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Stats Footer */}
        {filteredCars.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">{filteredCars.length}</div>
                <div className="text-sm text-gray-600">Cars Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {new Set(filteredCars.map(car => car.make)).size}
                </div>
                <div className="text-sm text-gray-600">Different Brands</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {allowedLocations.length - 1}
                </div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}