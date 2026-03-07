import { useState } from 'react';
import { Plane, Hotel, Map, Calendar, Users } from 'lucide-react';

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState('tours');

  return (
    <section className="bg-white -mt-20 relative z-20 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('tours')}
            className={`flex items-center gap-2 pb-4 px-4 font-semibold transition ${
              activeTab === 'tours'
                ? 'text-blue-900 border-b-2 border-blue-900'
                : 'text-gray-500 hover:text-blue-900'
            }`}
          >
            <Map className="w-5 h-5" />
            Tours
          </button>
          <button
            onClick={() => setActiveTab('flights')}
            className={`flex items-center gap-2 pb-4 px-4 font-semibold transition ${
              activeTab === 'flights'
                ? 'text-blue-900 border-b-2 border-blue-900'
                : 'text-gray-500 hover:text-blue-900'
            }`}
          >
            <Plane className="w-5 h-5" />
            Flights
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center gap-2 pb-4 px-4 font-semibold transition ${
              activeTab === 'hotels'
                ? 'text-blue-900 border-b-2 border-blue-900'
                : 'text-gray-500 hover:text-blue-900'
            }`}
          >
            <Hotel className="w-5 h-5" />
            Hotels
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <div className="relative">
              <input
                type="text"
                placeholder="2 Adults"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Users className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-900 text-white py-4 rounded-md font-semibold hover:bg-blue-800 transition">
          Search
        </button>
      </div>
    </section>
  );
}
