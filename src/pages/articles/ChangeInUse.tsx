import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChangeInUse = () => {
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
            Change in use rules for property owners
          </h1>
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Prosper Chenjelani</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>May 5, 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Real estate, including rental and leasing are the top contributors to Canadian GDP; adding about 14% to total GDP. By derivation this means there is relatively higher transaction activity in the real estate market, some of this activity includes <strong><em>change in use</em></strong> <em>(e.g. personal property to income producing property)</em> for which change in use rules may apply.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              It is therefore imperative for property owners to stay abreast of the applicable rules, otherwise costly mistakes can be made. In this article I will explore the following typical scenarios that every residential property owner should be aware.
            </p>

            <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li><em>Changing from principal residence to rental property</em></li>
              <li><em>Changing from rental property to principal residence</em></li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-8">
              The guiding principle to keep in mind as we go through the above listed scenario is that each time there is change in use of property, a disposition is <strong>deemed</strong> to have occurred at fair market value, which in effect also means a capital gain/loss is triggered unless of course exempted.
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">1. Principal Residence to Rental Property</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Its fairly common for property owners to move out of their principal residence into another residence, be it to upgrade or downgrade, or even to effect a temporary move for work or for school etc.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              When this happens; in most cases the property owner either sells the old property or rents it out. Simply selling will be fairly straightforward from tax perspective; however should they rent it out, the property is deemed to have been disposed of at its Fair Market Value (FMV).
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              If the property has always been principal residence, any deemed capital gain will be exempt from tax under the <strong>Principal Residence Exemption</strong> rules. Nevertheless the disposition still needs to be reported in the year the deemed disposition occurred, otherwise penalties may accrue.
            </p>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Temporary change in use, how is section 45(2) election useful?</h5>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              In cases where the property owner is moving out temporarily and therefore rents out the property, whilst temporarily away. The property is deemed to have been disposed of (<em>because of the change in use</em>) and immediately acquired back as rental property.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Because rental properties do not qualify for principal residence exemption, that means should the property increase in value during the period its rented out, that increase in value will trigger taxable capital gains, unless the taxpayer makes an election under section 45(2) of the income tax act.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              By making this election, the taxpayer would be deemed to not have changed use of the property and therefore will preserve the principal residence exemption for up to 4 years, this on condition the taxpayer does not claim CCA against the property. Note, an election in this case is simply a letter sent along with the tax return for the applicable year explaining that you are electing under section 45(2)
            </p>

            <h4 className="text-2xl font-bold text-gray-900 mb-6">2. Rental Property to Principal Residence</h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We have already established that a deemed disposition is triggered in this scenario. Important to note here is that the Principal Residence Exemption doesn't apply in this case since this would not be personal use property (primary residence) at the time of change in use, which means a taxable capital gain may result.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Again the income tax act allows for deferral of the capital gain until the property is eventually sold, the deferral is effected by making a <strong><em>section 45 (3) election</em></strong>, which is simply a letter the taxpayer sends to CRA making the election. Remember, you can only qualify to make this election if you did not at any time claim CCA against the property.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="text-purple-800 font-semibold mb-2">Property Tax Questions?</p>
              <p className="text-purple-700 mb-4">
                Property tax elections and change-in-use rules can be complex. Our experts can help ensure you're making the right decisions.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  window.opener?.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.close();
                }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeInUse;