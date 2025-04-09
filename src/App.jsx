import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DestinationList from './pages/DestinationList';
import DestinationDetails from './pages/DestinationDetails';
import NotFoundPage from './pages/NotFound';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HotelSearch from './pages/HotelSearch';
          
          const App = () => {
            return (
              <Router>
                <div className="flex flex-col min-h-screen">
                  {/* <Header /> */}
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/destinations" element={<DestinationList />} />
                      <Route path="/destination/:city" element={<DestinationDetails />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path='/hotel' element={<HotelSearch />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </Router>
            );
          };
          
    export default App;