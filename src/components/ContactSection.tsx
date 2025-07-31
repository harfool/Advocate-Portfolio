import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Consultation request submitted successfully! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', caseType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = () => {
        const whatsappMessage = `Hello, I would like to schedule a consultation with Advocate Ramkumar Prajapat.

Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Case Type: ${formData.caseType}
Message: ${formData.message}

Please let me know your availability for a consultation.`;

    const whatsappUrl = `https://wa.me/919829184895?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Opening WhatsApp with your consultation details!');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['P-21, R.K. Purani Colony', 'Purana Jorawar Pur Ke Paas', 'Gulabpura, Bhilwada (Raj.)']
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 98291-84895', '+91 81188-49583']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['rkp01041992@gmail.com', 'contact@ramkumarprajapat.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM', 'Emergency: 24/7']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-5xl lg:text-6xl font-bold text-primary mb-6 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
            Contact Us
          </h2>
          <p className={`font-sans text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.2s' }}>
            Ready to discuss your legal matter? Schedule a consultation with Advocate Ramkumar Prajapat 
            and take the first step towards resolving your legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.4s' }}>
            <Card className="practice-card">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="font-sans text-foreground/80">
                    Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-sans font-semibold text-primary">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans font-semibold text-primary">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sans font-semibold text-primary">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                        placeholder="+919829184895"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caseType" className="font-sans font-semibold text-primary">
                        Case Type *
                      </Label>
                      <select
                        id="caseType"
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-accent transition-all duration-300"
                      >
                        <option value="">Select case type</option>
                        <option value="criminal">Criminal Defense</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="civil">Civil Litigation</option>
                        <option value="family">Family Law</option>
                        <option value="constitutional">Constitutional Law</option>
                        <option value="arbitration">Arbitration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-sans font-semibold text-primary">
                      Case Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Please provide brief details about your case..."
                    />
                  </div>

                  <div className="grid gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-gold text-lg py-4 hover-glow"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>Schedule Consultation</span>
                        </div>
                      )}
                    </Button>
                    
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">or</span>
                    </div>
                    
                    <Button 
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      variant="outline"
                      className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500 text-lg py-4"
                      disabled={!formData.name || !formData.phone}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Direct
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className={`practice-card ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-primary mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="font-sans text-foreground/80">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency Contact */}
            <Card className={`practice-card bg-accent/5 border-accent/20 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6 text-center">
                <h4 className="font-serif text-xl font-bold text-primary mb-3">
                  Emergency Legal Assistance
                </h4>
                <p className="font-sans text-foreground/80 mb-4">
                  For urgent legal matters requiring immediate attention, call our emergency hotline.
                </p>
                <a
                  href="https://wa.me/919876543210?text=EMERGENCY%3A%20I%20need%20immediate%20legal%20assistance.%20Please%20call%20me%20urgently."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-gold">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Hotline
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};