import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';

const LandingPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const featured = [
    { cityName: 'Paris', country: 'France', image: 'https://img.freepik.com/free-photo/eiffel-tower-champ-de-mars-paris-france_53876-94787.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Eiffel Tower', 'Louvre'] },
    { cityName: 'Tokyo', country: 'Japan', image: 'https://img.freepik.com/free-photo/senso-ji-ancient-buddhist-temple-asakusa-tokyo_326561-2.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Shibuya', 'Mount Fuji'] },
    { cityName: 'New York', country: 'USA', image: 'https://img.freepik.com/free-photo/statue-liberty-new-york_268835-778.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Statue of Liberty', 'Central Park'] },
    { cityName: 'Sydney', country: 'Australia', image: 'https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297182.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Sydney Opera House', 'Bondi Beach'] },
    { cityName: 'Cairo', country: 'Egypt', image: 'https://img.freepik.com/free-photo/typographic-optical-illusions-cairo_23-2150921915.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Pyramids of Giza', 'Nile River'] },
    { cityName: 'Rio de Janeiro', country: 'Brazil', image: 'https://img.freepik.com/free-photo/aerial-shot-copacabana-beach-rio-de-janeiro-brazil-crowded-with-people_181624-28621.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Christ the Redeemer', 'Copacabana Beach'] },
    { cityName: 'Rome', country: 'Italy', image: 'https://img.freepik.com/free-photo/giant-church_1163-947.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Colosseum', 'Vatican City'] },
    { cityName: 'London', country: 'UK', image: 'https://img.freepik.com/premium-photo/close-up-big-ben_63253-4424.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Big Ben', 'Tower Bridge'] },
    { cityName: 'Dubai', country: 'UAE', image: 'https://img.freepik.com/free-photo/futuristic-landscape-dubai_23-2151339782.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Burj Khalifa', 'Desert Safari'] },
    { cityName: 'Bangkok', country: 'Thailand', image: 'https://img.freepik.com/premium-photo/view-illuminated-building-night_1048944-2684103.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Grand Palace', 'Floating Markets'] },
    { cityName: 'Barcelona', country: 'Spain', image: 'https://img.freepik.com/free-photo/vertical-shot-arundel-castle-cathedral-surrounded-by-beautiful-foliage-daylight_181624-36623.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Sagrada Familia', 'Park Güell'] },
    { cityName: 'Kigali', country: 'Rwanda', image: 'https://img.freepik.com/premium-photo/horses-field_1048944-800998.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740', attractions: ['Akagera National Park']},
  ];

  const handleSearch = () => {
    if (query) navigate(`/destinations?query=${query}`);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 grid grid-cols-1 gap-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Plan Your Next Adventure</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations..."
          className="border p-2 rounded-l w-64"
        />
        <button onClick={handleSearch} className="!bg-blue-700 text-white p-2 rounded-r m-4">Search</button>
      </section>
     
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest) => (
            <DestinationCard key={dest.cityName} destination={dest} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;