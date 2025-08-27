import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Section85Rollover = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => window.close()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Close Article
          </Button>
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
            Tax
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Section 85 Rollover
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Prosper Chenjelani</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 1, 2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h4 className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              Tax free transfer of assets to a corporation under section 85 Rollover provisions
            </h4>

            <p className="text-gray-700 leading-relaxed mb-8">
              In this article, I will explore two scenarios in which section section rollover provisions are most useful to taxpayers, <em>(i)</em> transfer of personally owned assets <em>(sole proprietorship)</em> to a corporation and <em>(ii)</em> transfer of assets from one corporation to another related/associated corporation, e.g. from holding company to operating company
            </p>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Transfer personally owned assets to corporation</h5>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A small business owner operating a sole proprietorship, may decide to incorporate the business; for income tax purposes, an incorporated entity is considered a separate person from the sole proprietorship. This means any assets previously owned by the sole proprietorship will need to be transferred to the incorporated entity.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Take notice that for income tax purposes, each time there is a transfer of assets from one <strong>person/entity</strong> to another, a disposition is deemed to have occurred at fair value and therefore taxable income may be triggered as a result.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A sole proprietorship transferring inventory to the newly incorporated entity for example may be deemed to have sold such inventory at its fair market value and therefore taxable income may be recognized.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Section 85.1 of the income tax act allows the sole proprietor in this case to transfer the inventory at its tax cost instead of its fair market value, and therefore deferring any taxable income.
            </p>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Transfer assets between related corporations</h5>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              An existing corporation may for example decide to <strong>spin off</strong> some of its operations into another separate entity, or a holding company may wish to transfer assets to its operating company.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In both instances, transfer of assets to another entity is deemed to have occurred at fair value and taxable income may be triggered to the transferor.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              In order to provide relief and therefore defer any potential taxable income, section 85.1 rollover provisions can be utilized to defer any such taxable income.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Remember any transfer of assets from one entity/person to another would be considered a deemed disposition at fair value which may trigger taxable income and section 85.1 was enacted to provide relief and deferral of such taxable income.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">How does Section 85 transfer work</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The process is initiated by filing a section 85.1 election form (Form T2057), in this form the taxpayer will be able to identify assets being transferred, the transfer amount of each asset. The transferor may elect to transfer at tax cost, and therefore deferring any taxable income.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h6 className="font-semibold text-gray-900 mb-4">Illustration of section 85 provision</h6>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2"></th>
                      <th className="text-right py-2">Customer Lists</th>
                      <th className="text-right py-2">Inventory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1">FMV</td>
                      <td className="text-right py-1">12,000.00</td>
                      <td className="text-right py-1">100,000.00</td>
                    </tr>
                    <tr>
                      <td className="py-1">Tax Cost</td>
                      <td className="text-right py-1">1.00</td>
                      <td className="text-right py-1">65,000.00</td>
                    </tr>
                    <tr>
                      <td className="py-1">Tax Gain/Loss</td>
                      <td className="text-right py-1">11,999.00</td>
                      <td className="text-right py-1">35,000.00</td>
                    </tr>
                    <tr>
                      <td className="py-1">Elected Amount</td>
                      <td className="text-right py-1">1,000.00</td>
                      <td className="text-right py-1">65,000.00</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-semibold">Gain Deferred</td>
                      <td className="text-right py-1 font-semibold">11,000.00</td>
                      <td className="text-right py-1 font-semibold">35,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>The customer lists and Inventory can be transferred to the new corporation at their tax cost of $1 and $65,000 respectively, total 65,001.</li>
              <li>By doing this, a taxable gain of 35,000 (Inventory) is deferred and so is any taxable capital gains from customer lists.</li>
              <li>Notice, without section 85.1, these assets will be deemed to have been transferred at Fair Market Value and therefore triggering taxable income.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              After the transfer the new corporation will now own the same assets at the transfer amount, in this case, the tax cost, $65,000 for inventory and $1 for Customer lists (Eligible capital property).
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Please also take notice of the following points:
            </p>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>Section 85.1 does not allow for transfer of asset that may trigger a tax loss, any such losses are denied, therefore tax payers are always advised to transfer those assets at fair market value outside of section 85.1</li>
              <li>As part of payment for the assets transferred, the transferor is required to receive at least 1 share of the transferee corporation for the section 85 election to be considered valid.</li>
              <li>If the taxpayer has bad debt accounts from their accounts receivables, taxpayers are advised to transfer those receivables using section 22 election, mainly because under section 85 bad debts are not allowable.</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-8">
              <p className="text-purple-800 font-semibold mb-2">Important Note</p>
              <p className="text-purple-700 mb-2">
                This article is simply an executive overview of section 85.1 provisions. Taxpayers are advised to consult a tax professional to assist them as this is a complex subject matter.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <p className="text-gray-800 font-semibold mb-2">About the Author</p>
              <p className="text-gray-700 mb-2">
                <strong>Prosper Chenjelani</strong>
              </p>
              <p className="text-gray-700">
                Prosper is the principal for P.A.C Consulting.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="text-purple-800 font-semibold mb-2">Need Section 85 Assistance?</p>
              <p className="text-purple-700 mb-4">
                Section 85 rollovers are complex tax matters. Our experienced team can guide you through the process and ensure proper compliance.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  window.opener?.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.close();
                }}
              >
                Get Professional Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section85Rollover;