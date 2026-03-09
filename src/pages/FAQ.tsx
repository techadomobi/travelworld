import { useState } from 'react';
import { Plus, Minus, Search, HelpCircle, Clock, Shield, CreditCard, Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  const categories = [
    { id: 'all', name: 'All Questions', count: 20 },
    { id: 'booking', name: 'Booking & Reservations', count: 5 },
    { id: 'payment', name: 'Payment & Pricing', count: 4 },
    { id: 'travel', name: 'Travel Requirements', count: 4 },
    { id: 'cancellation', name: 'Cancellation & Changes', count: 4 },
    { id: 'support', name: 'Customer Support', count: 3 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I book a travel package?',
      answer: 'Booking a travel package is easy! Simply browse our available packages, select your preferred destination and dates, and follow the booking process. You can book online through our website or contact our travel experts directly for personalized assistance.',
      category: 'booking',
      icon: MapPin
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. Our secure payment processing system ensures your financial information is protected at all times.',
      category: 'payment',
      icon: CreditCard
    },
    {
      id: 3,
      question: 'Do I need a visa for my destination?',
      answer: 'Visa requirements vary depending on your destination and nationality. We recommend checking with the embassy of your destination country or consulting our travel experts who can provide up-to-date visa information for your specific trip.',
      category: 'travel',
      icon: Globe
    },
    {
      id: 4,
      question: 'Can I modify my booking after it\'s confirmed?',
      answer: 'Yes, most bookings can be modified depending on the terms and conditions of your package. Please contact our customer service team as soon as possible to discuss your specific requirements and any applicable fees.',
      category: 'cancellation',
      icon: Clock
    },
    {
      id: 5,
      question: 'What if I need to cancel my trip?',
      answer: 'Cancellation policies vary by destination and provider. Please review our terms and conditions during booking or contact our customer service team for specific details about your reservation and any applicable cancellation fees.',
      category: 'cancellation',
      icon: Shield
    },
    {
      id: 6,
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we offer comprehensive travel insurance options that cover trip cancellations, medical emergencies, lost luggage, and other travel-related issues. Our travel experts can help you choose the right coverage for your trip.',
      category: 'travel',
      icon: Shield
    },
    {
      id: 7,
      question: 'What is included in your travel packages?',
      answer: 'Our packages typically include accommodation, transportation, guided tours, and select meals. The exact inclusions vary by package, so please check the detailed itinerary for each destination. We also offer customizable options to suit your preferences.',
      category: 'booking',
      icon: MapPin
    },
    {
      id: 8,
      question: 'Are there group discounts available?',
      answer: 'Yes, we offer special rates for groups of 6 or more travelers. Contact our sales team with your group size and travel dates to receive a personalized quote and learn about our group booking benefits.',
      category: 'payment',
      icon: CreditCard
    },
    {
      id: 9,
      question: 'What documents do I need for international travel?',
      answer: 'For international travel, you typically need a valid passport, visa (if required), travel insurance, and any necessary vaccinations or health certificates. We recommend checking specific requirements for your destination well in advance of your trip.',
      category: 'travel',
      icon: Globe
    },
    {
      id: 10,
      question: 'Can I customize my travel package?',
      answer: 'Absolutely! We specialize in creating customized travel experiences. Whether you want to add extra activities, extend your stay, or create a completely personalized itinerary, our travel experts can help design the perfect trip for you.',
      category: 'booking',
      icon: MapPin
    },
    {
      id: 11,
      question: 'What happens if my flight is delayed or cancelled?',
      answer: 'We work with reliable airlines and include buffer time in our itineraries to account for minor delays. In case of significant delays or cancellations, our local partners will assist you with rebooking and accommodations as needed.',
      category: 'travel',
      icon: Clock
    },
    {
      id: 12,
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in transparent pricing. All fees and charges are clearly outlined during the booking process. The price you see is the price you pay, with no hidden surprises. Optional activities and personal expenses are not included in the base package price.',
      category: 'payment',
      icon: CreditCard
    },
    {
      id: 13,
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 3-6 months in advance for the best selection and prices, especially for popular destinations and peak travel seasons. However, we can often accommodate last-minute bookings depending on availability.',
      category: 'booking',
      icon: Clock
    },
    {
      id: 14,
      question: 'What if I have special dietary requirements?',
      answer: 'We can accommodate most dietary requirements and preferences. Please inform us of any allergies, dietary restrictions, or special needs when booking, and we will communicate this to our partners and restaurants to ensure you have suitable meal options.',
      category: 'travel',
      icon: Shield
    },
    {
      id: 15,
      question: 'Is it safe to travel to your destinations?',
      answer: 'We carefully select destinations based on safety standards and work with trusted local partners. We monitor travel advisories and provide up-to-date safety information to our travelers. Your safety is our top priority.',
      category: 'travel',
      icon: Shield
    },
    {
      id: 16,
      question: 'Can I book flights separately?',
      answer: 'Yes, you can book flights separately or we can arrange them for you as part of your package. If booking separately, please ensure your flight times align with your tour start and end dates. We can provide guidance on the best flight options for your itinerary.',
      category: 'booking',
      icon: MapPin
    },
    {
      id: 17,
      question: 'What if I need emergency assistance while traveling?',
      answer: 'We provide 24/7 emergency support during your trip. You will receive emergency contact information before departure. Our local partners are available to assist with any issues, and we can coordinate with your travel insurance provider if needed.',
      category: 'support',
      icon: Shield
    },
    {
      id: 18,
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team by phone at +1 (555) 123-4567, by email at support@travelworld.com, or through our live chat feature on our website. Our team is available Monday through Friday, 9 AM to 6 PM EST.',
      category: 'support',
      icon: Phone
    },
    {
      id: 19,
      question: 'Do you offer solo traveler options?',
      answer: 'Yes, we offer solo traveler options for many of our packages. Solo travelers may be subject to a single supplement fee, or we can match you with a roommate if available. Some tours are specifically designed for solo travelers.',
      category: 'booking',
      icon: MapPin
    },
    {
      id: 20,
      question: 'What if the weather affects my trip?',
      answer: 'We plan our itineraries with seasonal weather patterns in mind. In case of adverse weather, our local guides will adjust activities as needed to ensure your safety and enjoyment. Some activities may be rescheduled or substituted with alternatives.',
      category: 'travel',
      icon: Globe
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id: number) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(id)) {
      newOpenQuestions.delete(id);
    } else {
      newOpenQuestions.add(id);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const getFaqIcon = (category: string) => {
    switch(category) {
      case 'booking': return MapPin;
      case 'payment': return CreditCard;
      case 'travel': return Globe;
      case 'cancellation': return Clock;
      case 'support': return Phone;
      default: return HelpCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our travel services, booking process, and more
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
                    placeholder="Search questions..."
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
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
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
            {filteredFAQs.length} questions found
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFAQs.map((faq) => {
              const Icon = faq.icon || getFaqIcon(faq.category);
              const isOpen = openQuestions.has(faq.id);
              
              return (
                <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        faq.category === 'booking' ? 'bg-blue-100 text-blue-700' :
                        faq.category === 'payment' ? 'bg-green-100 text-green-700' :
                        faq.category === 'travel' ? 'bg-purple-100 text-purple-700' :
                        faq.category === 'cancellation' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {categories.find(c => c.id === faq.category)?.name}
                      </span>
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-gray-600" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <HelpCircle className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all questions</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help you with any questions or concerns you may have.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">support@travelworld.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Available Online</p>
              <p className="text-sm text-gray-500">Instant assistance</p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-amber-600 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Additional Help Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Help Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Travel Tips',
                description: 'Essential tips and advice for stress-free travel',
                icon: MapPin,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Visa Information',
                description: 'Up-to-date visa requirements for popular destinations',
                icon: Globe,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Travel Insurance',
                description: 'Comprehensive coverage options for your peace of mind',
                icon: Shield,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Accessibility',
                description: 'Information about accessible travel options',
                icon: CreditCard,
                color: 'from-orange-500 to-orange-600'
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-br ${topic.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
                <button className="mt-4 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you have questions about our services or are ready to book your dream vacation, our travel experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Browse Destinations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold text-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}