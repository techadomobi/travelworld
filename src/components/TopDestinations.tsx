const destinations = [
  {
    name: 'Paris, France',
    tours: 45,
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Tokyo, Japan',
    tours: 38,
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Dubai, UAE',
    tours: 52,
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'New York, USA',
    tours: 41,
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Rome, Italy',
    tours: 36,
    image: 'https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Bangkok, Thailand',
    tours: 43,
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function TopDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Destinations</h2>
          <p className="text-gray-600 text-lg">Explore the world's most amazing places</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                <p className="text-blue-200">{dest.tours} Tours Available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
