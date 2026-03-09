import { useState } from 'react';
import { Calendar, Users, Star, Tag, DollarSign, Clock, MapPin, Heart, Filter, ChevronRight } from 'lucide-react';

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');

  const categories = [
    { id: 'all', name: 'All Packages', count: 12 },
    { id: 'romantic', name: 'Romantic Getaways', count: 3 },
    { id: 'family', name: 'Family Vacations', count: 4 },
    { id: 'adventure', name: 'Adventure Tours', count: 3 },
    { id: 'luxury', name: 'Luxury Escapes', count: 2 }
  ];

  const packages = [
    {
      id: 1,
      title: 'Paris Romance Package',
      category: 'romantic',
      destination: 'Paris, France',
      duration: '5 Days / 4 Nights',
      price: 1200,
      originalPrice: 1500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      highlights: ['Eiffel Tower Dinner', 'Seine River Cruise', 'Louvre Tour'],
      inclusions: ['4-star hotel', 'Daily breakfast', 'Private tours', 'Airport transfers'],
      bestFor: ['Couples', 'Honeymooners', 'Anniversary'],
      tag: 'Best Seller'
    },
    {
      id: 2,
      title: 'Bali Family Adventure',
      category: 'family',
      destination: 'Bali, Indonesia',
      duration: '7 Days / 6 Nights',
      price: 2500,
      originalPrice: 3200,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
      highlights: ['Beach activities', 'Cultural tours', 'Water sports'],
      inclusions: ['Family resort', 'All meals', 'Kids club', 'Guided tours'],
      bestFor: ['Families', 'Kids', 'Multi-generational'],
      tag: 'Family Favorite'
    },
    {
      id: 3,
      title: 'Swiss Alps Adventure',
      category: 'adventure',
      destination: 'Zermatt, Switzerland',
      duration: '6 Days / 5 Nights',
      price: 1800,
      originalPrice: 2200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1563492665922-0254dbd6b467?w=800&h=600&fit=crop',
      highlights: ['Mountain hiking', 'Skiing', 'Scenic train rides'],
      inclusions: ['Mountain hotel', 'Equipment rental', 'Guided tours', 'Meals'],
      bestFor: ['Adventure seekers', 'Nature lovers', 'Active travelers'],
      tag: 'Adventure'
    },
    {
      id: 4,
      title: 'Maldives Luxury Escape',
      category: 'luxury',
      destination: 'Maldives',
      duration: '4 Days / 3 Nights',
      price: 3500,
      originalPrice: 4500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      highlights: ['Overwater villa', 'Private beach', 'Spa treatments'],
      inclusions: ['5-star resort', 'All-inclusive meals', 'Water sports', 'Transfers'],
      bestFor: ['Luxury travelers', 'Couples', 'Honeymooners'],
      tag: 'Luxury'
    },
    {
      id: 5,
      title: 'Rome Cultural Tour',
      category: 'family',
      destination: 'Rome, Italy',
      duration: '4 Days / 3 Nights',
      price: 900,
      originalPrice: 1100,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1516245834210-c4c1427873df?w=800&h=600&fit=crop',
      highlights: ['Colosseum tour', 'Vatican visit', 'Food tour'],
      inclusions: ['4-star hotel', 'Breakfast', 'Guided tours', 'Transfers'],
      bestFor: ['Families', 'History lovers', 'First-time visitors'],
      tag: 'Cultural'
    },
    {
      id: 6,
      title: 'Tokyo Discovery',
      category: 'family',
      destination: 'Tokyo, Japan',
      duration: '6 Days / 5 Nights',
      price: 1600,
      originalPrice: 2000,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      highlights: ['Traditional temples', 'Modern attractions', 'Cuisine tour'],
      inclusions: ['City hotel', 'Breakfast', 'Metro pass', 'Guided tours'],
      bestFor: ['Families', 'Culture enthusiasts', 'Food lovers'],
      tag: 'Discovery'
    },
    {
      id: 7,
      title: 'Santorini Sunset Escape',
      category: 'romantic',
      destination: 'Santorini, Greece',
      duration: '3 Days / 2 Nights',
      price: 1100,
      originalPrice: 1400,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1516570101029-46264d0750f5?w=800&h=600&fit=crop',
      highlights: ['Sunset cruise', 'Wine tasting', 'Beach time'],
      inclusions: ['Boutique hotel', 'Breakfast', 'Activities', 'Transfers'],
      bestFor: ['Couples', 'Honeymooners', 'Romantic getaways'],
      tag: 'Romantic'
    },
    {
      id: 8,
      title: 'New York City Experience',
      category: 'family',
      destination: 'New York, USA',
      duration: '5 Days / 4 Nights',
      price: 1400,
      originalPrice: 1800,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      highlights: ['Broadway show', 'Museum visits', 'City tour'],
      inclusions: ['Midtown hotel', 'Breakfast', 'Show tickets', 'Metro card'],
      bestFor: ['Families', 'First-time visitors', 'City lovers'],
      tag: 'City Break'
    },
    {
      id: 9,
      title: 'African Safari Adventure',
      category: 'adventure',
      destination: 'Maasai Mara, Kenya',
      duration: '8 Days / 7 Nights',
      price: 3200,
      originalPrice: 4000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1524378736181-844e5f13c3d4?w=800&h=600&fit=crop',
      highlights: ['Game drives', 'Cultural visits', 'Hot air balloon'],
      inclusions: ['Lodge stay', 'All meals', 'Guided tours', 'Transfers'],
      bestFor: ['Adventure seekers', 'Wildlife lovers', 'Photographers'],
      tag: 'Wildlife'
    },
    {
      id: 10,
      title: 'Sydney Harbour Getaway',
      category: 'romantic',
      destination: 'Sydney, Australia',
      duration: '4 Days / 3 Nights',
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop',
      highlights: ['Harbour cruise', 'Opera House tour', 'Beach time'],
      inclusions: ['Harbour hotel', 'Breakfast', 'Activities', 'Transfers'],
      bestFor: ['Couples', 'Romantic getaways', 'First-time visitors'],
      tag: 'Scenic'
    },
    {
      id: 11,
      title: 'Thailand Island Hopping',
      category: 'adventure',
      destination: 'Phuket & Phi Phi Islands',
      duration: '6 Days / 5 Nights',
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1533577076258-2b46260dc52d?w=800&h=600&fit=crop',
      highlights: ['Island tours', 'Snorkeling', 'Beach relaxation'],
      inclusions: ['Beach resort', 'All meals', 'Boat tours', 'Transfers'],
      bestFor: ['Adventure seekers', 'Beach lovers', 'Young travelers'],
      tag: 'Tropical'
    },
    {
      id: 12,
      title: 'Dubai Luxury Experience',
      category: 'luxury',
      destination: 'Dubai, UAE',
      duration: '5 Days / 4 Nights',
      price: 2200,
      originalPrice: 2800,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop',
      highlights: ['Desert safari', 'Burj Khalifa', 'Shopping'],
      inclusions: ['5-star hotel', 'All meals', 'Private tours', 'Transfers'],
      bestFor: ['Luxury travelers', 'Shoppers', 'First-time visitors'],
      tag: 'Luxury'
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    return matchesCategory;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return a.duration.localeCompare(b.duration);
      default:
        return 0;
    }
  });

  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Curated Travel Packages
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Handpicked experiences for every type of traveler - from romantic getaways to family adventures
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
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
            
            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            {sortedPackages.length} packages found
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                {/* Package Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg">
                    <div className="text-sm text-gray-600 line-through">${pkg.originalPrice}</div>
                    <div className="text-lg font-bold text-amber-600">${pkg.price}</div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    {getDiscountPercentage(pkg.originalPrice, pkg.price)}% OFF
                  </div>
                  
                  {/* Package Tag */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.tag}
                  </div>
                </div>
                
                {/* Package Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{pkg.destination}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>per person</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map(highlight => (
                        <span key={highlight} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.bestFor.map(forWhom => (
                        <span key={forWhom} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {forWhom}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                        View Package Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {sortedPackages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Tag className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600">Try adjusting your filters or browse all packages</p>
            </div>
          )}
        </div>
      </div>

      {/* Package Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Packages?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a seamless and unforgettable travel experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Handpicked Destinations</h3>
              <p className="text-gray-600 leading-relaxed">
                We select only the most beautiful and authentic destinations around the world
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                Local experts who know the best spots and hidden gems in every destination
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Value</h3>
              <p className="text-gray-600 leading-relaxed">
                All-inclusive pricing with no hidden fees or surprise costs
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Dates</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy date changes and flexible booking options to suit your schedule
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah & Mike</h4>
                  <p className="text-sm text-gray-600">Paris Romance Package</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "The most romantic trip of our lives! Every detail was perfect, from the Eiffel Tower dinner to the private Seine cruise."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900">The Johnson Family</h4>
                  <p className="text-sm text-gray-600">Bali Family Adventure</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Our kids loved every minute! The activities were perfect for all ages, and the resort was amazing."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900">David Chen</h4>
                  <p className="text-sm text-gray-600">Swiss Alps Adventure</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Incredible hiking and breathtaking views! Our guide knew all the best trails and local spots."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Dream Vacation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our travel experts are ready to help you find the perfect package and make your travel dreams come true
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Get a Free Quote
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