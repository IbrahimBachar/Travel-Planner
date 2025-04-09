import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const HotelSearch = ({ accessToken }) => {
  const [cityCode, setCityCode] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotels = async () => {
    if (!cityCode || !checkInDate || !checkOutDate) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adults=1&max=10`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch hotels: ${errorData.error || response.statusText}`);
      }
      const data = await response.json();
      setHotels(data.data);
    } catch (err) {
      setError(err.message);
      console.error("Hotel fetch error:", err);
    }
    setLoading(false);
  };

  const handleBookHotel = async (offerId) => {
    try {
      const response = await fetch(
        "https://test.api.amadeus.com/v1/booking/hotel-bookings",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              offerId,
              guests: [
                {
                  name: { title: "MR", firstName: "Ibrahim", lastName: "Bachar" },
                  contact: { phone: "0790972453", email: "ibrahim@gmail.com" },
                },
              ],
              payments: [{ method: "CREDIT_CARD", card: { vendorCode: "VI", cardNumber: "4111111111111111", expiryDate: "2026-12" } }],
            },
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to book hotel");
      const data = await response.json();
      console.log("Hotel booked:", data);
      alert("Hotel booked successfully! Check console for details.");
    } catch (err) {
      console.error("Booking error:", err);
      alert("Failed to book hotel.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="City Code (e.g., PAR)"
          value={cityCode}
          onChange={(e) => setCityCode(e.target.value.toUpperCase())}
          className="px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
      </div>
      <button
        onClick={fetchHotels}
        className="!bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Search Hotels
      </button>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="mt-4 space-y-4">
          {hotels.map((hotel) => (
            <div key={hotel.hotel.hotelId} className="border p-4 rounded-md">
              <p>{hotel.hotel.name}</p>
              <p>Price: {hotel.offers[0].price.total} {hotel.offers[0].price.currency}</p>
              <button
                onClick={() => handleBookHotel(hotel.offers[0].id)}
                className="mt-2 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelSearch;