import { FaMapMarkerAlt } from 'react-icons/fa';

function DestinationList({ destinations, onSelect }) {
  if (!destinations.length) {
    return <p className="text-gray-500 text-center py-8">No destinations found. Try a different search.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest) => (
        <div
          key={dest.name}
          onClick={() => onSelect(dest)}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <div className="h-48 bg-gray-200"> {/* Placeholder for image */}
            <img 
              src={`https://source.unsplash.com/400x300/?${dest.name}`} // Dynamic Unsplash image
              alt={dest.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> {dest.name}
            </h3>
            <p className="text-gray-600 mt-1">{dest.address.countryName}</p>
            <p className="text-sm text-gray-500 mt-2">
              IATA: {dest.iataCode || 'N/A'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationList;