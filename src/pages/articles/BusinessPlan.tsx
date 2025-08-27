import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => window.close()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Close Article
            </Button>
            <div className="text-white/80 text-sm font-medium">pac613.ca</div>
          </div>
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
            Strategy
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Strategy Plan or Business Plan
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Prosper Chenjelani</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 24, 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h4 className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              Does your business need a strategy plan or a business plan, what is the difference? Read to find out.
            </h4>

            <p className="text-gray-700 leading-relaxed mb-8">
              Most business owners often assume a business plan and a strategy plan are the same. They are different; however every business or organisation <em>(if already established)</em> needs both, Start ups may start with only a Business plan, but ultimately will need both as the business grows. So what is the difference between the two?
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Business Plan</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A business plan is all about your current state of business affairs, it covers topics such as what you are currently doing and who is doing it. A typical business plan highlights and answers the following unexhausted topics.
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>your management team and their capabilities,</li>
              <li>your products and how they are different from the competition.</li>
              <li>your competition and what you are doing to fend them off.</li>
              <li>your customers and what you are doing to keep them satisfied.</li>
              <li>your current and projected financial position etc.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Business plans are often prepared for banks and or investors and in some cases for government agencies in order for them to issue licenses and permits to your business etc. For the most part; these end users will use your business plan to assess viability of your business, typically by assessing the resources you have available (<em>i.e. human, financial, knowledge or technological resources</em>).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategy Plan</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I like to think of a strategy plan as road map to achieving your long term goals. A strategy plan often starts with identifying long term goals (<em>this assumes you already articulated your vision and mission statements</em>), once your goals are identified the next step is then to design a roadmap (the plan) to achieving those goals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Remember, a strategy plan is just a plan and will remain a plan unless implemented, therefore its important to also have an implementation plan in place to ensure you actually achieve those big goals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Performance management and evaluation tools such as <strong>Balanced Scorecards</strong> can be used to ensure all your team members <em>(employees)</em> understand what part they can play in achieving company goals. Balanced scorecards are especially effective If used along with incentive- performance bonusses etc.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Strategy plans along with accompanying implementation and evaluation tools are often used internally, typically by the board and/or senior management. For larger organisations; the board is usually responsible for designing the strategy plan and the management team is usually responsible for implementing it. Smaller organisations typically have senior management teams wearing different hats between the board and management of the organisation, and were necessary delegating to supervisors.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <p className="text-blue-800 font-semibold mb-2">About the Author</p>
              <p className="text-blue-700 mb-2">
                <strong>Prosper Chenjelani</strong>
              </p>
              <p className="text-blue-700">
                Prosper is the Principal for PAC Consulting and Director for PAC Capital Inc.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-semibold mb-2">Need Strategic Planning Help?</p>
              <p className="text-blue-700 mb-4">
                Whether you need a business plan or strategic planning guidance, our experienced team can help you develop the right roadmap for success.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  window.opener?.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.close();
                }}
              >
                Start Planning Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;