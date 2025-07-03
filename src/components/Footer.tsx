
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  PAC Consulting
                </h3>
                <p className="text-gray-400 font-medium">Accounting | Tax and Business Strategy</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Providing comprehensive accounting, tax preparation, and business advisory services 
              with expertise in cross border tax solutions and business strategy planning.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Stay Updated</h4>
              <p className="text-gray-400">Get the latest tax tips and business insights delivered to your inbox.</p>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 rounded-xl h-12"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 rounded-xl">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-4">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Business Strategy",
                "Tax Services",
                "Cross Border Tax",
                "Business Planning",
                "Strategy Planning",
                "Feasibility Studies",
                "Tax Strategies",
                "Human Resource Consulting"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-4">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Phone</h5>
                  <p className="text-gray-300">(613) 695-2955</p>
                  <p className="text-sm text-gray-400">Contact us anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Location</h5>
                  <p className="text-gray-300">Suite 204, 78 George Street</p>
                  <p className="text-sm text-gray-400">Ottawa, ON</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-xl border border-blue-500/20">
              <h5 className="font-semibold text-white mb-2">Office Visits</h5>
              <p className="text-gray-300 text-sm">By appointment only</p>
              <p className="text-gray-400 text-xs mt-1">Please contact us to schedule</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2025 PAC Consulting. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Professional</span>
              <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold text-xs">
                ACCOUNTING SERVICES
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
