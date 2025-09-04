import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Junior, Computer Science",
      university: "University of Florida",
      content: "GatorVibe helped me find my perfect roommate and an amazing study group. The community features are exactly what I needed to feel at home on such a big campus!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Sophomore, Business",
      university: "Florida State University",
      content: "I was struggling to find events that matched my interests. GatorVibe's event matching is incredible - I've discovered so many clubs and activities I never knew existed.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Emma Rodriguez",
      role: "Senior, Psychology",
      university: "University of Central Florida",
      content: "As a transfer student, making connections was tough. GatorVibe made it so easy to find people with similar interests and study habits. Game changer!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            What students are saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who have already transformed their college experience with GatorVibe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}