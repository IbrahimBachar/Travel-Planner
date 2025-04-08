import { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import DestinationList from './components/DestinationList';
import DestinationDetails from './components/DestinationDetails';
import ItineraryPlanner from './components/ItineraryPlanner';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [token, setToken] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await axios.post(
          'https://test.api.amadeus.com/v1/security/oauth2/token',
          `grant_type=client_credentials&client_id=${import.meta.env.VITE_AMADEUS_API_KEY}&client_secret=${import.meta.env.VITE_AMADEUS_API_SECRET}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
        setToken(response.data.access_token);
      } catch (err) {
        console.error('Failed to get token:', err);
      }
    };
    getToken();
  }, []);

  const handleSearch = (results) => {
    setSearchResults(results);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen">
      {!showResults ? (
        <LandingPage onSearch={handleSearch} token={token} />
      ) : (
        <>
          <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
            <h1 className="text-2xl font-bold">Travel Planner</h1>
          </header>
          
          <main className="container mx-auto p-4">
            <button 
              onClick={() => setShowResults(false)}
              className="mb-4 text-blue-600 hover:underline"
            >
              ← Back to Search
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                {selectedDestination ? (
                  <DestinationDetails 
                    destination={selectedDestination}
                    onBack={() => setSelectedDestination(null)}
                    onAddToItinerary={(item) => setItinerary([...itinerary, item])}
                    token={token}
                  />
                ) : (
                  <DestinationList 
                    destinations={searchResults}
                    onSelect={setSelectedDestination}
                  />
                )}
              </div>
              
              <div>
                <ItineraryPlanner itinerary={itinerary} />
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;