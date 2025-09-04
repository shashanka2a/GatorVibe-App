import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Junior, Computer Science",
      university: "University of Florida",
      content: "**GatorVibe helped me find my perfect roommate** and study group. The community matching is incredible - I've made lifelong friends!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Sophomore, Business",
      university: "University of Florida",
      content: "Never missed a campus event since joining the **early access program**. The event notifications are a game-changer for staying connected.",
      avatar: "MJ",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Senior, Psychology",
      university: "University of Florida",
      content: "As a transfer student, **GatorVibe made integration seamless**. Found my tribe within the first week of using the platform.",
      avatar: "ER",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            **Loved by students** across campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of students who've already transformed their college experience with GatorVibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: testimonial.content }} />

                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-purple-600">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            **500+ students** already on the waitlist • **50+ universities** interested
          </p>
        </div>
      </div>
    </section>
  );
}