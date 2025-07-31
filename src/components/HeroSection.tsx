import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import advocatePortrait from '../assets/profile.jpg';
import { Scale, Gavel, Building } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Floating Legal Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Scale className="absolute top-20 left-10 w-8 h-8 md:w-12 md:h-12 text-accent/30 floating" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-40 right-20 w-10 h-10 md:w-16 md:h-16 text-accent/20 floating" style={{ animationDelay: '1s' }} />
        <Building className="absolute bottom-32 left-20 w-9 h-9 md:w-14 md:h-14 text-accent/25 floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4 mt-12 lg:mt-16">
              <h1 className={`hero-title text-3xl md:text-4xl lg:text-5xl font-bold ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
                Ramkumar Prajapat
              </h1>
              <h2 className={`hero-subtitle text-lg md:text-xl lg:text-2xl ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.3s' }}>
                Advocate (Rajasthan High Court)
              </h2>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.9s' }}>
              <a
                href="https://wa.me/919829184895?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Advocate%20Ramkumar%20Prajapat."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 hover-glow w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </a>
            </div>

            {/* Achievement Stats */}
            <div className={`grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent font-serif">100+</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80 font-sans">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent font-serif">10+</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80 font-sans">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent font-serif">95%</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80 font-sans">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative">
                <div className="w-60 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img 
                  src={advocatePortrait}
                  alt="Advocate Ramkumar Prajapat" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              {/* Golden Accent Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-accent/10 rounded-3xl -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm font-sans">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
