import { Award, Users, Globe, Heart } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '13+',
    label: 'Years of Excellence',
  },
  {
    icon: Users,
    value: '1M+',
    label: 'Happy Travelers',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Destinations',
  },
  {
    icon: Heart,
    value: '98%',
    label: 'Customer Satisfaction',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-amber-400" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
