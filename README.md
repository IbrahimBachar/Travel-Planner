## Travel Planner 
A React-based web application built with Vite and styled with Tailwind CSS, designed to help users explore destinations and plan trips. Leveraging the Amadeus API, it provides destination information, with plans for flight and hotel booking integration. The app will be deployed on Vercel for public access.
### What I’ve Done
- **Setup**: Initialized a React project with Vite, configured Tailwind CSS for styling, and integrated React Router for navigation.

### Pages:
- **Landing Page**: Created a welcoming page with a search bar and featured destinations (e.g., Paris, Tokyo, New York) using hardcoded data.

- **Destination List**: Built a dynamic page fetching city data from the Amadeus API, with search and filter functionality (name, country).

- **Destination Details**: Developed a details page for individual cities, though it currently faces a 401 Unauthorized error due to token issues.

- **About Page**: Designed a static page with app info, a "How We Can Help" section, and contact details.

- **Contact Page**: Added a styled contact form with social media links and business info, using lucide-react icons.

### Components:
- **DestinationCard**: Reusable card for displaying destination info, with navigation to details.

- **LoadingSpinner**: Simple spinner for API loading states.

- **API Integration**: Connected to the Amadeus API for city data using client credentials (VITE_AMADEUS_API_KEY and VITE_AMADEUS_API_SECRET) stored in .env.

### Features in Progress:
Added flight and hotel search components (FlightSearch, HotelSearch) using Amadeus APIs, not yet fully integrated into the UI.

Attempted to fix a 401 Unauthorized error in DestinationDetails by passing an access token via navigation state, with a pending switch to AuthContext for global token management.

Deployment: Prepared the app for hosting on Vercel by building with npm run build, syncing with GitHub (IbrahimBachar/Travel-Planner), and resolving a non-fast-forward Git push error via git pull.

