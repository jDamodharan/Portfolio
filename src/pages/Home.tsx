import { useState, useEffect } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-photo.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  
  useParallax();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden parallax-container">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 decorative-dots opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.3"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl parallax-element" data-speed="0.2"></div>

      {/* Animated Background Text Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="hero-text-bg font-accent"
          style={{
            top: '15%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animationDelay: '0s'
          }}
        >
          GRAPHIC DESIGNER
        </div>
        <div 
          className="hero-text-bg font-accent"
          style={{
            top: '45%',
            right: '0%',
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
            animationDelay: '2s'
          }}
        >
          GRAPHIC DESIGNER
        </div>
        <div 
          className="hero-text-bg font-accent"
          style={{
            bottom: '15%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
            animationDelay: '4s'
          }}
        >
          GRAPHIC DESIGNER
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] fade-in-up"
        >
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-brand-accent animate-pulse" />
                <span className="text-brand-accent font-script text-xl">Hello, I'm</span>
              </div>
              
              <h1 className="font-display text-6xl lg:text-8xl font-bold leading-tight">
                <span className="gradient-accent-text neon-text">Creative</span>
                <br />
                <span className="font-accent">Designer</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg font-body leading-relaxed">
                Transforming <span className="gradient-text font-semibold">bold ideas</span> into 
                <span className="gradient-text font-semibold"> stunning visual experiences</span> through 
                innovative graphic design and user-centered UI/UX solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="glow-button text-white font-semibold text-lg px-8 py-4">
                <span className="font-display">View My Work</span>
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-background font-semibold text-lg px-8 py-4 transition-all duration-300"
              >
                <Download className="mr-3 h-6 w-6" />
                <span className="font-display">Download CV</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative parallax-element" data-speed="0.1">
              {/* Glowing Background Effects */}
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 scale-110 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-brand-secondary/20 rounded-full blur-lg animate-pulse"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand-primary/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20"></div>
                <img
                  src={profileImage}
                  alt="Creative Designer Profile"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="fade-in-up mt-20 pt-16 border-t border-border/30"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: "🎨" },
              { number: "3+", label: "Years Experience", icon: "⚡" },
              { number: "100%", label: "Client Satisfaction", icon: "✨" },
              { number: "24/7", label: "Creative Mindset", icon: "🚀" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold gradient-text font-display mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-body font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;