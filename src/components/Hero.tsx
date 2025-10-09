
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
      {/* Clean gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(156, 163, 175, 0.15) 50px,
            rgba(156, 163, 175, 0.15) 100px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-24">
          {/* Main Headline with highlighted background */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 leading-tight">
            <span className="block text-gray-900 mb-3">Accounting|</span>
            <span className="inline-block bg-gray-200/85 px-8 py-4 text-gray-900 shadow-lg">
              Tax and Business Strategy
            </span>
          </h1>

          {/* CTA Buttons with clean styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg font-semibold rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              contact us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={handleScrollToServices}
              size="lg" 
              variant="outline"
              className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-7 text-lg font-semibold rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              our services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
