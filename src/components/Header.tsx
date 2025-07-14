
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden lg:flex items-center justify-end py-2 text-xs text-gray-600 border-b border-gray-100/30">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Phone className="w-3 h-3" />
              <span>(613) 695-2955</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@pac613.ca</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <MapPin className="w-3 h-3" />
              <span>Suite 204, 78 George Street, Ottawa, ON</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                PAC Consulting
              </h1>
              <p className="text-sm text-gray-600 font-medium">Accounting | Tax and Business Strategy</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('hero')}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleGetInTouch}
              className="hidden lg:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={handleGetInTouch}
                className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              >
                Get In Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
