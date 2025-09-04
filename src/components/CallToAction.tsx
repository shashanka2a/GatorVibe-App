import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Illustration } from "./ui/illustration";
import { ArrowRight } from "lucide-react";
import { FadeIn, SlideIn, Floating, Pulse } from "./ui/animated-elements";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2236%22%20cy%3D%2224%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Ready to catch the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white animate-shimmer">
                    Gator Vibe?
                  </span>
                </h2>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Join our waitlist and be among the <span className="font-semibold text-white">first to experience</span> the future of student community.
                  <br /><span className="font-semibold text-white">Early access starts this fall!</span>
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your university email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:bg-white/20 rounded-xl hover-lift transition-all duration-300 focus:ring-2 focus:ring-white/30"
                  />
                  <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-xl whitespace-nowrap font-semibold shadow-lg hover:shadow-xl hover-lift hover-glow transition-all duration-300">
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="text-sm text-purple-200">
                  🎓 <span className="font-semibold">Free for all students</span> • 🔒 <span className="font-semibold">No spam, promise!</span>
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={600}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <Pulse delay={0}>
                  <div className="text-center hover-scale transition-transform duration-300">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-purple-200">Students waiting</div>
                  </div>
                </Pulse>
                <Pulse delay={0.5}>
                  <div className="text-center hover-scale transition-transform duration-300">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-purple-200">Universities</div>
                  </div>
                </Pulse>
                <Pulse delay={1}>
                  <div className="text-center hover-scale transition-transform duration-300">
                    <div className="text-2xl font-bold text-white">2025</div>
                    <div className="text-sm text-purple-200">Launch year</div>
                  </div>
                </Pulse>
              </div>
            </FadeIn>
          </div>
          
          <SlideIn direction="right" delay={400}>
            <div className="relative">
              <Floating delay={0.5} amplitude={20} duration={5}>
                <div className="relative z-10 hover-scale transition-transform duration-500">
                  <Illustration 
                    type="celebration"
                    className="rounded-2xl shadow-2xl w-full h-[400px] opacity-90"
                  />
                </div>
              </Floating>
              <Floating delay={0} amplitude={10} duration={3}>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/30 rounded-full animate-pulse-subtle"></div>
              </Floating>
              <Floating delay={2} amplitude={15} duration={4}>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/10 to-white/20 rounded-full animate-pulse-subtle"></div>
              </Floating>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}