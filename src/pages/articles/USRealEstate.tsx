import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const USRealEstate = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Close Article
            </Button>
            <div className="text-white/80 text-sm font-medium">pac613.ca</div>
          </div>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
            Cross Border Tax
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Canadians with U.S Real Estate-Taxation
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Amelia Chan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 30, 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In this article, I will discuss the U.S and cross border tax treatment of the two common types of income that is derived from real estate i.e. <strong>rental income</strong> and <strong>capital gains on disposition.</strong>
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Rental Income</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Canadians with US Rental Income have two options available to them to meet US tax reporting requirements i.e. 1. <strong>30% withholding on gross rents</strong> and 2. <strong>Reporting Net Rental Income</strong>.
            </p>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Option 1. 30% Withholding</h5>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Taxpayers who opt for this method would not be required to file US Income tax return (1040NR). The withholding agent, likely the property manager or the tenant will withhold 30% of the gross rents and remit them to the IRS. The taxpayer will then be issued FORM 1042s reflecting all the gross rental income and the taxes withheld. The taxpayer may opt to file Income tax return where a refund is expected (<em>however not mandatory</em>)
            </p>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Option 2. Net Rental Income</h5>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Under this method, the Non resident taxpayers will be required to file a US income tax return, Form 1040NR. The taxpayer will be subject to tax based on Net Rental Income after deducting operating expenses.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Take notice that in the US, it is mandatory to include Capital Cost Allowance <strong>(CCA)</strong> in computing Net Rental Income each year (27.5 years straight line), and such CCA can create or increase Net Rental Loss. This of-course is contrary to the tax treatment in Canada where claiming CCA is optional and can not increase or create a Net Rental Income Loss.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Non Resident Taxpayers who are considering opting for this method should complete <strong>Form W-8ECI</strong> and provide it to the withholding agent (property manager, tenant etc.) This will then ensure that the withholding agent will not withhold the default 30% withholding described above.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">Capital Gains on disposition of US Property</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              On disposition of US property by an alien taxpayer (in this case Canadian resident), the default is that there will be a 15% withholding on the proceeds of the disposition, usually the lawyer handling the transaction will be responsible for withholding the 15% from the gross proceeds and remitting to the IRS. There are however some exceptions to the 15% withholding requirement to keep in mind:
            </p>

            <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>if the property sells for less than $USD300,000, there will be no withholding requirement.</li>
              <li>For properties that sell between $USD 300,000 and $USD 1 Million, there will be a 10% withholding instead of the regular 15%</li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
              <em>Please note, the above noted exceptions only apply to the extent the purchaser of the property intends to occupy the property at least 50% of the time for 2 years following the purchase.</em>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If the US alien taxpayer (Canadian) is expecting the taxes payable to be substantially lower than the potential 15% withholding, it is advisable to apply for the <strong><em>Withholding Certificate</em></strong> from the IRS <strong>(FORM 8288-B)</strong>; by completing and submitting this form to IRS, the taxpayer will be able to eliminate or substantially reduce the amount of withholding taxes to be remitted to IRS.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Overall, please take notice that Canadian residents for tax purposes are required to report and pay taxes on worldwide income (<em>unless exempted by treaty or otherwise</em>). This, by derivation means that the income from real estate discussed above still has to be reported in Canada, a <strong>foreign tax credit</strong> will be available for any income taxes otherwise paid/payable in the US.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-semibold mb-2">Need Expert Guidance?</p>
              <p className="text-blue-700 mb-4">
                Cross-border tax matters can be complex. Our team of experts is here to help you navigate these requirements.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  navigate('/#contact');
                }}
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USRealEstate;