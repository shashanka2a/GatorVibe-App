import { Users, Home, MessageCircle, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Illustration } from "./ui/illustration";
import { FadeIn, Stagger } from "./ui/animated-elements";

export function Features() {
  const features = [
    {
      icon: Home,
      title: "Student Housing Hub",
      description: "Discover verified apartments, dorms, and shared housing near campus. Compare prices, browse photos, and secure your perfect home.",
      illustration: "housing" as const,
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: MessageCircle,
      title: "AI Chat Assistant",
      description: "Get instant help with housing questions, roommate matching, and campus life. Your personal AI guide for navigating student life.",
      illustration: "chat" as const,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Smart Roommate Matching",
      description: "AI-powered matching based on lifestyle, study habits, and personality. Find compatible roommates effortlessly.",
      illustration: "roommate" as const,
      color: "from-teal-400 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <FadeIn delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Everything you need to <span className="text-teal-600">thrive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VYBR brings together all the <span className="font-semibold text-teal-700">tools and connections</span> you need to make the most of your college experience.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Stagger delay={400} staggerDelay={200}>
            {features.map((feature, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift hover-glow">
                <div className="relative h-48 overflow-hidden">
                  <Illustration 
                    type={feature.illustration}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 animate-pulse-subtle`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}