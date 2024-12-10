import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Car, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">How AutoQuote24 Works</h1>
        <p className="text-xl text-gray-600">
          Get the best price on your next vehicle in just a few simple steps
        </p>
      </div>

      <div className="space-y-12">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Submit Your Request</h3>
            <p className="text-gray-600 mb-4">
              Fill out our detailed vehicle specification form with your preferred make, model, year, and desired features.
              A one-time fee of $40 is required to process your request and ensure serious inquiries.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">What you'll need to provide:</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Vehicle make and model</li>
                <li>Preferred year range</li>
                <li>Desired trim level and options</li>
                <li>Your contact information</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Dealers Compete</h3>
            <p className="text-gray-600 mb-4">
              Your request is shared with our network of certified dealers who will compete to offer you the best price.
              Each dealer can see other bids, encouraging competitive pricing.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">What happens behind the scenes:</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dealers receive your detailed requirements</li>
                <li>Real-time bidding process begins</li>
                <li>Dealers can see competitive offers</li>
                <li>48-hour bidding window</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Compare and Choose</h3>
            <p className="text-gray-600 mb-4">
              Review all offers in your personal dashboard. Compare prices, dealer ratings, and additional perks.
              Take your time to select the best deal for you.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">What you'll see:</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Detailed price breakdowns</li>
                <li>Dealer ratings and reviews</li>
                <li>Available vehicle information</li>
                <li>Additional offers and incentives</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Finalize Your Purchase</h3>
            <p className="text-gray-600 mb-4">
              Once you've selected your preferred offer, we'll connect you directly with the dealer to complete your purchase.
              The dealer will honor the quoted price and help you finalize the paperwork.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link
          to="/quote-request"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Your Quote Request
        </Link>
      </div>
    </div>
  );
};