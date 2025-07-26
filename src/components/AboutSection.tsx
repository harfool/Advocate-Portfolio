import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

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
    <section ref={sectionRef} className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-5xl lg:text-6xl font-bold text-primary mb-6 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            About Me
          </h2>
          <p className={`font-sans text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.2s' }}>
            Dedicated to upholding justice and providing exceptional legal representation 
            with a track record of success in India's most prestigious courts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Legal Philosophy</h3>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                My approach to law is grounded in the belief that every client deserves 
                unwavering advocacy and meticulous attention to detail. I combine traditional 
                legal wisdom with modern strategic thinking to deliver results that matter.
              </p>
            </div>

            <div className={`${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Experience</h3>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                With over 12 years of practice, I have successfully represented clients 
                across various legal domains, from complex criminal cases to intricate 
                corporate matters. My courtroom presence and strategic acumen have 
                consistently delivered favorable outcomes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-sans text-foreground">Delhi High Court</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-sans text-foreground">Supreme Court of India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="font-sans text-foreground">2012 - Present</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="font-sans text-foreground">150+ Cases Won</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="space-y-6">
            <Card className={`practice-card ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  <h4 className="font-serif text-2xl font-bold text-primary">Education</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">LLB</Badge>
                    <p className="font-sans text-foreground">
                      Bachelor of Laws from Delhi University Law Faculty
                    </p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">LLM</Badge>
                    <p className="font-sans text-foreground">
                      Master of Laws in Criminal Law from Jamia Millia Islamia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`practice-card ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="w-8 h-8 text-accent" />
                  <h4 className="font-serif text-2xl font-bold text-primary">Specializations</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent text-accent-foreground">Criminal Defense</Badge>
                  <Badge className="bg-accent text-accent-foreground">Corporate Law</Badge>
                  <Badge className="bg-accent text-accent-foreground">Civil Litigation</Badge>
                  <Badge className="bg-accent text-accent-foreground">Constitutional Law</Badge>
                  <Badge className="bg-accent text-accent-foreground">Arbitration</Badge>
                  <Badge className="bg-accent text-accent-foreground">Commercial Disputes</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};