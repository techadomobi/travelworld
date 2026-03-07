export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-6xl font-bold mb-4">Travel. Relax. Discover.</h1>
        <p className="text-2xl mb-8 font-light">Explore the world with unforgettable experiences</p>
        <button className="bg-amber-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 transition shadow-lg">
          Explore Destinations
        </button>
      </div>
    </section>
  );
}
