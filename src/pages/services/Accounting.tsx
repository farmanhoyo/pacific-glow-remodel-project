import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accounting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Accounting Services</h1>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed">Notice to Reader financial reports, usually required by banks and other financiers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed">Cash projections and analysis for internal management decision making.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed">Budgets and forecasts, used for internal financial planning and decision making.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed">ERP and cloud accounting software implementation or set up.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed">Virtual CFO and subject matter expert, Accounting and Corporate Finance</span>
              </li>
            </ul>
          </div>

          <div className="bg-teal-700 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-lg">Contact us today to discuss your accounting needs.</p>
            <Button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Accounting;
