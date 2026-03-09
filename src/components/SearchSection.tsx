import { useState } from 'react';
import { Plane, Hotel, Map, Calendar, Users, Search } from 'lucide-react';

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState('tours');
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchData.destination.trim()) {
      alert(`Searching for ${activeTab} to ${searchData.destination}...`);
      // In a real app, this would redirect to search results
    } else {
      alert('Please enter a destination');
    }
  };

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

        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                placeholder="Where to?"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
              <div className="relative">
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
              <div className="relative">
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <div className="relative">
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5+ Adults</option>
                </select>
                <Users className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="mt-6 w-full bg-blue-900 text-white py-4 rounded-md font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Search {activeTab}
          </button>
        </form>
      </div>
    </section>
  );
}
