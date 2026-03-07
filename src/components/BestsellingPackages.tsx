import { Star, Clock, Users, Plane } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Bali Paradise Escape',
    duration: '7 Days / 6 Nights',
    price: 1299,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'BEST SELLING',
    includes: ['Flights', 'Hotels', 'Meals', 'Guide'],
  },
  {
    id: 2,
    title: 'European Grand Tour',
    duration: '10 Days / 9 Nights',
    price: 2499,
    rating: 4.9,
    reviews: 389,
    image: 'https://images.pexels.com/photos/2845211/pexels-photo-2845211.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'TRENDING',
    includes: ['Flights', 'Hotels', 'Meals', 'Guide'],
  },
  {
    id: 3,
    title: 'Maldives Luxury Resort',
    duration: '5 Days / 4 Nights',
    price: 1899,
    rating: 5.0,
    reviews: 156,
    image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'POPULAR',
    includes: ['Flights', 'Hotels', 'Meals', 'Guide'],
  },
  {
    id: 4,
    title: 'Safari Adventure Kenya',
    duration: '8 Days / 7 Nights',
    price: 1799,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'BEST SELLING',
    includes: ['Flights', 'Hotels', 'Meals', 'Guide'],
  },
];

export default function BestsellingPackages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Bestselling Packages</h2>
          <p className="text-gray-600 text-lg">Handpicked experiences for unforgettable journeys</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.badge}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{pkg.duration}</span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-gray-900">{pkg.rating}</span>
                  <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.includes.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-blue-900">₹{pkg.price * 83}</span>
                    <span className="text-gray-500 text-sm"> /person</span>
                  </div>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition font-medium text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
