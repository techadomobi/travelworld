import { useState } from 'react';
import { Camera, MapPin, Calendar, Heart, Share2, Search, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'beach', name: 'Beach Destinations', count: 6 },
    { id: 'mountain', name: 'Mountain Views', count: 5 },
    { id: 'city', name: 'Cityscapes', count: 5 },
    { id: 'culture', name: 'Cultural Experiences', count: 4 },
    { id: 'food', name: 'Food & Cuisine', count: 4 }
  ];

  const photos = [
    {
      id: 1,
      title: 'Sunset at Santorini',
      category: 'beach',
      location: 'Santorini, Greece',
      date: 'March 2024',
      image: 'https://images.unsplash.com/photo-1516570101029-46264d0750f5?w=800&h=600&fit=crop',
      description: 'Breathtaking sunset over the white-washed buildings of Oia',
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: 'Eiffel Tower at Night',
      category: 'city',
      location: 'Paris, France',
      date: 'February 2024',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      description: 'The iconic Eiffel Tower illuminated against the Parisian sky',
      likes: 234,
      featured: false
    },
    {
      id: 3,
      title: 'Bali Rice Terraces',
      category: 'culture',
      location: 'Ubud, Bali',
      date: 'January 2024',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
      description: 'Lush green rice terraces creating stunning natural patterns',
      likes: 189,
      featured: true
    },
    {
      id: 4,
      title: 'Swiss Alps Panorama',
      category: 'mountain',
      location: 'Zermatt, Switzerland',
      date: 'December 2023',
      image: 'https://images.unsplash.com/photo-1563492665922-0254dbd6b467?w=800&h=600&fit=crop',
      description: 'Majestic snow-capped peaks of the Swiss Alps',
      likes: 203,
      featured: false
    },
    {
      id: 5,
      title: 'Tokyo Street Food',
      category: 'food',
      location: 'Tokyo, Japan',
      date: 'November 2023',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
      description: 'Vibrant street food scene in the heart of Tokyo',
      likes: 145,
      featured: false
    },
    {
      id: 6,
      title: 'Maasai Mara Safari',
      category: 'culture',
      location: 'Maasai Mara, Kenya',
      date: 'October 2023',
      image: 'https://images.unsplash.com/photo-1524378736181-844e5f13c3d4?w=800&h=600&fit=crop',
      description: 'Traditional Maasai warriors during a cultural visit',
      likes: 178,
      featured: true
    },
    {
      id: 7,
      title: 'Sydney Opera House',
      category: 'city',
      location: 'Sydney, Australia',
      date: 'September 2023',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop',
      description: 'The iconic sails of the Sydney Opera House at golden hour',
      likes: 192,
      featured: false
    },
    {
      id: 8,
      title: 'Maldives Overwater Villa',
      category: 'beach',
      location: 'Maldives',
      date: 'August 2023',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      description: 'Crystal clear waters and luxurious overwater accommodations',
      likes: 267,
      featured: true
    },
    {
      id: 9,
      title: 'New York City Skyline',
      category: 'city',
      location: 'New York, USA',
      date: 'July 2023',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      description: 'The stunning Manhattan skyline from across the Hudson River',
      likes: 215,
      featured: false
    },
    {
      id: 10,
      title: 'Italian Pasta Making',
      category: 'food',
      location: 'Rome, Italy',
      date: 'June 2023',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c1427873df?w=800&h=600&fit=crop',
      description: 'Traditional Italian cooking class in the heart of Rome',
      likes: 134,
      featured: false
    },
    {
      id: 11,
      title: 'Northern Lights',
      category: 'mountain',
      location: 'Reykjavik, Iceland',
      date: 'May 2023',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop',
      description: 'Aurora Borealis dancing across the Icelandic sky',
      likes: 342,
      featured: true
    },
    {
      id: 12,
      title: 'Thai Market Scene',
      category: 'food',
      location: 'Bangkok, Thailand',
      date: 'April 2023',
      image: 'https://images.unsplash.com/photo-1533577076258-2b46260dc52d?w=800&h=600&fit=crop',
      description: 'Vibrant colors and aromas of a traditional Thai market',
      likes: 167,
      featured: false
    },
    {
      id: 13,
      title: 'Venice Canals',
      category: 'city',
      location: 'Venice, Italy',
      date: 'March 2023',
      image: 'https://images.unsplash.com/photo-1505228397929-b1f31053a95c?w=800&h=600&fit=crop',
      description: 'Romantic gondola ride through the historic canals of Venice',
      likes: 188,
      featured: false
    },
    {
      id: 14,
      title: 'Hawaiian Beach',
      category: 'beach',
      location: 'Maui, Hawaii',
      date: 'February 2023',
      image: 'https://images.unsplash.com/photo-1503269751819-b43627222535?w=800&h=600&fit=crop',
      description: 'Pristine white sand and turquoise waters of Maui',
      likes: 223,
      featured: true
    },
    {
      id: 15,
      title: 'Japanese Cherry Blossoms',
      category: 'culture',
      location: 'Kyoto, Japan',
      date: 'April 2023',
      image: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?w=800&h=600&fit=crop',
      description: 'Sakura season in Kyoto with traditional architecture',
      likes: 199,
      featured: false
    },
    {
      id: 16,
      title: 'Dubai Desert',
      category: 'mountain',
      location: 'Dubai, UAE',
      date: 'January 2023',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop',
      description: 'Golden sand dunes stretching to the horizon',
      likes: 156,
      featured: false
    }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPhotos = photos.filter(photo => photo.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Capturing the beauty of our world through the lens of our travelers' experiences
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Photos */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Photos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPhotos.map((photo) => (
              <div key={photo.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">{photo.title}</h3>
                    <p className="text-sm text-gray-200">{photo.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-6 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Categories:</span>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            {filteredPhotos.length} photos found
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {photo.category.toUpperCase()}
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium">
                      <span className="text-yellow-500">★</span> {photo.likes}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{photo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{photo.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1 relative overflow-hidden rounded-lg">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {photo.category.toUpperCase()}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                            {photo.title}
                          </h3>
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{photo.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{photo.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {photo.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium">
                            <span className="text-yellow-500">★</span> {photo.likes}
                          </div>
                          <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                            View Details
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                            <Heart className="w-4 h-4" />
                            <span>Like</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Camera className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all photos</p>
            </div>
          )}
        </div>
      </div>

      {/* Photo Submission */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Travel Photos</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have amazing travel photos from your adventures? We'd love to feature them in our gallery!
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capture</h3>
                <p className="text-sm text-gray-600">Take stunning photos during your travels</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share</h3>
                <p className="text-sm text-gray-600">Submit your photos through our portal</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Inspire</h3>
                <p className="text-sm text-gray-600">Inspire others to explore the world</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-amber-600 transition-all duration-300 font-semibold">
                Submit Your Photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Travel Memories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Browse our gallery for inspiration, then let our travel experts help you plan the perfect trip to capture your own amazing moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Browse Destinations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}