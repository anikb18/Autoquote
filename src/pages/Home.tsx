import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Clock, DollarSign } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get the Best Price for Your Next Vehicle
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AutoQuote24 connects you with certified dealers competing to offer you the best price on your dream car.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/quote-request"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/how-it-works"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Car className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Access to thousands of vehicles from certified dealers nationwide.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Shield className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Secure Process</h3>
          <p className="text-gray-600">Your information is protected with bank-level security.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Clock className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
          <p className="text-gray-600">Receive competitive quotes within 24 hours.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
          <p className="text-gray-600">Dealers compete to offer you the most competitive prices.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold">Submit Request</h3>
            <p className="text-gray-600">Fill out our simple form with your vehicle preferences.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold">Receive Quotes</h3>
            <p className="text-gray-600">Dealers in our network submit their best offers.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold">Choose the Best Deal</h3>
            <p className="text-gray-600">Compare offers and select the one that works for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};