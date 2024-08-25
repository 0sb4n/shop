

import React from "react";

const Home= () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-2xl font-bold">
                MotorWindingShop
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">
            Expert Motor Winding Services
          </h1>
          <p className="mt-4 text-xl">
            Reliable repairs and winding solutions for all your motors, large and small.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-600"
          >
            Explore Our Services
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            With decades of experience, our motor winding shop specializes in rewinding and repairing a wide range of motors, from household appliances to industrial machines. We are committed to delivering quality and efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Our Services
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Motor Rewinding</h3>
              <p className="mt-4 text-gray-600">
                Expert rewinding services for all types of motors, ensuring peak performance and extended life.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Industrial Motor Repair</h3>
              <p className="mt-4 text-gray-600">
                Comprehensive repair services for industrial motors, including diagnostics, parts replacement, and maintenance.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Home Appliance Motor Repair</h3>
              <p className="mt-4 text-gray-600">
                Fast and reliable repairs for motors in home appliances such as mixers, irons, and washing machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Have a motor that needs servicing? Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-white text-indigo-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 MotorWindingShop. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
