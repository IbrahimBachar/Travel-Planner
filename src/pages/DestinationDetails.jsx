import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const DestinationDetails = () => {
  const { city } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${city}&max=1`,
          { headers: { Authorization: 'Bearer YOUR_AMADEUS_API_KEY' } }
        );
        const data = await response.json();
        const dest = data.data[0];
        setDetails({
          cityName: dest.name,
          country: dest.address.countryCode,
          image: `https://source.unsplash.com/600x400/?${dest.name}`,
          attractions: ['Placeholder Attraction 1', 'Placeholder Attraction 2'], // Use POI API later
        });
      } catch (error) {
        console.error('Error fetching details:', error);
      }
      setLoading(false);
    };
    fetchDetails();
  }, [city]);

  if (loading) return <LoadingSpinner />;
  if (!details) return <p>Destination not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{details.cityName}, {details.country}</h1>
      <img src={details.image} alt={details.cityName} className="w-full h-96 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">Top Attractions</h2>
      <ul className="list-disc pl-5">
        {details.attractions.map((attr, idx) => (
          <li key={idx}>{attr}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationDetails;