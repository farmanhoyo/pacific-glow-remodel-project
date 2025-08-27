
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, TrendingUp, Users, Briefcase, PieChart, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
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
      description: "Comprehensive tax services for businesses and individuals including corporate reorganizations, personal tax preparation, tax planning, and GST/HST filings.",
      features: ["T2 Corporate tax returns", "T1 tax returns", "Corporate Reorganizations", "GST/HST filings"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "As entrepreneurs we know what it takes to run a successful business. Our service offering includes; Business Strategy Planning, Tax Strategy Planning, Business Plans, Feasibility Studies, Human Resource Consulting and other general business advisory services.",
      features: ["Business Planning", "Strategy Planning", "Feasibility Studies", "Tax Strategies"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Globe,
      title: "Cross Border Tax",
      description: "Our cross border tax practice includes compliance certificates, withholding certificates, tax ID applications, and tax treaty exemption applications.",
      features: ["CRA compliance certificates (T2062)", "IRS Withholding certificates (8288-B)", "US Tax ID applications (ITIN)", "Tax Treaty Exemption applications"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: FileText,
      title: "Other Ancillary Services",
      description: "Additional professional services to support your business needs including human resources, financing assistance, and incorporation services.",
      features: ["Human Resource Consulting", "Capital/Debt Financing", "Incorporation Services", "Business Grants"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Accounting, Tax &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Business Strategy
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We use our broad expertise and knowledge in the finance, technology and the legal landscape 
            to help you execute on your business strategy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
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
                  onClick={handleGetInTouch}
                  className="group/btn mt-4 md:mt-6 p-0 h-auto text-gray-700 hover:text-blue-600 font-semibold text-sm md:text-base"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white mx-4 md:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">Contact us today and discover how our professional services can benefit your business.</p>
          <Button 
            onClick={handleGetInTouch}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-50 px-6 md:px-8 py-3 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
