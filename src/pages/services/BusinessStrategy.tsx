import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BusinessStrategy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Business Strategy</h1>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              As entrepreneurs we know what it takes to run a successful business. Our service offering includes; <strong>Business Strategy Planning</strong>, <strong>Tax Strategy Planning</strong>, <strong>Business Plans</strong>, <strong>Feasibility Studies</strong>, <strong>Human Resource Consulting</strong> and other general business advisory services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Planning</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For start ups looking for financing, we have expertise in developing business plans for businesses of all sizes. For established businesses we can provide you expertise in budgeting, financial analysis and human resource planning.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy Planning</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Visionary entrepreneurs always need to have a clear and concise roadmap on how to best achieve their long term goals. A strategy Plan is one of the most important and effective tools that can be used to provide this roadmap.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feasibility Studies</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Planning on launching a new venture? A feasibility study is therefore a must. In layman terms a feasibility study assesses your business idea from a financial, legal and operational perspective for the purposes of determining its attainability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Strategies</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We advise corporate clients on a wide range of tax strategies available to them to meet their big picture business needs in a tax efficient manner. This includes Corporate Reorganisations, Acquisition of Control Tax Strategies (Asset vs Share Purchases etc.)
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ancillary Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Human Resource Consulting</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As entrepreneurs we know that Human Resource matters can be a huge time drain. That's why we partner with expert HR companies to provide you expert HR consulting services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Capital / Debt Financing</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use our relationships with large financial institutions and Business Angels to help your business access the capital it needs at competitive interest rates.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Incorporation Services</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We work with large boutique law firm (McCarthy Tetrault , Gowlings etc.) to incorporate your business with them at deeply discounted prices.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Grants</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              There are numerous government grants available to you that we can help you navigate through. We have experience in assisting our clients in obtaining SR&ED tax credits, NRC IRAP grants and other grants.
            </p>
          </div>

          <div className="bg-teal-700 text-white p-8 rounded-lg text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Develop Your Strategy?</h3>
            <p className="mb-6 text-lg">Contact us today to discuss your business strategy needs.</p>
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
              Get In Touch
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BusinessStrategy;
