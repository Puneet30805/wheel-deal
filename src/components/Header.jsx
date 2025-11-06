import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Car, MapPin, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import CarCombobox from "./Carsearch";

const SignInButton = ({ mode, children }) => <div>{children}</div>;

const useUser = () => ({ user: { name: "John" }, isSignedIn: true });

function Header() {
  const { user, isSignedIn } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cities = [
    { name: "Chandigarh", path: "/cars/city/chandigarh" },
    { name: "Mohali", path: "/cars/city/mohali" },
    { name: "Panchkula", path: "/cars/city/panchkula" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
         
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/home")}
              className="group flex items-center space-x-3"
            >
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/66edec51647acd90172d2445/66f1892f914c8e371c1952cd_logo-web-icon-cartech-x-webflow-template.svg"
                  alt="Wheel Deal"
                  className="h-8 w-auto lg:h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="hidden sm:block text-white font-bold text-xl lg:text-2xl tracking-tight">
                Wheel Deal
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Search Bar */}
            <CarCombobox />

            {/* Buy Car Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-200 group"
              >
                <Car size={18} />
                <span className="font-medium">Buy Car</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                  {cities.map((city, index) => (
                    <button
                      key={city.name}
                      onClick={() => {
                        navigate(city.path);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <MapPin size={16} />
                      <span>{city.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sell Car */}
            <button
              onClick={() => navigate("/listing")}
              className="text-white hover:text-blue-400 font-medium transition-colors duration-200 relative group"
            >
              Sell Car
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* Auth Section */}
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <UserButton />
                <span className="text-gray-300 text-sm">Welcome back!</span>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Submit Listing
                </button>
              </SignInButton>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-3">
                <Search size={18} className="text-gray-300 mr-3" />
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
                />
              </div>

              {/* Mobile City Links */}
              <div className="space-y-3">
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  Cities
                </div>
                {cities.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => {
                      navigate(city.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-white hover:text-blue-400 py-2 transition-colors duration-200 w-full text-left"
                  >
                    <MapPin size={18} />
                    <span>{city.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate("/add-listing")}
                className="flex items-center space-x-3 text-white hover:text-blue-400 py-2 transition-colors duration-200"
              >
                <Car size={18} />
                <span>Sell Car</span>
              </button>

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-white/10">
                {isSignedIn ? (
                  <div className="flex items-center space-x-3">
                    <UserButton />
                    <span className="text-gray-300">Welcome back!</span>
                  </div>
                ) : (
                  <SignInButton mode="modal">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Submit Listing
                    </button>
                  </SignInButton>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
