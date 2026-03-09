import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@travelworld.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">New York, USA</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            TravelWorld
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href} 
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/packages" 
                className="bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-amber-600 transition-colors duration-200 font-medium text-sm sm:text-base"
              >
                Book Now
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 pb-3 border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href} 
                  className="block text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link 
                to="/packages" 
                className="block w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors duration-200 font-medium text-sm text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
