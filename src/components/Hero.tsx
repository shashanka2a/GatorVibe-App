import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3e8ff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2236%22%20cy%3D%2224%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              🎓 Now Available for Students
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Catch the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  Gator Vibe
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium">
                Live, Connect, Belong.
              </h2>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Join the ultimate student community platform where you can:
                <br />• **Discover like-minded peers**
                <br />• **Find perfect roommates** 
                <br />• **Never miss campus events**
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                **Join the Waitlist** →
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 px-8 py-5 text-lg rounded-xl transition-all">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">500+ students waiting</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744320911030-1ab998d994d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1Njk4MjEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diverse group of college students"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}