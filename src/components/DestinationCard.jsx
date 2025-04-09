import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const DestinationCard = ({ destination, accessToken }) => {
  const navigate = useNavigate();

  const dest = {
    name: destination?.name || destination?.cityName || "Unknown",
    country: destination?.country || "Unknown",
    image: destination?.image || "https://source.unsplash.com/300x200/?travel,destination",
    attractions: destination?.attractions || [],
  };

  if (!dest.name || dest.name === "Unknown") {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <p className="text-gray-600">Invalid destination data</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg shadow-md bg-white overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{dest.name}</h2>
        <p className="text-gray-600 flex items-center mt-1">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          {dest.country}
        </p>
        {dest.attractions.length > 0 && (
          <p className="text-gray-700 mt-2">
            <strong>Top Attractions:</strong>{" "}
            {dest.attractions.slice(0, 2).join(", ")}
          </p>
        )}
        <button
          className="mt-3 text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold transition"
          onClick={() => navigate(`/destination/${encodeURIComponent(dest.name)}`, { state: { accessToken } })}
        >
          Explore More →
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;