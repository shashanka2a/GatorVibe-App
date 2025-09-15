import { Users, Home, Calendar, Star, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FadeIn, Stagger } from "./ui/animated-elements";

export function Features() {
  const features = [
    {
      icon: Home,
      title: "Gator Commons",
      subtitle: "Near UF Campus",
      rating: 4.8,
      price: "$650/month",
      members: "24 members",
      tags: ["Pool", "Study Room", "Shuttle"],
      description: "Modern student housing with amazing amenities near campus.",
      image: "/images/housing-1.jpg"
    },
    {
      icon: Users,
      title: "Midtown Student Living",
      subtitle: "Midtown Gainesville",
      rating: 4.6,
      price: "$575/month", 
      members: "18 members",
      tags: ["Gym", "Game Room", "Pet-Friendly"],
      description: "Vibrant community with great social spaces and activities.",
      image: "/images/housing-2.jpg"
    },
    {
      icon: Calendar,
      title: "Swamp House Co-op",
      subtitle: "Downtown Gainesville",
      rating: 4.9,
      price: "$525/month",
      members: "12 members", 
      tags: ["Sustainable", "Community Garden", "Bike Storage"],
      description: "Eco-friendly cooperative living with engaged community.",
      image: "/images/housing-3.jpg"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <FadeIn delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Everything you need to <span className="text-teal-600">thrive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VYBR brings together all the tools and connections you need to make the most of your college experience.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Stagger delay={400} staggerDelay={200}>
            {features.map((feature, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  {/* Placeholder for housing images */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <feature.icon className="w-12 h-12 text-gray-500" />
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">{feature.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{feature.price}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{feature.subtitle}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{feature.members}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="gradient" className="w-full rounded-xl font-semibold">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}