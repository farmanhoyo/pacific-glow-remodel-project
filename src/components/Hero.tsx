
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
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                <span className="block mb-2">Accounting|</span>
                <span className="block text-blue-600">Tax and Business</span>
                <span className="block text-blue-600">Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Expert financial solutions tailored to help your business thrive. 
                <span className="block mt-2 font-semibold text-gray-700">Professional guidance you can trust.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleContactUs}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                contact us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleScrollToServices}
                size="lg" 
                variant="outline"
                className="bg-white border-2 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 px-10 py-7 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                our services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Trusted</p>
                  <p className="text-xs text-gray-600">Certified CPAs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Expert</p>
                  <p className="text-xs text-gray-600">Team Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Growth</p>
                  <p className="text-xs text-gray-600">Focused Results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
              </div>
              
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                      <span className="text-sm font-medium text-gray-600">Tax Planning</span>
                      <span className="text-sm font-bold text-green-600">Optimized</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                      <span className="text-sm font-medium text-gray-600">Financial Strategy</span>
                      <span className="text-sm font-bold text-blue-600">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                      <span className="text-sm font-medium text-gray-600">Business Growth</span>
                      <span className="text-sm font-bold text-purple-600">Growing</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500">Business Performance</p>
                      </div>
                    </div>
                  </div>
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
