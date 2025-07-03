
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">PAC 613</h4>
                <p className="text-sm text-gray-400">Professional Accounting Corporation</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for comprehensive accounting services in the Ottawa region. 
              We're committed to helping your business achieve financial success.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tax Preparation & Planning</li>
              <li>Financial Statement Analysis</li>
              <li>Business Advisory Services</li>
              <li>Audit & Assurance</li>
              <li>Payroll Services</li>
              <li>Bookkeeping</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">(613) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@pac613.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Ottawa, Ontario</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 PAC 613 Professional Accounting Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
