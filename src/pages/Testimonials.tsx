import { useState } from 'react';
import { Star, Quote, Calendar, MapPin, Users, Heart, ThumbsUp, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', name: 'All Reviews', count: 24 },
    { id: 'romantic', name: 'Romantic Getaways', count: 6 },
    { id: 'family', name: 'Family Vacations', count: 8 },
    { id: 'adventure', name: 'Adventure Tours', count: 5 },
    { id: 'luxury', name: 'Luxury Escapes', count: 5 }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Mike Thompson',
      location: 'Paris, France',
      category: 'romantic',
      date: 'March 2024',
      rating: 5,
      title: 'The Most Romantic Trip of Our Lives',
      content: 'Our Paris Romance Package was absolutely perfect! From the Eiffel Tower dinner to the private Seine cruise, every detail was meticulously planned. The hotel was stunning and the tour guide was incredibly knowledgeable. We felt like royalty throughout our entire stay.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      tripDuration: '5 Days',
      travelers: '2 adults',
      verified: true,
      likes: 156
    },
    {
      id: 2,
      name: 'The Johnson Family',
      location: 'Bali, Indonesia',
      category: 'family',
      date: 'February 2024',
      rating: 5,
      title: 'Perfect Family Adventure',
      content: 'Our Bali Family Adventure was the best family vacation we have ever had! The kids loved the beach activities and cultural tours. The resort was amazing with activities for all ages. The food was incredible and the staff went above and beyond to make sure everyone was happy.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      tripDuration: '7 Days',
      travelers: '2 adults, 3 children',
      verified: true,
      likes: 234
    },
    {
      id: 3,
      name: 'David Chen',
      location: 'Zermatt, Switzerland',
      category: 'adventure',
      date: 'January 2024',
      rating: 5,
      title: 'Unforgettable Alpine Experience',
      content: 'The Swiss Alps Adventure exceeded all my expectations! The hiking was incredible with breathtaking views at every turn. Our guide knew all the best trails and local spots. The mountain hotel was cozy and the food was delicious. I would do this trip again in a heartbeat.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      tripDuration: '6 Days',
      travelers: 'Solo traveler',
      verified: true,
      likes: 189
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      location: 'Maldives',
      category: 'luxury',
      date: 'December 2023',
      rating: 5,
      title: 'Pure Luxury and Relaxation',
      content: 'The Maldives Luxury Escape was pure paradise! Our overwater villa was stunning with crystal clear water. The private beach was perfect for romantic walks. The spa treatments were amazing and the food was gourmet. Every moment felt like a dream.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      tripDuration: '4 Days',
      travelers: '2 adults',
      verified: true,
      likes: 321
    },
    {
      id: 5,
      name: 'The Smith Family',
      location: 'Rome, Italy',
      category: 'family',
      date: 'November 2023',
      rating: 4,
      title: 'Amazing Cultural Experience',
      content: 'Our Rome Cultural Tour was educational and fun for the whole family. The Colosseum tour was fascinating and the Vatican visit was breathtaking. The food tours were delicious and the kids loved trying all the different pastas. Great value for money!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      tripDuration: '4 Days',
      travelers: '2 adults, 2 children',
      verified: true,
      likes: 145
    },
    {
      id: 6,
      name: 'Alex Johnson',
      location: 'Tokyo, Japan',
      category: 'family',
      date: 'October 2023',
      rating: 5,
      title: 'Incredible City Experience',
      content: 'Tokyo was mind-blowing! The mix of traditional and modern was fascinating. Our guide was excellent and showed us hidden gems we would have never found on our own. The food was incredible and the metro system was so efficient. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      tripDuration: '6 Days',
      travelers: 'Solo traveler',
      verified: true,
      likes: 167
    },
    {
      id: 7,
      name: 'The Wilson Couple',
      location: 'Santorini, Greece',
      category: 'romantic',
      date: 'September 2023',
      rating: 5,
      title: 'Magical Sunset Views',
      content: 'Santorini was even more beautiful than we imagined! The white-washed buildings against the blue sea were stunning. Our sunset cruise was magical and the wine tasting was delicious. The boutique hotel had the best views. Perfect for a romantic getaway.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      tripDuration: '3 Days',
      travelers: '2 adults',
      verified: true,
      likes: 198
    },
    {
      id: 8,
      name: 'The Brown Family',
      location: 'New York, USA',
      category: 'family',
      date: 'August 2023',
      rating: 4,
      title: 'Exciting City Adventure',
      content: 'New York was amazing! The Broadway show was fantastic and Central Park was beautiful. Our guide knew all the best spots and the metro card was very convenient. The hotel location was perfect. The kids loved the museums and Times Square.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      tripDuration: '5 Days',
      travelers: '2 adults, 2 children',
      verified: true,
      likes: 123
    },
    {
      id: 9,
      name: 'Michael Davis',
      location: 'Maasai Mara, Kenya',
      category: 'adventure',
      date: 'July 2023',
      rating: 5,
      title: 'Wildlife Safari of a Lifetime',
      content: 'The African Safari was the most incredible experience! Seeing the Big Five up close was unforgettable. The hot air balloon ride at sunrise was magical. Our guide was an expert and knew exactly where to find the animals. The lodge was luxurious and the food was excellent.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      tripDuration: '8 Days',
      travelers: 'Solo traveler',
      verified: true,
      likes: 289
    },
    {
      id: 10,
      name: 'The Taylor Couple',
      location: 'Sydney, Australia',
      category: 'romantic',
      date: 'June 2023',
      rating: 4,
      title: 'Beautiful Harbor City',
      content: 'Sydney was stunning! The Opera House is even more beautiful in person. Our harbor cruise was relaxing and the beach time was perfect. The hotel had amazing views of the harbor. The food was diverse and delicious. Great mix of relaxation and sightseeing.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      tripDuration: '4 Days',
      travelers: '2 adults',
      verified: true,
      likes: 156
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === 'all' || testimonial.category === selectedCategory;
    return matchesCategory;
  });

  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getAverageRating = () => {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
  };

  const getRatingDistribution = () => {
    const distribution: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    testimonials.forEach(t => distribution[t.rating]++);
    return distribution;
  };

  const getShareUrl = (platform: string, testimonial: any) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`"${testimonial.title}" - ${testimonial.content.substring(0, 100)}...`);
    
    switch(platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case 'instagram':
        return `https://www.instagram.com/?url=${url}`;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Travelers Say
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Real experiences from real travelers - discover why thousands choose TravelWorld for their adventures
            </p>
          </div>
          
          {/* Stats Overview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{testimonials.length}K+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{getAverageRating()}</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Recommend Us</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
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
                <option value="recent">Most Recent</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            {filteredTestimonials.length} testimonials found
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Ratings</h3>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = getRatingDistribution()[star];
                  const percentage = ((count / testimonials.length) * 100).toFixed(1);
                  
                  return (
                    <div key={star} className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < star ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-full text-white">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Excellent Service</h4>
                  <p className="text-gray-600">Based on {testimonials.length} verified reviews</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{getAverageRating()}</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sortedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{testimonial.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Verified Traveler</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{testimonial.tripDuration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{testimonial.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{testimonial.travelers}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        testimonial.category === 'romantic' ? 'bg-pink-100 text-pink-700' :
                        testimonial.category === 'family' ? 'bg-green-100 text-green-700' :
                        testimonial.category === 'adventure' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                        <Heart className="w-4 h-4" />
                        <span>{testimonial.likes}</span>
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Share:</span>
                        <div className="flex gap-2">
                          {['facebook', 'twitter', 'instagram'].map(platform => (
                            <a
                              key={platform}
                              href={getShareUrl(platform, testimonial)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                            >
                              {platform === 'facebook' && <Facebook className="w-4 h-4" />}
                              {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                              {platform === 'instagram' && <Instagram className="w-4 h-4" />}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {sortedTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Quote className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-600">Try adjusting your filters or browse all reviews</p>
            </div>
          )}
        </div>
      </div>

      {/* Testimonial Submission */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have you traveled with us recently? We'd love to hear about your experience and share it with future travelers!
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share</h3>
                <p className="text-sm text-gray-600">Tell us about your travel experience</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Rate</h3>
                <p className="text-sm text-gray-600">Give your honest rating and feedback</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Inspire</h3>
                <p className="text-sm text-gray-600">Help others plan their perfect trip</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-amber-600 transition-all duration-300 font-semibold">
                Submit Your Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Travel Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of happy travelers who have discovered the world with TravelWorld. Read more reviews or start planning your next adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Browse Destinations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold text-lg">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}