import { Users, Home, Calendar, Heart, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedCard } from "./ui/animated-card";
import { Illustration } from "./ui/illustration";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Community Discovery",
      description: "Connect with students who share your interests, hobbies, and academic goals. Build meaningful friendships that last beyond college.",
      illustration: "community" as const,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "Smart Roommate Matching",
      description: "Find your perfect roommate match based on lifestyle preferences, study habits, and personality compatibility. No more housing stress!",
      illustration: "roommate" as const,
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Campus Events Hub",
      description: "Never miss out on campus activities, parties, study groups, or career events. Stay connected to everything happening on campus.",
      illustration: "events" as const,
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Everything you need to <span className="text-purple-600">thrive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GatorVibe brings together all the <span className="font-semibold text-purple-700">tools and connections</span> you need to make the most of your college experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Special animation for roommate matching (index 1)
            if (index === 1) {
              const matchingAnimation = (
                <div className="p-6 text-center space-y-4">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium">You</span>
                    </div>
                    <div className="animate-pulse">
                      <Heart className="w-6 h-6 text-red-500 fill-current" />
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium">Perfect Match</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-purple-700">AI-powered compatibility matching</span></p>
                </div>
              );
              
              return (
                <AnimatedCard key={index} hoverContent={matchingAnimation}>
                  <div className="relative h-48 overflow-hidden">
                    <Illustration 
                      type={feature.illustration}
                      className="w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </AnimatedCard>
              );
            }
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Illustration 
                    type={feature.illustration}
                    className="w-full h-full"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}