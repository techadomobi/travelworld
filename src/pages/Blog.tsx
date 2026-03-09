import { useState } from 'react';
import { Calendar, User, Tag, Clock, Search, ArrowRight, Heart, Share2, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'destinations', name: 'Destinations', count: 5 },
    { id: 'tips', name: 'Travel Tips', count: 4 },
    { id: 'food', name: 'Food & Culture', count: 2 },
    { id: 'adventure', name: 'Adventure', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Visit Destinations in Europe for 2024',
      category: 'destinations',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1566097779968-6b9d71f47062?w=800&h=600&fit=crop',
      excerpt: 'Discover the most enchanting European destinations that should be on every traveler\'s bucket list this year.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Europe', 'Travel', 'Destinations'],
      likes: 124
    },
    {
      id: 2,
      title: 'How to Travel on a Budget: Smart Tips for Savvy Travelers',
      category: 'tips',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop',
      excerpt: 'Learn how to explore the world without breaking the bank with these practical budget travel tips.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Budget', 'Tips', 'Travel Hacks'],
      likes: 89
    },
    {
      id: 3,
      title: 'The Ultimate Food Guide to Tokyo',
      category: 'food',
      author: 'Emma Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
      excerpt: 'From street food to Michelin-starred restaurants, discover the best culinary experiences Tokyo has to offer.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Food', 'Tokyo', 'Japan'],
      likes: 156
    },
    {
      id: 4,
      title: 'Adventure Travel: 5 Thrilling Experiences You Must Try',
      category: 'adventure',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      excerpt: 'Step out of your comfort zone with these adrenaline-pumping adventure activities around the world.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Adventure', 'Thrill', 'Experiences'],
      likes: 203
    },
    {
      id: 5,
      title: 'Family-Friendly Destinations: Where to Go with Kids',
      category: 'destinations',
      author: 'Sarah Johnson',
      date: 'March 5, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1503269751819-b43627222535?w=800&h=600&fit=crop',
      excerpt: 'Planning a family vacation? Here are the top destinations that will keep both kids and adults entertained.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Family', 'Kids', 'Vacation'],
      likes: 78
    },
    {
      id: 6,
      title: 'Packing Hacks: How to Fit Everything in One Carry-On',
      category: 'tips',
      author: 'Michael Chen',
      date: 'March 3, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1517824806704-fe181248da8f?w=800&h=600&fit=crop',
      excerpt: 'Master the art of minimalist packing with these clever tips and tricks for carry-on only travel.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Packing', 'Tips', 'Minimalism'],
      likes: 142
    },
    {
      id: 7,
      title: 'Hidden Gems: Undiscovered Destinations Worth Visiting',
      category: 'destinations',
      author: 'Emma Rodriguez',
      date: 'February 28, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      excerpt: 'Escape the tourist crowds and discover these breathtaking but lesser-known destinations around the world.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Hidden Gems', 'Off the beaten path', 'Discover'],
      likes: 91
    },
    {
      id: 8,
      title: 'Cultural Etiquette: Do\'s and Don\'ts Around the World',
      category: 'tips',
      author: 'David Kim',
      date: 'February 25, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?w=800&h=600&fit=crop',
      excerpt: 'Avoid cultural faux pas with this comprehensive guide to etiquette in popular travel destinations.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Culture', 'Etiquette', 'Respect'],
      likes: 67
    },
    {
      id: 9,
      title: 'Best Time to Visit Popular Tourist Attractions',
      category: 'destinations',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1505228397929-b1f31053a95c?w=800&h=600&fit=crop',
      excerpt: 'Maximize your travel experience by visiting these famous landmarks at the perfect time of year.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Timing', 'Attractions', 'Seasons'],
      likes: 115
    },
    {
      id: 10,
      title: 'Sustainable Travel: How to Be an Eco-Conscious Tourist',
      category: 'tips',
      author: 'Michael Chen',
      date: 'February 18, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop',
      excerpt: 'Learn how to minimize your environmental impact while exploring the world and supporting local communities.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Sustainability', 'Eco-friendly', 'Responsible'],
      likes: 178
    },
    {
      id: 11,
      title: 'Romantic Getaways: Most Beautiful Places for Couples',
      category: 'destinations',
      author: 'Emma Rodriguez',
      date: 'February 14, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e753211fd?w=800&h=600&fit=crop',
      excerpt: 'From secluded beaches to charming mountain retreats, discover the world\'s most romantic destinations.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Romance', 'Couples', 'Honeymoon'],
      likes: 234
    },
    {
      id: 12,
      title: 'Photography Tips for Capturing Stunning Travel Photos',
      category: 'tips',
      author: 'David Kim',
      date: 'February 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1500964755202-c2d6fb9671e6?w=800&h=600&fit=crop',
      excerpt: 'Elevate your travel photography with these expert tips for capturing breathtaking images on your journeys.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Photography', 'Tips', 'Travel'],
      likes: 156
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getShareUrl = (platform: string, title: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    switch(platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case 'instagram':
        return `https://www.instagram.com/?url=${url}`;
      case 'email':
        return `mailto:?subject=${text}&body=${url}`;
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
              Travel Blog & Inspiration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover travel stories, tips, and inspiration to help plan your next adventure
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
                    placeholder="Search articles..."
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

      {/* Categories */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
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
          
          <div className="mt-4 text-sm text-gray-600 text-center">
            {filteredPosts.length} articles found
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Share:</span>
                          <div className="flex gap-2">
                            {['facebook', 'twitter', 'instagram', 'email'].map(platform => (
                              <a
                                key={platform}
                                href={getShareUrl(platform, post.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                              >
                                {platform === 'facebook' && <Facebook className="w-4 h-4" />}
                                {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                                {platform === 'instagram' && <Instagram className="w-4 h-4" />}
                                {platform === 'email' && <Mail className="w-4 h-4" />}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a href="#" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or browse all articles</p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Posts */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.likes - a.likes)
                    .slice(0, 5)
                    .map((post) => (
                      <div key={post.id} className="flex gap-3 group cursor-pointer">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-900 to-amber-500 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Get Travel Inspiration</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive offers.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="w-full bg-white text-blue-900 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Tags Cloud */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Travel', 'Destinations', 'Tips', 'Food', 'Adventure', 'Budget', 'Family', 'Romance', 'Photography', 'Culture'].map(tag => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Travel News
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of travel enthusiasts who receive our latest articles, tips, and exclusive offers directly in their inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking for destination inspiration, travel tips, or planning your next adventure, we're here to help you every step of the way.
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