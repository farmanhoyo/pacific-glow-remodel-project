
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
      {/* Elegant gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(148, 163, 184, 0.15) 60px,
            rgba(148, 163, 184, 0.15) 120px
          )`
        }}></div>
        {/* Subtle radial overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-24 animate-fade-in">
          {/* Main Headline with elegant background highlight */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-16 leading-tight tracking-tight">
            <span className="block text-gray-900 mb-4">Accounting|</span>
            <span className="inline-block bg-gradient-to-r from-gray-200/90 via-gray-300/80 to-gray-200/90 px-8 py-4 text-gray-900 shadow-lg">
              Tax and Business Strategy
            </span>
          </h1>

          {/* CTA Buttons with premium styling */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-7 text-lg font-semibold rounded-none shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              contact us
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={handleScrollToServices}
              size="lg" 
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-7 text-lg font-semibold rounded-none shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              our services
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
