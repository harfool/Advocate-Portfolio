import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import advocatePortrait from '@/assets/advocate-portrait.jpg';
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
        <Scale className="absolute top-20 left-10 w-12 h-12 text-accent/30 floating" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-40 right-20 w-16 h-16 text-accent/20 floating" style={{ animationDelay: '1s' }} />
        <Building className="absolute bottom-32 left-20 w-14 h-14 text-accent/25 floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className={`hero-title ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
                Rajkumar Vaishnav
              </h1>
              <h2 className={`hero-subtitle ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.3s' }}>
                Criminal & NDP's practice and Law Specialist
              </h2>
              <p className={`hero-description max-w-2xl ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
                Delivering justice with precision, integrity, and unwavering commitment. 
                Specialized in criminal defense and corporate legal advisory with over a decade of courtroom excellence.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.9s' }}>
              <a
                href="https://wa.me/9929964641?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Advocate%20Rajkumar%20Vaishnav."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold text-lg px-8 py-4 hover-glow">
                  Schedule Consultation
                </Button>
              </a>
             
            </div>

            {/* Achievement Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif">150+</div>
                <div className="text-sm text-primary-foreground/80 font-sans">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif">12+</div>
                <div className="text-sm text-primary-foreground/80 font-sans">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif">95%</div>
                <div className="text-sm text-primary-foreground/80 font-sans">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img 
                  src="https://res.cloudinary.com/df2maejnd/image/upload/v1753503327/WhatsApp_Image_2025-07-26_at_09.39.41_10b210b9_gguiaw.jpg"
                  alt="Advocate Rajkumar Vaishnav" 
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