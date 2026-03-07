export default function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Travel. Relax. Discover.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-light max-w-3xl mx-auto leading-relaxed">
          Explore the world with unforgettable experiences
        </p>
        <button className="bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Explore Destinations
        </button>
      </div>
    </section>
  );
}
