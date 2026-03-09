import { Calendar, Shield, CreditCard, Globe, MapPin, Clock, Users } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      id: 'booking',
      title: 'Booking and Reservations',
      icon: Calendar,
      content: [
        {
          title: 'Reservation Confirmation',
          description: 'All bookings are confirmed upon receipt of payment and availability confirmation. A confirmation email will be sent to the address provided during booking.'
        },
        {
          title: 'Accuracy of Information',
          description: 'While we strive to provide accurate information, prices and availability are subject to change without notice. We are not responsible for errors or omissions in content.'
        },
        {
          title: 'Eligibility',
          description: 'You must be at least 18 years old to book travel services. By booking, you confirm you have the authority to bind all travelers in your party.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: CreditCard,
      content: [
        {
          title: 'Payment Methods',
          description: 'We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway.'
        },
        {
          title: 'Pricing',
          description: 'All prices are quoted in USD and are subject to change. Final pricing will be confirmed at the time of booking.'
        },
        {
          title: 'Taxes and Fees',
          description: 'All applicable taxes, fees, and surcharges are included in the final price unless otherwise specified.'
        }
      ]
    },
    {
      id: 'cancellation',
      title: 'Cancellation and Changes',
      icon: Clock,
      content: [
        {
          title: 'Cancellation Policy',
          description: 'Cancellation fees vary by destination and provider. Please review the specific cancellation policy for your booking before confirming.'
        },
        {
          title: 'Changes to Bookings',
          description: 'Changes to bookings may be subject to fees and availability. Contact our customer service team for assistance with modifications.'
        },
        {
          title: 'Force Majeure',
          description: 'We are not liable for cancellations due to circumstances beyond our control, including natural disasters, political unrest, or pandemics.'
        }
      ]
    },
    {
      id: 'responsibilities',
      title: 'Traveler Responsibilities',
      icon: Users,
      content: [
        {
          title: 'Travel Documents',
          description: 'Travelers are responsible for obtaining all necessary travel documents, including passports, visas, and vaccinations.'
        },
        {
          title: 'Health and Safety',
          description: 'Travelers must ensure they are physically capable of participating in booked activities and must follow all safety instructions.'
        },
        {
          title: 'Local Laws',
          description: 'Travelers agree to comply with all local laws and regulations of their destination countries.'
        }
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Shield,
      content: [
        {
          title: 'Third-Party Services',
          description: 'We act as an intermediary and are not responsible for the acts or omissions of third-party suppliers, including airlines, hotels, and tour operators.'
        },
        {
          title: 'Indirect Damages',
          description: 'We shall not be liable for any indirect, incidental, or consequential damages arising from your travel arrangements.'
        },
        {
          title: 'Maximum Liability',
          description: 'Our total liability for any claim arising from your booking shall not exceed the amount you paid for the services.'
        }
      ]
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      icon: Globe,
      content: [
        {
          title: 'Website Content',
          description: 'All content on our website, including text, images, and logos, is our property or used with permission and is protected by copyright laws.'
        },
        {
          title: 'User Content',
          description: 'By submitting content to us, you grant us a non-exclusive, royalty-free license to use your content for promotional purposes.'
        },
        {
          title: 'Trademarks',
          description: 'All trademarks, service marks, and logos used on our site are our property or the property of their respective owners.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our travel services. By booking with us, you agree to these terms and conditions.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <Calendar className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Updated Regularly</h3>
                <p className="text-sm text-blue-100">We reserve the right to update these terms at any time</p>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <Shield className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your Agreement</h3>
                <p className="text-sm text-blue-100">Using our services constitutes agreement to these terms</p>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
                <p className="text-sm text-blue-100">Terms apply to all destinations and services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Information</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-gray-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions govern your use of our website and services. Please read them carefully 
                before making any bookings. By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these terms. If you do not agree with any part of these terms, please do 
                not use our services.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="border-b border-gray-200 pb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
              <p className="text-blue-800 mb-4">
                If you have any questions about these terms and conditions, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <strong>Email:</strong> legal@travelworld.com
                </div>
                <div>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </div>
                <div>
                  <strong>Address:</strong> 123 Travel Street, Suite 500, New York, NY 10001
                </div>
                <div>
                  <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Legal Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Policy</h3>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your personal information.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                Read Privacy Policy →
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Policy</h3>
              <p className="text-gray-600 mb-4">
                We use cookies to improve your experience on our website. Our Cookie Policy explains what 
                cookies we use and how you can manage them.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                Read Cookie Policy →
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Refund Policy</h3>
              <p className="text-gray-600 mb-4">
                Our refund policy varies depending on the service and provider. Please review the specific 
                refund terms for your booking.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                View Refund Policy →
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Advisories</h3>
              <p className="text-gray-600 mb-4">
                Stay informed about travel advisories and safety information for your destination. 
                We provide up-to-date travel alerts and recommendations.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                View Travel Advisories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Now that you understand our terms, you can book with confidence. Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Browse Destinations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold text-lg">
              Start Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}