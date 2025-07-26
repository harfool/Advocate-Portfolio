import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    title: 'Landmark Corporate Fraud Case',
    court: 'Delhi High Court',
    year: '2023',
    category: 'Criminal Defense',
    impact: '₹15M Recovery',
    description: 'Successfully defended a major corporation against fraud allegations, securing complete acquittal and recovery of seized assets.',
    outcome: 'Complete Acquittal',
    duration: '18 months',
    complexity: 'High'
  },
  {
    title: 'Constitutional Rights Protection',
    court: 'Supreme Court of India',
    year: '2022',
    category: 'Constitutional Law',
    impact: 'Precedent Set',
    description: 'Secured landmark judgment protecting fundamental rights in digital privacy case, setting precedent for future cases.',
    outcome: 'Favorable Judgment',
    duration: '24 months',
    complexity: 'Very High'
  },
  {
    title: 'Multi-Million Corporate Merger',
    court: 'NCLT Delhi',
    year: '2023',
    category: 'Corporate Law',
    impact: '₹500M Deal',
    description: 'Led legal team for complex merger transaction, navigating regulatory approvals and stakeholder negotiations.',
    outcome: 'Successful Completion',
    duration: '12 months',
    complexity: 'High'
  },
  {
    title: 'International Arbitration Win',
    court: 'SIAC Singapore',
    year: '2022',
    category: 'Arbitration',
    impact: '₹25M Award',
    description: 'Secured favorable arbitration award in complex international commercial dispute involving multiple jurisdictions.',
    outcome: 'Award Granted',
    duration: '20 months',
    complexity: 'Very High'
  }
];

export const CaseStudiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);
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

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'bg-orange-500';
      case 'Very High': return 'bg-red-500';
      default: return 'bg-accent';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-5xl lg:text-6xl font-bold text-primary mb-6 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            Notable Case Studies
          </h2>
          <p className={`font-sans text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.2s' }}>
            A selection of landmark cases that demonstrate our expertise, strategic thinking, 
            and commitment to achieving exceptional results for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case List */}
          <div className="lg:col-span-1 space-y-4">
            {caseStudies.map((caseStudy, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedCase === index ? 'ring-2 ring-accent bg-accent/5' : ''} ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => setSelectedCase(index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-accent text-accent-foreground">
                      {caseStudy.category}
                    </Badge>
                    <span className="font-sans text-sm text-muted-foreground">
                      {caseStudy.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {caseStudy.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">{caseStudy.court}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Details */}
          <div className="lg:col-span-2">
            <Card className={`practice-card h-full ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {caseStudies[selectedCase].category}
                    </Badge>
                    <Badge variant="outline">
                      {caseStudies[selectedCase].court}
                    </Badge>
                    <Badge variant="outline">
                      {caseStudies[selectedCase].year}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                    {caseStudies[selectedCase].title}
                  </h3>
                  <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                    {caseStudies[selectedCase].description}
                  </p>
                </div>

                {/* Case Metrics */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-sans font-semibold text-primary">Outcome</div>
                        <div className="font-sans text-foreground/80">{caseStudies[selectedCase].outcome}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-sans font-semibold text-primary">Duration</div>
                        <div className="font-sans text-foreground/80">{caseStudies[selectedCase].duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-sans font-semibold text-primary">Impact</div>
                        <div className="font-sans text-foreground/80">{caseStudies[selectedCase].impact}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getComplexityColor(caseStudies[selectedCase].complexity)}`}></div>
                      <div>
                        <div className="font-sans font-semibold text-primary">Complexity</div>
                        <div className="font-sans text-foreground/80">{caseStudies[selectedCase].complexity}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Indicator */}
                <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-bold text-primary">Case Won</div>
                      <div className="font-sans text-foreground/80">
                        Successfully achieved client objectives with favorable outcome
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">₹2B+</div>
            <div className="font-sans text-foreground/80">Total Case Value</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">15</div>
            <div className="font-sans text-foreground/80">Landmark Cases</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">8</div>
            <div className="font-sans text-foreground/80">Supreme Court Cases</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent font-serif mb-2">100%</div>
            <div className="font-sans text-foreground/80">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};