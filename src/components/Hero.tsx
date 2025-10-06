
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with diagonal teal pattern - matching original with teal theme */}
      <div className="absolute inset-0 bg-gray-100">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(20, 184, 166, 0.15) 35px,
            rgba(20, 184, 166, 0.15) 70px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-20">
          {/* Main Headline - matching original style */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800 leading-tight">
            Accounting| Tax and Business Strategy
          </h1>

          {/* CTA Buttons - matching original */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 text-lg font-semibold rounded-none shadow-lg transition-all duration-300"
            >
              CONTACT US
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={handleScrollToServices}
              size="lg" 
              variant="outline"
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg font-semibold rounded-none shadow-lg transition-all duration-300"
            >
              OUR SERVICES
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
