import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function SearchBar({ onSearch, token }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query || !token) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${query}&subType=CITY`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      onSearch(response.data.data);
    } catch (err) {
      setError('Failed to fetch destinations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 p-2 text-blue-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !token}
          className="bg-blue-600 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2 transition-colors"
        >
          {loading ? 'Searching...' : <><FaSearch /> Search</>}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default SearchBar;