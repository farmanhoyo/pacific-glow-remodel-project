import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Award } from 'lucide-react';

const Hero = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-24 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-gray-700">Professional Accounting & Tax Services</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  PAC
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Consulting
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Accounting | Tax and Business Strategy
              </p>
            </div>

            {/* Key Services */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: TrendingUp, text: "Business Strategy Planning & Tax Strategy Planning" },
                { icon: Shield, text: "Cross Border Tax Services & Compliance" },
                { icon: CheckCircle, text: "Corporate & Personal Tax Services" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                onClick={handleGetInTouch}
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleViewServices}
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all duration-300"
              >
                View Our Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Expert</div>
                <div className="text-sm text-gray-600">Tax Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Cross</div>
                <div className="text-sm text-gray-600">Border Tax</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Business</div>
                <div className="text-sm text-gray-600">Strategy</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80"
                  alt="Professional accounting services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tax Strategy</p>
                  <p className="text-2xl font-bold text-green-600">Planning</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-float delay-1000">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Cross Border</p>
                  <p className="text-2xl font-bold text-blue-600">Tax Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
