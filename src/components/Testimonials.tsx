import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Amazing experience! The trip to Bali was perfectly organized. Every detail was taken care of and the guides were incredibly knowledgeable. Highly recommend!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Best travel agency I have ever worked with. The European tour exceeded all expectations. Professional service from start to finish.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    rating: 5,
    text: 'Our honeymoon in the Maldives was absolutely perfect. Thank you for making our dream vacation a reality. Everything was flawless!',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 text-lg">Real experiences from real adventurers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-12 h-12 text-blue-900 opacity-20 absolute top-4 right-4" />

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
