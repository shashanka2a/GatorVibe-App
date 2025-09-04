import { ReactNode, useState } from "react";
import { Card, CardContent } from "./card";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverContent?: ReactNode;
}

export function AnimatedCard({ children, className = "", hoverContent }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`transition-transform duration-300 ${isHovered && hoverContent ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
          {children}
        </div>
        
        {hoverContent && (
          <div className={`absolute inset-0 flex items-center justify-center bg-white/95 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            {hoverContent}
          </div>
        )}
      </div>
    </Card>
  );
}