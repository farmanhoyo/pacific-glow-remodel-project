
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Corporate tax (T2 ,GST/HST) returns\n\nPersonal Tax (T1) ,(T3)Returns\n\nCorporate Reorganizations\n\nReal Estate Tax Consulting",
      features: ["Corporate tax (T2 ,GST/HST) returns", "Personal Tax (T1) ,(T3)Returns", "Corporate Reorganizations", "Real Estate Tax Consulting"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      slug: "tax-services"
    },
    {
      icon: FileText,
      title: "Accounting",
      description: "Notice to Reader Reports\n\nComplex Journal Entries\n\nCash Projections and analysis\n\nBudgets and Forecasts",
      features: ["Notice to Reader Reports", "Complex Journal Entries", "Cash Projections and analysis", "Budgets and Forecasts"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      slug: "accounting"
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Strategy Planning\n\nFeasibility Studies\n\nDigital Strategy Planning\n\nCustom Strategy Reports",
      features: ["Strategy Planning", "Feasibility Studies", "Digital Strategy Planning", "Custom Strategy Reports"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      slug: "business-strategy"
    },
    {
      icon: Globe,
      title: "Cross Border Tax",
      description: "Personal (1040 and 1040NR)\n\nCorporate (1120 and 1165)\n\nCross Border Real Estate\n\nITIN number applications",
      features: ["Personal (1040 and 1040NR)", "Corporate (1120 and 1165)", "Cross Border Real Estate", "ITIN number applications"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      slug: "cross-border-tax"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10 pb-4 p-4 md:p-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-2 md:mb-3 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0 mt-2`}></div>
                      <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="group/btn mt-4 md:mt-6 p-0 h-auto text-gray-700 hover:text-blue-600 font-semibold text-sm md:text-base"
                >
                  learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Service Message - matching original site tone */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white mx-4 md:mx-0">
          <p className="text-2xl md:text-3xl font-bold mb-5 italic">premium service | expert advice.</p>
          <Button 
            onClick={handleGetInTouch}
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-50 px-6 md:px-8 py-3 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            get started
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
