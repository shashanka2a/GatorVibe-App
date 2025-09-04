import { Users, Home, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Community Discovery",
      description: "Connect with students who share your interests, hobbies, and academic goals. Build meaningful friendships that last beyond college.",
      image: "https://images.unsplash.com/photo-1744320911030-1ab998d994d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1Njk4MjEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "Smart Roommate Matching",
      description: "Find your perfect roommate match based on lifestyle preferences, study habits, and personality compatibility. No more housing stress!",
      image: "https://images.unsplash.com/photo-1607319296775-ddf7fd111511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZG9ybSUyMHJvb21tYXRlc3xlbnwxfHx8fDE3NTY5ODIxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Campus Events Hub",
      description: "Never miss out on campus activities, parties, study groups, or career events. Stay connected to everything happening on campus.",
      image: "https://images.unsplash.com/photo-1644790267172-28277953ba15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBldmVudHMlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTY5ODIxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Everything you need to thrive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GatorVibe brings together all the tools and connections you need to make the most of your college experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}