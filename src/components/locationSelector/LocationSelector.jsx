import { useNavigate } from 'react-router-dom';

export default function LocationSelector({ currentLocation }) {
  const navigate = useNavigate();

  const locations = ['all', 'chandigarh', 'mohali', 'panchkula'];

  return (
    <div className="flex gap-4 mb-6">
      {locations.map((loc) => (
        <button
          key={loc}
          onClick={() => navigate(`/cars/city/${loc}`)}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            currentLocation === loc
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {loc.charAt(0).toUpperCase() + loc.slice(1)}
        </button>
      ))}
    </div>
  );
}
