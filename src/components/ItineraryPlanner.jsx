import { FaSuitcase } from 'react-icons/fa';

function ItineraryPlanner({ itinerary }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        <FaSuitcase /> Your Itinerary
      </h2>
      {itinerary.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Add items to your itinerary</p>
      ) : (
        <ul className="space-y-3">
          {itinerary.map((item, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
              <span className="text-gray-800 font-medium">
                {item.name || `Flight ${index + 1}`}
              </span>
              {item.price && (
                <span className="ml-auto text-green-600 font-semibold">
                  {item.price.total || item.offers?.[0].price.total} {item.price.currency || item.offers?.[0].price.currency}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItineraryPlanner;