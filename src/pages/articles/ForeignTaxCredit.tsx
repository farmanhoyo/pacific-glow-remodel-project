import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ForeignTaxCredit = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => window.close()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Close Article
          </Button>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
            Cross Border Tax
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Taxation of Foreign Earned Income (US & CA)
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Amelia Chan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 31, 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you are a US citizen with Canadian sourced income, you may find yourself in a scenario where you have to file both Canadian income taxes, as well as US income taxes (<em>at least US federal taxes</em>). Note, all US citizens and Canadian residents for tax purposes have to report all their worldwide income. This of course may leave you in a sticky situation; possibility for double taxation between Canada and the US.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Fortunately, there are two options available to prevent the double taxation, (i) Foreign tax credit (ii) Foreign Earned Income exclusion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Foreign Tax Credit</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The foreign tax credit is simply an offsetting credit for all foreign taxes paid. For example if you are a US citizen working in Canada, you would have paid <em>income taxes</em> against that income in Canada. When preparing your US taxes, you will report that same income as if you earned it in the US, in which case you would then owe US taxes, such US taxes will then be reduced by the foreign tax credit <em>(in this case income taxes paid in Canada)</em> <strong>. Take notice that Canada applies the same foreign tax credit system to foreign earned income.</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Foreign Earned Income Exclusion</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              This option is available to US taxpayers/citizens with foreign <em>earned</em> income, and basically allows them to exclude all foreign <em>earned</em> income (FORM 2555), up to $112,000 for the year 2022 (indexed to inflation onwards). In layman terms, taxpayers who opt for this exclusion instead of the Foreign Tax Credit, will not have taxable income from foreign sources up to the 112k threshold. Please take notice that only earned income such as employment and self employment income is eligible. Passive income such as dividends, royalties etc. is not eligible for the exclusion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Option is Better?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The foreign tax credit works better if your foreign income was earned in a jurisdiction that has higher income taxes than your home jurisdiction. A good example would be US taxpayers earning their income from Canada (<em>Canada has relatively higher taxes</em>). On the other hand, the foreign income exclusion works best for those earning their foreign income from jurisdictions with no income taxes (<em>tax havens</em>) or relatively lower income taxes than the US.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If your income is higher than 112k, you also have an option to apply both the foreign income exclusion on the first 112k and then the foreign tax credit on the balance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              As for Canadian tax payers, keep in mind that the exclusion is not available, only the <strong>foreign tax credit</strong> is available in addition to foreign income exemption (<em>if specifically exempted by a treaty</em>).
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <p className="text-emerald-800 font-semibold mb-2">Cross-Border Tax Complexity?</p>
              <p className="text-emerald-700 mb-4">
                US-Canada tax treaties and foreign income rules can be intricate. Our cross-border tax specialists are here to help optimize your tax position.
              </p>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => {
                  window.opener?.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.close();
                }}
              >
                Get Expert Guidance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignTaxCredit;