import { Mountain, Heart, Users, ShoppingBag, Music, Camera } from 'lucide-react';

const categories = [
  {
    icon: Mountain,
    title: 'Adventure',
    description: 'Thrilling experiences for adrenaline seekers',
    color: 'bg-orange-500',
  },
  {
    icon: Heart,
    title: 'Honeymoon',
    description: 'Romantic getaways for couples',
    color: 'bg-pink-500',
  },
  {
    icon: Users,
    title: 'Family',
    description: 'Fun-filled trips for all ages',
    color: 'bg-green-500',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
    description: 'Explore world-class shopping destinations',
    color: 'bg-purple-500',
  },
  {
    icon: Music,
    title: 'Nightlife',
    description: 'Experience vibrant city life',
    color: 'bg-blue-500',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capture stunning landscapes',
    color: 'bg-amber-500',
  },
];

export default function ExperienceCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel by Experience</h2>
          <p className="text-gray-600 text-lg">Choose your perfect adventure style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
