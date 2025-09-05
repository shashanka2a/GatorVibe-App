import { Button } from "./ui/button";
import { Illustration } from "./ui/illustration";
import { FadeIn, SlideIn, Floating } from "./ui/animated-elements";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3e8ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2236%22%20cy%3D%2224%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn delay={200}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover-lift animate-bounce-gentle">
                🎓 Now Available for Students
              </div>
            </FadeIn>
            
            <div className="space-y-6">
              <FadeIn delay={400}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="animate-shimmer">
                    VYBR
                  </span>, Vibe with Your Best Roommate, Residence, and Routine
                </h1>
              </FadeIn>
              
              <FadeIn delay={800}>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  👉 Join the ultimate student community platform where you can:
                  <br />• <span className="font-semibold text-purple-700">Find verified housing near campus</span>
                  <br />• <span className="font-semibold text-purple-700">Match with compatible roommates</span> 
                  <br />• <span className="font-semibold text-purple-700">Never miss campus events</span>
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl hover-lift hover-glow transition-all duration-300">
                  Join the Waitlist →
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 px-8 py-5 text-lg rounded-xl hover-lift transition-all duration-300">
                  Watch Demo
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={1200}>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white animate-pulse-subtle"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white animate-pulse-subtle" style={{ animationDelay: '0.5s' } as any}></div>
                    <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-white animate-pulse-subtle" style={{ animationDelay: '1s' } as any}></div>
                  </div>
                  <span className="text-sm text-gray-600">500+ students waiting</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <SlideIn direction="right" delay={600}>
            <div className="relative">
              <Floating delay={1} amplitude={15} duration={4}>
                <div className="relative z-10 hover-scale transition-transform duration-500">
                  <Illustration 
                    type="hero"
                    className="rounded-2xl shadow-2xl w-full h-[400px]"
                  />
                </div>
              </Floating>
              <Floating delay={0} amplitude={8} duration={3}>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80"></div>
              </Floating>
              <Floating delay={2} amplitude={12} duration={5}>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-60"></div>
              </Floating>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}