import { Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@travelworld.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>New York, USA</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            TravelWorld
          </div>
          <ul className="flex gap-8 items-center">
            <li><a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Destinations</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Tours</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">About Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Contact</a></li>
            <li>
              <button className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition font-medium">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
