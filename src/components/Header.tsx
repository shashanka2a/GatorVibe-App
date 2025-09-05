import { Button } from "./ui/button";
import { FadeIn } from "./ui/animated-elements";

export function Header() {
  return (
    <FadeIn delay={0}>
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 hover-scale transition-transform duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center animate-pulse-subtle">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">VYBR</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover-lift relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#community" className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover-lift relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover-lift relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover-lift transition-all duration-300">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white hover-lift hover-glow transition-all duration-300">
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>
    </FadeIn>
  );
}