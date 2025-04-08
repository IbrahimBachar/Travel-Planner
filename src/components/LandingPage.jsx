// import { useState } from 'react';
// import { FaSearch, FaPlane } from 'react-icons/fa';
// import SearchBar from './SearchBar';
// import backgroundImage from '../assets/air-plane-background.jpg'; // Add an airplane image to src/assets

// function LandingPage({ onSearch, token }) {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
//         <div className="text-center text-white p-8 max-w-2xl">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
//             <FaPlane /> Explore the World
//           </h1>
//           <p className="text-lg md:text-xl mb-6">
//             Find your perfect flight and plan your dream vacation with ease.
//           </p>
          
//           {!showSearch ? (
//             <button
//               onClick={() => setShowSearch(true)}
//               className="bg-blue-600 hover:bg-blue-700 text-blue-700 px-6 py-3 rounded-full flex items-center gap-2 mx-auto transition-colors"
//             >
//               <FaSearch /> Start Planning
//             </button>
//           ) : (
//             <div className="bg-white p-4 rounded-lg shadow-lg">
//               <SearchBar onSearch={onSearch} token={token} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import { useState } from 'react';
import { FaSearch, FaPlane } from 'react-icons/fa';
import SearchBar from './SearchBar';
import backgroundImage from '../assets/air-plane-background.jpg';

function LandingPage({ onSearch, token }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative w-screen h-[100vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex items-center justify-center h-full w-full p-4 sm:p-8">
        <div className="text-center text-white p-6 sm:p-10 md:p-12 bg-black/40 rounded-2xl shadow-xl max-w-3xl w-full transition-all duration-500">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3 drop-shadow-lg">
            <FaPlane className="text-blue-400" /> Explore the World
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Find your perfect flight and plan your dream vacation with ease.
          </p>

          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="bg-blue-600 hover:bg-blue-700 text-blue-700 px-6 py-3 rounded-full flex items-center gap-3 mx-auto transition-transform transform hover:scale-105 shadow-md"
            >
              <FaSearch /> Start Planning
            </button>
          ) : (
            <div className="bg-white/90 p-6 rounded-xl shadow-lg animate-fade-in">
              <SearchBar onSearch={onSearch} token={token} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
