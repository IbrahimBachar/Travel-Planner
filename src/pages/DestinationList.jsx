import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import LoadingSpinner from "../components/LoadingSpinner";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [attractionsFilter, setAttractionsFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: import.meta.env.VITE_AMADEUS_API_KEY,
            client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch access token: ${errorData.error_description || response.statusText}`);
        }
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching access token:", err);
      }
      setLoading(false);
    };
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchDestinations = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = searchQuery || "city";
        const url = `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${encodeURIComponent(query)}&max=50`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch destinations: ${errorData.error || response.statusText}`);
        }
        const data = await response.json();

        const mappedData = (data.data || [])
          .filter((item) => item.name && item.address?.countryCode)
          .map((item) => ({
            name: item.name,
            country: item.address.countryCode,
            image: `https://source.unsplash.com/300x200/?${item.name},travel`,
            attractions: [],
          }));

        console.log("Fetched destinations:", mappedData);
        setDestinations(mappedData);
        setFilteredDestinations(mappedData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching destinations:", err);
      }
      setLoading(false);
    };
    fetchDestinations();
  }, [accessToken, searchQuery]);

  useEffect(() => {
    const filtered = destinations.filter((dest) => {
      const matchesCountry = countryFilter
        ? dest.country.toLowerCase().includes(countryFilter.toLowerCase())
        : true;
      const matchesAttractions = attractionsFilter
        ? dest.attractions.some((attr) =>
            attr.toLowerCase().includes(attractionsFilter.toLowerCase())
          )
        : true;

      return matchesCountry && matchesAttractions;
    });
    setFilteredDestinations(filtered);
  }, [countryFilter, attractionsFilter, destinations]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Destinations</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing places around the world to plan your next adventure.
        </p>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search by destination name (e.g., Paris)"
            className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by country (e.g., FR, US)"
            className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by attractions"
            className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={attractionsFilter}
            onChange={(e) => setAttractionsFilter(e.target.value)}
          />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : filteredDestinations.length === 0 ? (
          <p className="text-gray-600 text-center">
            No destinations found matching your criteria. Try adjusting your filters!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest, index) => (
              <DestinationCard key={`${dest.name}-${index}`} destination={dest} accessToken={accessToken} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationList;