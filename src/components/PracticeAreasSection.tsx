import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Building2, Gavel, Users, FileText, Briefcase } from 'lucide-react';

const practiceAreas = [
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Comprehensive criminal defense including white-collar crimes, fraud cases, and serious criminal charges.',
    features: ['Murder & Assault Cases', 'Economic Offences', 'Cyber Crimes', 'Bail Applications']
  },
  {
    icon: Building2,
    title: 'Corporate Law',
    description: 'Strategic corporate legal advisory covering mergers, acquisitions, compliance, and business structuring.',
    features: ['M&A Transactions', 'Corporate Compliance', 'Contract Drafting', 'Regulatory Affairs']
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    description: 'Expert representation in civil disputes, property matters, and commercial litigation.',
    features: ['Property Disputes', 'Contract Violations', 'Tort Claims', 'Injunctive Relief']
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Sensitive handling of family disputes including divorce, custody, and matrimonial issues.',
    features: ['Divorce Proceedings', 'Child Custody', 'Alimony Cases', 'Domestic Violence']
  },
  {
    icon: FileText,
    title: 'Constitutional Law',
    description: 'Specialized practice in constitutional matters and fundamental rights protection.',
    features: ['Writ Petitions', 'PIL Cases', 'Fundamental Rights', 'Administrative Law']
  },
  {
    icon: Briefcase,
    title: 'Arbitration',
    description: 'Alternative dispute resolution through arbitration and mediation services.',
    features: ['Commercial Arbitration', 'International Disputes', 'Mediation Services', 'Enforcement']
  }
];

export const PracticeAreasSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-5xl lg:text-6xl font-bold text-primary mb-6 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            Practice Areas
          </h2>
          <p className={`font-sans text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.2s' }}>
            Comprehensive legal services across multiple domains with specialized expertise 
            and proven track record in each practice area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className={`practice-card group ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${0.1 * index}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                      <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="font-sans text-foreground/80 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-semibold text-primary text-sm uppercase tracking-wide">
                      Key Services:
                    </h4>
                    <ul className="space-y-1">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="font-sans text-sm text-foreground/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-primary rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary opacity-90"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Need Legal Assistance?
              </h3>
              <p className="font-sans text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert legal advice tailored to your specific needs. Schedule a consultation 
                to discuss your case and explore your legal options.
              </p>
              <button className="btn-gold hover-glow text-lg px-10 py-4">
                Schedule Free Consultation
              </button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};