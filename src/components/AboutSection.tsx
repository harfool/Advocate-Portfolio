import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, MapPin, Calendar, Scale, Gavel, Building } from 'lucide-react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-gradient">
      {/* Background Pattern - Similar to Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5"></div>
      
      {/* Floating Legal Icons - Similar to Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Scale className="absolute top-20 right-10 w-8 h-8 md:w-12 md:h-12 text-accent/30 floating" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-40 left-20 w-10 h-10 md:w-16 md:h-16 text-accent/20 floating" style={{ animationDelay: '1s' }} />
        <Building className="absolute bottom-32 right-20 w-9 h-9 md:w-14 md:h-14 text-accent/25 floating" style={{ animationDelay: '2s' }} />
      </div>    

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text Section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
                Meet Your Legal Advocate
              </h1>
              <h2 className={`text-lg md:text-xl lg:text-2xl font-sans text-muted-foreground ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.3s' }}>
                Dedicated to upholding justice with proven expertise
              </h2>
            </div>
            
            {/* Legal Philosophy */}
            <div className={`${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
              <p className="font-sans text-base lg:text-lg text-foreground/80 leading-relaxed">
                My approach to law combines traditional legal wisdom with modern strategic thinking. 
                Every client deserves unwavering advocacy and meticulous attention to detail to deliver 
                results that matter.
              </p>
            </div>

            {/* Experience Stats - Similar to Hero Stats */}
            <div className={`grid grid-cols-2 gap-4 lg:gap-8 pt-6 lg:pt-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.9s' }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 " />
                  <span className="text-2xl lg:text-3xl font-bold  font-serif">10+</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/80 font-sans">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 " />
                  <span className="text-2xl lg:text-3xl font-bold  font-serif">100+</span>
                </div>
                <div className="text-xs lg:text-sm text-foreground/80 font-sans">Cases Won</div>
              </div>
            </div>

            {/* Court Practice */}
            <div className={`grid grid-cols-1 gap-3 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 " />
                <span className="font-sans text-sm lg:text-base text-foreground">Rajasthan High Court</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards Section */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full max-w-md">
              {/* Education Card */}
              <Card className="practice-card mb-6 hover-lift shadow-2xl">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                    <h4 className="font-serif text-lg lg:text-xl font-bold text-primary">Education</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">LLM</Badge>
                      <p className="font-sans text-sm lg:text-base text-foreground font-medium">
                        Master of Laws
                      </p>
                      <p className="font-sans text-xs lg:text-sm text-foreground/70">
                        Advanced Legal Studies
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">LLB</Badge>
                      <p className="font-sans text-sm lg:text-base text-foreground font-medium">
                        Bachelor of Laws
                      </p>
                      <p className="font-sans text-xs lg:text-sm text-foreground/70">
                        Legal Foundation & Practice
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">MA</Badge>
                      <p className="font-sans text-sm lg:text-base text-foreground font-medium">
                        Master of Arts
                      </p>
                      <p className="font-sans text-xs lg:text-sm text-foreground/70">
                        Advanced Academic Studies
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">B.Ed</Badge>
                      <p className="font-sans text-sm lg:text-base text-foreground font-medium">
                        Bachelor of Education
                      </p>
                      <p className="font-sans text-xs lg:text-sm text-foreground/70">
                        Educational Methodology & Teaching
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

             
             

              {/* Golden Accent Border - Similar to Hero */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-accent/10 rounded-3xl -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
