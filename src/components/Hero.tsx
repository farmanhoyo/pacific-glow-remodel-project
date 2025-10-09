
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20">
          <Shield className="w-16 h-16 text-blue-600 animate-float" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <TrendingUp className="w-20 h-20 text-blue-500 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-32 right-40 opacity-20">
          <Users className="w-14 h-14 text-blue-600 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-20 md:py-24 px-4">
          {/* Visual frame - Outer container for borders */}
          <div className="mb-12 md:mb-16 relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 md:w-24 md:h-24 border-t-4 border-l-4 border-blue-600/20 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 border-b-4 border-r-4 border-blue-600/20 rounded-br-3xl"></div>
            
            {/* Inner container with safe padding */}
            <div className="px-12 py-10 md:px-28 md:py-12">
              {/* Headline with visual treatment */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2 md:mb-3 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
                  Accounting, Tax and
                </span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text">
                  Business Strategy
                </span>
              </h1>
            </div>
          </div>

          {/* Descriptive text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 px-4">
            We use our broad expertise and knowledge in the finance, technology and the legal landscape 
            to help you execute on your business strategy needs.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center px-4">
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-12 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              contact us
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
            </Button>
            <Button 
              onClick={handleScrollToServices}
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 md:px-12 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              our services
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
