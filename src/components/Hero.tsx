
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
      {/* Sophisticated multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-gray-100">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 80px,
            rgba(100, 116, 139, 0.12) 80px,
            rgba(100, 116, 139, 0.12) 160px
          )`
        }}></div>
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/40 to-transparent"></div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto py-28 animate-fade-in">
          {/* Main Headline with premium styling */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-16 leading-[1.15] tracking-tight">
            <span className="block text-gray-900 mb-6 font-extrabold">Accounting|</span>
            <span className="inline-block relative">
              {/* Background box with gradient and shadow */}
              <span className="absolute inset-0 bg-gradient-to-r from-gray-300/70 via-gray-200/80 to-gray-300/70 blur-sm"></span>
              <span className="relative inline-block bg-gray-200/90 px-10 py-5 text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-l-4 border-r-4 border-gray-400/40">
                Tax and Business Strategy
              </span>
            </span>
          </h1>

          {/* CTA Buttons with premium effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleContactUs}
              size="lg" 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-14 py-8 text-lg font-bold rounded-none shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 border-b-4 border-blue-800 hover:border-blue-900"
            >
              contact us
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            <Button 
              onClick={handleScrollToServices}
              size="lg" 
              variant="outline"
              className="group bg-white border-[3px] border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-14 py-8 text-lg font-bold rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            >
              our services
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
