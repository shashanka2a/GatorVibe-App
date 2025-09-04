import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-bold text-gray-900">GatorVibe</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
            Features
          </a>
          <a href="#community" className="text-gray-600 hover:text-purple-600 transition-colors">
            Community
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            Sign In
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}