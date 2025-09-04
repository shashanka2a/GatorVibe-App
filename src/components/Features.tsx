import { Users, Home, Calendar, Heart, User, MapPin, DollarSign, Wifi, PartyPopper, Clock, Bell } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedCard } from "./ui/animated-card";
import { Illustration } from "./ui/illustration";
import { FadeIn, Stagger } from "./ui/animated-elements";

export function Features() {
  const features = [
    {
      icon: Home,
      title: "Student Housing Hub",
      description: "Discover verified apartments, dorms, and shared housing near campus. Compare prices, browse photos, and secure your perfect home.",
      illustration: "housing" as const,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Smart Roommate Matching",
      description: "Find your perfect roommate match based on lifestyle preferences, study habits, and personality compatibility. Connect with compatible students effortlessly.",
      illustration: "roommate" as const,
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Campus Events Hub",
      description: "Never miss campus activities, parties, study groups, or career events. Get personalized notifications for everything happening.",
      illustration: "events" as const,
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <FadeIn delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Everything you need to <span className="text-purple-600 animate-shimmer">thrive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the <span className="font-semibold text-purple-700">tools and connections</span> you need to make the most of your college experience.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Stagger delay={400} staggerDelay={200}>
            {features.map((feature, index) => {
              // Housing animation (index 0)
              if (index === 0) {
                const housingAnimation = (
                  <div className="p-6 text-center space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center animate-bounce-gentle">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium">Near Campus</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.2s' } as any}>
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium">Best Prices</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.4s' } as any}>
                          <Wifi className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium">Amenities</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.6s' } as any}>
                          <Home className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><span className="font-semibold text-purple-700">127+ verified listings available</span></p>
                  </div>
                );
                
                return (
                  <AnimatedCard key={index} hoverContent={housingAnimation} className="hover-lift hover-glow">
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
                  </AnimatedCard>
                );
              }
              
              // Roommate matching animation (index 1)
              if (index === 1) {
                const matchingAnimation = (
                  <div className="p-6 text-center space-y-4">
                    <div className="flex justify-center items-center space-x-4">
                      <div className="flex flex-col items-center space-y-2 animate-bounce-gentle">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium">You</span>
                      </div>
                      <div className="animate-pulse-subtle">
                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                      </div>
                      <div className="flex flex-col items-center space-y-2 animate-bounce-gentle" style={{ animationDelay: '0.5s' } as any}>
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
                  <AnimatedCard key={index} hoverContent={matchingAnimation} className="hover-lift hover-glow">
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
                  </AnimatedCard>
                );
              }
              
              // Events animation (index 2)
              if (index === 2) {
                const eventsAnimation = (
                  <div className="p-6 text-center space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg animate-slide-in-left">
                        <div className="flex items-center space-x-2">
                          <PartyPopper className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium">Spring Concert</span>
                        </div>
                        <Bell className="w-4 h-4 text-purple-600 animate-bounce-gentle" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg animate-slide-in-left" style={{ animationDelay: '0.2s' } as any}>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">Study Group</span>
                        </div>
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg animate-slide-in-left" style={{ animationDelay: '0.4s' } as any}>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">Career Fair</span>
                        </div>
                        <Bell className="w-4 h-4 text-green-600 animate-bounce-gentle" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><span className="font-semibold text-purple-700">Smart notifications for your interests</span></p>
                  </div>
                );
                
                return (
                  <AnimatedCard key={index} hoverContent={eventsAnimation} className="hover-lift hover-glow">
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
                  </AnimatedCard>
                );
              }
              
              return null;
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}