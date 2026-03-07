import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">TravelWorld</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for unforgettable travel experiences around the globe. Discover, explore, and create memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tour Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Special Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Travel Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Flight Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Hotel Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Visa Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Car Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cruise Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Travel Street, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">info@travelworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 TravelWorld. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
