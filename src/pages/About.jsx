import React from 'react';

const About = () => {

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://img.freepik.com/premium-photo/glad-excited-young-black-female-casual-with-backpack-suitcase-passport-tickets-going-vacation_116547-50406.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700">
            <strong>Travel Planner</strong> is your ultimate companion for exploring the world. We
            connect adventurers with breathtaking destinations, offering curated insights to plan
            your perfect trip—whether it’s a weekend getaway or a global journey.
          </p>
          <p className="text-lg text-gray-700">
            From iconic landmarks to hidden gems, we bring you the best of travel with real-time
            destination data and stunning visuals to inspire your next adventure.
          </p>
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-blue-400 to-teal-300 rounded-3xl py-12 text-white shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
          <p className="text-lg mb-6">
            Dreaming of your next destination? We simplify travel planning by showcasing top cities,
            attractions, and insider tips—all in one place. Discover, plan, and explore with ease!
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition">
            Start Exploring
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Are you a tourism board or destination promoter? Want to showcase your location on our
            platform? Let’s connect!
          </p>
          <div className="bg-gray-100 rounded-xl p-6 space-y-4 max-w-md shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-blue-500 text-2xl">📧</span>
              <span className="text-gray-800">support@travelplanner.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">📞</span>
              <span className="text-gray-800">+250 790 927 453</span>
            </div>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/top-view-passport-tickets-arrangement_23-2148786165.jpg?ga=GA1.1.69312387.1742631691&semt=ais_country_boost&w=740"
          alt="Contact Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default About;