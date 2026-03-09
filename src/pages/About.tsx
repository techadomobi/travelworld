import { useState } from 'react';
import { Users, Globe, Award, Heart, MapPin, Clock } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'With 15 years of experience in the travel industry, Sarah is passionate about creating unforgettable experiences for our clients.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael ensures every trip runs smoothly, from booking to return, with his meticulous attention to detail.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Consultant',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Emma specializes in luxury travel and has visited over 50 countries, bringing her expertise to every client.'
    },
    {
      name: 'David Kim',
      role: 'Adventure Specialist',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: 'David designs our most exciting adventure packages, from trekking to scuba diving.'
    }
  ];

  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Heart },
    { label: 'Destinations', value: '100+', icon: Globe },
    { label: 'Years of Experience', value: '15+', icon: Clock },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  const tabs = [
    { id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Vision' },
    { id: 'values', title: 'Core Values' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TravelWorld
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences around the globe
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-amber-500 to-blue-600 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, TravelWorld began with a simple mission: to make extraordinary travel experiences accessible to everyone. What started as a small travel agency has grown into a global travel company serving thousands of happy customers every year.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our passion for exploration and deep understanding of what makes a trip truly special has guided us every step of the way. We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Global Reach</h4>
                    <p className="text-sm text-gray-600">100+ destinations worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-amber-600" />
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-gray-600">Dedicated travel specialists</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop" 
                alt="TravelWorld team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-amber-500 p-3 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Industry Leader</h4>
                    <p className="text-sm text-gray-600">Multiple travel awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in sustainable, responsible, and authentic travel that benefits both travelers and local communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Travel</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with eco-friendly accommodations and promote responsible tourism practices that protect our planet.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Communities</h3>
              <p className="text-gray-600 leading-relaxed">
                We work directly with local communities to ensure tourism benefits those who call these destinations home.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Experiences</h3>
              <p className="text-gray-600 leading-relaxed">
                We create genuine experiences that allow you to connect deeply with the places you visit and the people you meet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Passionate travel experts dedicated to making your journey unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team of travel experts today to plan your next adventure. We're here to make your travel dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 text-white px-8 py-3 rounded-md hover:bg-amber-600 transition-colors duration-200 font-semibold">
                Get in Touch
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-semibold">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}