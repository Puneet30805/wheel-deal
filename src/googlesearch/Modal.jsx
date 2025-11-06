import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import citiesData from "../data/cities.json";

const Modal = ({ onClose }) => {
  const allCities = Object.values(citiesData?.tricities || {});
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredCities =
    searchTerm.length > 0
      ? allCities.filter((city) =>
          city.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const handleSelectCity = (city) => {
    setSearchTerm(city);
    setShowResults(false);
    // Optional: close the modal after selecting
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex justify-center items-center">
      <div className="relative bg-black rounded-xl shadow-xl w-[90%] max-w-md p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Select a City
        </h2>

        <Input
          type="text"
          placeholder="Search cities..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          className="w-full"
        />

        {showResults && (
          <ul className="mt-4 max-h-60 overflow-y-auto space-y-2">
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <li
                  key={`${city}-${index}`} // ensures uniqueness
                  onClick={() => handleSelectCity(city)}
                  className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="text-gray-500 text-center mt-2">
                No cities found
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
