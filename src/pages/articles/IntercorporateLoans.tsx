import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const IntercorporateLoans = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
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
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
            Tax
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Tax implications of Intercorporate loans
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Prosper Chenjelani</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>November 8, 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In cases where a taxpayer owns multiple incorporated businesses. Its fairly common for there to be intercompany loans between those <em>related</em> corporations. The general guiding principle is that; should these loans be deemed not bona fide and/or not at arm's lengths, they will be included into income of the taxpayer receiving the <em>benefit</em> (loan).
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Bona fide</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              As alluded to above, there will be no tax consequences if the intercorporate loans are <strong>bona fide</strong>, and what is deemed bona fide is determined on a case by case basis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nevertheless, factors that are considered include, whether there are <strong>loan agreements</strong> in place including repayment plans, whether market based interest or prescribed interest is payable on those loans etc.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              In layman terms, there needs to be evidence that the loans were not issued for the purposes of <strong>permanently</strong> transferring funds/value, from one corporation to another with no reasonable expectation of repayment.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Interest free loans</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Can intercorporate interest free loans be considered bona fide such that no tax implications can arise from the interest?
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This question is covered by Section 80.4 (2) of the Income tax act, which I have paraphrased as follows; <em>an interest benefit will be included in the income of a shareholder of a corporation, or persons who are connected to the shareholders of the lender corporation; who by virtue of the shareholding, receives a loan from the corporation.</em>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In effect, this means a shareholder or persons connected to the shareholder of a corporation is deemed to have received interest benefit on any interest free loans that are issued as a result of that shareholding.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>There are exceptions</strong>; Section 80.4 (2) nevertheless excludes corporations that are resident in Canada from this provision. With that in mind; if interest free intercorporate loans are issued between two <strong>related corporations resident in Canada</strong>, no tax consequences arise from the interest that is otherwise deemed payable in that transaction.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h4>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The points to keep in mind here are that; issuing loans between corporations that are related does not result in any tax consequences to the extent the loans are not an attempt to permanently transfer value from one corporation to another. Likewise the loan can also be interest free and no tax consequences can arise to the extent the receiving corporation is a <strong>corporation resident in Canada</strong>
            </p>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="text-purple-800 font-semibold mb-2">Need Professional Tax Advice?</p>
              <p className="text-purple-700 mb-4">
                Corporate tax structures can be complex. Let our experts help you navigate intercorporate loan requirements properly.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  window.opener?.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.close();
                }}
              >
                Get Expert Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntercorporateLoans;