import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 mt-20 py-12">
      <div className="flex flex-col max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h1 className="!text-2xl font-bold mb-4">
            Travel<span className="text-red-600">Planner</span>
          </h1>
          <p className="text-gray-300 mb-4">
            The easiest way to plan your flight.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/" className="text-blue-500"><Facebook /></a>
            <a href="https://www.twitter.com/" className="text-sky-400"><Twitter /></a>
            <a href="https://www.linkedin.com/" className="text-blue-300"><Linkedin /></a>
            <a href="https://www.instagram.com/" className="text-pink-400"><Instagram /></a>
            <a href="https://www.youtube.com/" className="text-red-500"><Youtube /></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Flight Booking</li>
            <li className="hover:text-white cursor-pointer">Hotel Booking</li>
            <li className="hover:text-white cursor-pointer">Tourist Places</li>
            
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-2">
            Email: <a href="mailto:support@carxchange.com" className="text-blue-400 hover:underline">support@travelplanner.com</a>
          </p>
          <p className="text-gray-300 mb-2">Phone: +250 790 927 453</p>
          <p className="text-gray-300">Address: KG 572 St, Kigali, Rwanda</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2025 travelplanner. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
