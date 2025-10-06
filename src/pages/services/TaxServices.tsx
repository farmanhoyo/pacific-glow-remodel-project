import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TaxServices = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Tax Services</h1>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporations</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our client base includes large and small to medium sized businesses. Our expertise includes corporate reorganizations as well as shareholder structures.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sole Proprietors</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For the self employed and sole proprietor clients, we have expertise in tax planning (owner manager strategies) in addition to routine tax filings.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>T2</strong> Corporate tax returns, <strong>T3</strong> Trust returns, <strong>T1134</strong> Foreign Affiliate Reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>Corporate Reorganizations</strong> which includes <strong>section 85 and 86 reorganizations</strong>, <strong>acquisition of control</strong> and <strong>corporate windings</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Real Estate holding tax strategies (Holding and operating company structures)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>GST /HST</strong> filings, for non-profits we have expertise in <strong>GST/HST Rebates</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Tax Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Preparation</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our tax preparation service includes, T1 and T3 returns, as well as information returns T1135,T1161 etc. We also prepare and file GST/HST Housing Rebates, HST on vacant land etc.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Planning</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We advise clients on their long term tax strategies, this includes retirement and succession planning, as well as structuring registered accounts in a tax efficient manner
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>T1 tax returns, T3 trust returns and Information Returns (T1135, <strong>T1161</strong> etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>GST/HST Housing Rebates</strong>, <strong>HST on Vacant Land</strong> <em>(GST 62/ GST 34)</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>Retirement and succession planning</strong>, including owner manager strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>Tax planning services</strong> which includes structuring, RRSPs, TFSAs, RESP, Trusts, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span><strong>Cross Border Personal tax services</strong>, including Non-Resident, Deemed Resident and Immigration tax matters.</span>
              </li>
            </ul>
          </div>

          <div className="bg-teal-700 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-lg">Contact us today to discuss your tax needs.</p>
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

export default TaxServices;
