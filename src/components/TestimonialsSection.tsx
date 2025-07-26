import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    designation: 'CEO, TechCorp Industries',
    content: 'Advocate Harfool Gujjar\'s expertise in corporate law is unmatched. He guided us through a complex merger with precision and professionalism. His strategic insights saved us months of legal complications.',
    rating: 5,
    case: 'Corporate Merger Advisory'
  },
  {
    name: 'Priya Sharma',
    designation: 'Managing Partner, Global Enterprises',
    content: 'Outstanding criminal defense representation. Harfool\'s meticulous preparation and courtroom presence secured a favorable outcome in what seemed like an impossible case. Highly recommended.',
    rating: 5,
    case: 'Criminal Defense'
  },
  {
    name: 'Dr. Amit Verma',
    designation: 'Medical Professional',
    content: 'Professional, knowledgeable, and extremely dedicated. Advocate Gujjar handled our family legal matter with great sensitivity and achieved the best possible outcome for all parties involved.',
    rating: 5,
    case: 'Family Law Dispute'
  },
  {
    name: 'Sunita Agarwal',
    designation: 'Business Owner',
    content: 'His expertise in commercial litigation is remarkable. We won a complex property dispute that had been dragging for years. His strategic approach and deep legal knowledge made all the difference.',
    rating: 5,
    case: 'Commercial Litigation'
  },
  {
    name: 'Vikram Singh',
    designation: 'Former IAS Officer',
    content: 'Exceptional constitutional law expertise. Advocate Gujjar successfully represented us in a PIL case at the Supreme Court. His commitment to justice and legal excellence is inspiring.',
    rating: 5,
    case: 'Constitutional Law'
  }
];

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            Client Testimonials
          </h2>
          <p className={`font-sans text-xl text-primary-foreground/80 max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.2s' }}>
            Hear from our clients about their experience working with us and the outcomes we've achieved together.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative max-w-4xl mx-auto mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.4s' }}>
          <Card className="testimonial-card bg-background/95 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Quote className="w-16 h-16 text-accent mx-auto mb-8" />
              
              <div className="mb-8">
                <p className="font-sans text-xl lg:text-2xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <Avatar className="w-16 h-16 border-4 border-accent">
                  <AvatarFallback className="bg-accent text-accent-foreground font-bold text-lg">
                    {getInitials(testimonials[currentIndex].name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="font-serif text-xl font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-sans text-foreground/70">
                    {testimonials[currentIndex].designation}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg px-6 py-3 inline-block">
                <span className="font-sans text-sm font-semibold text-accent">
                  Case: {testimonials[currentIndex].case}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-accent-foreground" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-accent-foreground" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className={`flex justify-center space-x-3 mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent scale-125' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Client Logos Section */}
        <div className={`${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
              Trusted by Leading Organizations
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['TechCorp', 'GlobalEnt', 'MedCare', 'LegalTech', 'FinServ', 'PropDev'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-accent/20 transition-colors duration-300">
                  <span className="font-serif font-bold text-primary-foreground text-lg">
                    {company.slice(0, 2)}
                  </span>
                </div>
                <span className="font-sans text-sm text-primary-foreground/70">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">100+</div>
            <div className="font-sans text-primary-foreground/80">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">4.9/5</div>
            <div className="font-sans text-primary-foreground/80">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">98%</div>
            <div className="font-sans text-primary-foreground/80">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};