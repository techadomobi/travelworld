import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, Filter, ChevronRight, Plane, Hotel, Utensils } from 'lucide-react';

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = [
    { id: 'all', name: 'All Destinations', count: 24 },
    { id: 'europe', name: 'Europe', count: 8 },
    { id: 'asia', name: 'Asia', count: 6 },
    { id: 'americas', name: 'Americas', count: 5 },
    { id: 'africa', name: 'Africa', count: 3 },
    { id: 'oceania', name: 'Oceania', count: 2 }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      country: 'France',
      region: 'europe',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      description: 'The City of Light, known for its art, fashion, and iconic landmarks like the Eiffel Tower.',
      price: '$1,200',
      rating: 4.8,
      activities: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
      bestTime: 'April - June',
      tags: ['Romantic', 'Cultural', 'City Break']
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      country: 'Indonesia',
      region: 'asia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
      description: 'Tropical paradise with stunning beaches, rice terraces, and vibrant culture.',
      price: '$1,800',
      rating: 4.9,
      activities: ['Beach Relaxation', 'Temple Visits', 'Surfing'],
      bestTime: 'April - September',
      tags: ['Beach', 'Relaxation', 'Adventure']
    },
    {
      id: 3,
      name: 'New York City, USA',
      country: 'USA',
      region: 'americas',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      description: 'The Big Apple, a bustling metropolis with endless attractions and world-class dining.',
      price: '$1,500',
      rating: 4.7,
      activities: ['Times Square', 'Central Park', 'Broadway Show'],
      bestTime: 'April - June',
      tags: ['City Break', 'Shopping', 'Entertainment']
    },
    {
      id: 4,
      name: 'Santorini, Greece',
      country: 'Greece',
      region: 'europe',
      image: 'https://images.unsplash.com/photo-1516570101029-46264d0750f5?w=800&h=600&fit=crop',
      description: 'Famous for its white-washed buildings and stunning sunsets over the Aegean Sea.',
      price: '$2,200',
      rating: 4.9,
      activities: ['Sunset Viewing', 'Beach Time', 'Wine Tasting'],
      bestTime: 'May - October',
      tags: ['Romantic', 'Honeymoon', 'Scenic']
    },
    {
      id: 5,
      name: 'Tokyo, Japan',
      country: 'Japan',
      region: 'asia',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      description: 'A fascinating blend of traditional culture and cutting-edge technology.',
      price: '$1,600',
      rating: 4.8,
      activities: ['Temple Visits', 'Shopping', 'Cuisine'],
      bestTime: 'March - April',
      tags: ['Cultural', 'Modern', 'Food']
    },
    {
      id: 6,
      name: 'Cape Town, South Africa',
      country: 'South Africa',
      region: 'africa',
      image: 'https://images.unsplash.com/photo-1524378736181-844e5f13c3d4?w=800&h=600&fit=crop',
      description: 'Stunning coastal city with Table Mountain and world-class vineyards.',
      price: '$2,000',
      rating: 4.7,
      activities: ['Table Mountain', 'Wine Tour', 'Beach'],
      bestTime: 'November - March',
      tags: ['Adventure', 'Nature', 'Wine']
    },
    {
      id: 7,
      name: 'Sydney, Australia',
      country: 'Australia',
      region: 'oceania',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop',
      description: 'Iconic harbor city with the famous Opera House and beautiful beaches.',
      price: '$2,500',
      rating: 4.8,
      activities: ['Opera House', 'Harbor Cruise', 'Bondi Beach'],
      bestTime: 'September - November',
      tags: ['City Break', 'Beach', 'Scenic']
    },
    {
      id: 8,
      name: 'Rome, Italy',
      country: 'Italy',
      region: 'europe',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c1427873df?w=800&h=600&fit=crop',
      description: 'Eternal City filled with ancient history, art, and incredible cuisine.',
      price: '$1,400',
      rating: 4.9,
      activities: ['Colosseum', 'Vatican', 'Food Tour'],
      bestTime: 'April - June',
      tags: ['Cultural', 'Historical', 'Food']
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const getRegionColor = (region: string) => {
    switch(region) {
      case 'europe': return 'from-blue-500 to-blue-600';
      case 'asia': return 'from-green-500 to-green-600';
      case 'americas': return 'from-red-500 to-red-600';
      case 'africa': return 'from-orange-500 to-orange-600';
      case 'oceania': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore breathtaking destinations around the world, from romantic getaways to thrilling adventures
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {regions.map(region => (
                      <option key={region.id} value={region.id}>
                        {region.name} ({region.count})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-semibold">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by Region:</span>
              <div className="flex gap-2">
                {regions.map(region => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedRegion === region.id
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {filteredDestinations.length} destinations found
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getRegionColor(destination.region)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {destination.country}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium">
                    <span className="text-yellow-500">★</span> {destination.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <span className="text-2xl font-bold text-amber-600">{destination.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Best: {destination.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>4.8/5 Rating</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {destination.activities.slice(0, 3).map(activity => (
                        <span key={activity} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {activity}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all destinations</p>
            </div>
          )}
        </div>
      </div>

      {/* Popular Regions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Regions
            </h2>
            <p className="text-lg text-gray-600">
              Discover the world's most beloved travel destinations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.slice(1).map(region => (
              <div key={region.id} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${getRegionColor(region.id)} p-8 rounded-2xl text-white h-48 flex items-end transition-transform duration-300 group-hover:scale-105`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                    <p className="text-white/90">{region.count} destinations</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel Tips & Advice
            </h2>
            <p className="text-lg text-gray-600">
              Make the most of your journey with our expert travel tips
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Time to Travel</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Research the best seasons for your destination to enjoy perfect weather and avoid crowds.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Spring and fall offer mild weather</li>
                <li>• Summer is peak season but crowded</li>
                <li>• Winter can be budget-friendly</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Hotel className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation Tips</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Choose the right place to stay based on your travel style and budget.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Book early for better rates</li>
                <li>• Consider location vs. price</li>
                <li>• Read recent reviews</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Cuisine</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience authentic flavors by trying local dishes and street food.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ask locals for recommendations</li>
                <li>• Try regional specialties</li>
                <li>• Be adventurous with food</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore the World?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our travel experts help you plan the perfect trip to any of these amazing destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Contact Our Experts
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold text-lg">
              View All Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}