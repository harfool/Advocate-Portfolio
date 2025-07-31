import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quote, Phone, Mail, Linkedin, Scale } from 'lucide-react';
import cityImage from '@/assets/city-skyline.jpg';

export const ClosingSection = () => {
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
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Floating Legal Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Scale className="absolute top-10 right-10 w-20 h-20 text-accent/20 floating" style={{ animationDelay: '0s' }} />
        <Quote className="absolute bottom-20 left-10 w-16 h-16 text-accent/30 floating" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Legal Quote */}
          <div className={`mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            <Quote className="w-16 h-16 text-accent mx-auto mb-8" />
            <blockquote className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground leading-relaxed italic mb-6">
              "Justice delayed is justice denied, but justice delivered with precision and integrity 
              creates a legacy that transcends time."
            </blockquote>
            <p className="font-sans text-xl text-primary-foreground/80">
              - Advocate Ramkumar Prajapat
            </p>
          </div>

          {/* Call to Action */}
          <div className={`mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Secure Your Legal Victory?
            </h2>
            <p className="font-sans text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Don't let legal challenges stand in your way. With over 12 years of proven expertise 
              and a 95% success rate, we're here to fight for your rights and protect your interests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919829184895?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20with%20Advocate%20Ramkumar%20Prajapat."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold text-lg px-10 py-4 hover-glow">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
              </a>
         
            </div>
          </div>

          {/* Contact Information */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">Call Now</h3>
              <p className="font-sans text-primary-foreground/80">+919829184895</p>
              <p className="font-sans text-sm text-primary-foreground/60">Available 24/7 for emergencies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">Email Us</h3>
              <p className="font-sans text-primary-foreground/80">rkp01041992@gmail.com</p>
              <p className="font-sans text-sm text-primary-foreground/60">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <Linkedin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">Connect</h3>
              <p className="font-sans text-primary-foreground/80">LinkedIn Profile</p>
              <p className="font-sans text-sm text-primary-foreground/60">Professional network</p>
            </div>
          </div>

          {/* Final Statistics */}
          <div className={`border-t border-primary-foreground/20 pt-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.9s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif mb-1">12+</div>
                <div className="font-sans text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif mb-1">150+</div>
                <div className="font-sans text-sm text-primary-foreground/80">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif mb-1">95%</div>
                <div className="font-sans text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-serif mb-1">24/7</div>
                <div className="font-sans text-sm text-primary-foreground/80">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent animate-pulse"></div>
    </section>
  );
};