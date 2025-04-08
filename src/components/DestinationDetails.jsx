// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function DestinationDetails({ destination, onBack, onAddToItinerary, token }) {
//   const [flights, setFlights] = useState([]);
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       if (!token) return;
//       setLoading(true);
//       try {
//         const flightResponse = await axios.get(
//           `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LON&destinationLocationCode=${destination.iataCode}&departureDate=2024-10-01&adults=1`,
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );
//         setFlights(flightResponse.data.data.slice(0, 3));

//         const hotelResponse = await axios.get(
//           `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${destination.iataCode}`,
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );
//         setHotels(hotelResponse.data.data.slice(0, 3));
//       } catch (err) {
//         console.error('Error fetching details:', err);
//       }
//       setLoading(false);
//     };

//     fetchDetails();
//   }, [destination, token]);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <button onClick={onBack} className="mb-4 text-blue-500">← Back</button>
//       <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
      
//       {loading ? (
//         <p>Loading details...</p>
//       ) : (
//         <>
//           <section className="mb-6">
//             <h3 className="text-xl font-semibold mb-2">Flight Offers</h3>
//             {flights.map((flight) => (
//               <div key={flight.id} className="mb-2 p-2 border rounded">
//                 <p>Price: {flight.price.total} {flight.price.currency}</p>
//                 <button
//                   onClick={() => onAddToItinerary(flight)}
//                   className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Add to Itinerary
//                 </button>
//               </div>
//             ))}
//           </section>

//           <section>
//             <h3 className="text-xl font-semibold mb-2">Hotels</h3>
//             {hotels.map((hotel) => (
//               <div key={hotel.hotel.hotelId} className="mb-2 p-2 border rounded">
//                 <p>{hotel.hotel.name}</p>
//                 <p>Price: {hotel.offers[0].price.total} {hotel.offers[0].price.currency}</p>
//                 <button
//                   onClick={() => onAddToItinerary(hotel)}
//                   className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Add to Itinerary
//                 </button>
//               </div>
//             ))}
//           </section>
//         </>
//       )}
//     </div>
//   );
// }

// export default DestinationDetails;



import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlaneDeparture, FaHotel, FaClock } from 'react-icons/fa';

function DestinationDetails({ destination, onBack, onAddToItinerary, token }) {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const flightResponse = await axios.get(
          `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LON&destinationLocationCode=${destination.iataCode}&departureDate=2024-10-01&adults=1`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setFlights(flightResponse.data.data.slice(0, 3));

        const hotelResponse = await axios.get(
          `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${destination.iataCode}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setHotels(hotelResponse.data.data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching details:', err);
      }
      setLoading(false);
    };

    fetchDetails();
  }, [destination, token]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline flex items-center gap-2">
        ← Back to Destinations
      </button>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{destination.name}</h2>
      
      {loading ? (
        <p className="text-gray-500">Loading details...</p>
      ) : (
        <>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaPlaneDeparture /> Flight Offers
            </h3>
            <div className="space-y-4">
              {flights.map((flight) => (
                <div key={flight.id} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://source.unsplash.com/100x100/?airplane" 
                    alt="Flight" 
                    className="w-20 h-20 rounded-md object-cover mr-4" 
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {flight.source} → {destination.iataCode}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <FaClock /> Duration: {flight.itineraries[0].duration.replace('PT', '').toLowerCase()}
                    </p>
                    <p className="text-green-600 font-medium">
                      {flight.price.total} {flight.price.currency}
                    </p>
                  </div>
                  <button
                    onClick={() => onAddToItinerary(flight)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Add to Itinerary
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaHotel /> Hotels
            </h3>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div key={hotel.hotel.hotelId} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={`https://source.unsplash.com/100x100/?hotel,${hotel.hotel.name}`} 
                    alt={hotel.hotel.name} 
                    className="w-20 h-20 rounded-md object-cover mr-4" 
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{hotel.hotel.name}</p>
                    <p className="text-sm text-gray-600">
                      Rating: {hotel.hotel.rating || 'N/A'} ★
                    </p>
                    <p className="text-green-600 font-medium">
                      {hotel.offers[0].price.total} {hotel.offers[0].price.currency}
                    </p>
                  </div>
                  <button
                    onClick={() => onAddToItinerary(hotel)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Add to Itinerary
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default DestinationDetails;