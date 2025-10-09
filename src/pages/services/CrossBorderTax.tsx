import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CrossBorderTax = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="container mx-auto px-4 py-32 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Cross Border Tax</h1>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our cross border tax practice includes the following:
            </p>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed"><strong>CRA compliance certificates</strong> for non resident vendors in real estate transactions (FORM T2062)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed"><strong>IRS Withholding certificates</strong> for non-resident vendors in real estate transactions (FORM 8288-B)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed"><strong>US Tax ID applications</strong> known as (ITIN), Canada Tax ID applications for Non-Resident taxpayers (ITN)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed"><strong>US personal tax returns</strong> (1040/1040NR); <strong>US Corporate Tax Returns</strong>-Form 1120; <strong>Partnership returns</strong> Form 1165 and <strong>Estates and Trusts</strong>-Form 1041</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="leading-relaxed"><strong>Tax Treaty Exemption applications</strong> (W-8ECI, W8BEN-E, W8BEN etc.)</span>
              </li>
            </ul>
          </div>

          <div className="bg-teal-700 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Cross Border Tax Assistance?</h3>
            <p className="mb-6 text-lg">Contact us today to discuss your cross border tax needs.</p>
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
              Contact Us
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CrossBorderTax;
