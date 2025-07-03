
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, TrendingUp, Users, Briefcase, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation",
      description: "Professional tax preparation services for individuals and businesses. We ensure maximum deductions and compliance with all tax regulations.",
      features: ["Personal Tax Returns", "Corporate Tax Returns", "Tax Planning", "CRA Representation"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Comprehensive bookkeeping solutions to keep your financial records accurate and up-to-date for better business decision making.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Accounts Payable/Receivable", "Bank Reconciliation"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning and advisory services to help you achieve your personal and business financial goals.",
      features: ["Budget Planning", "Cash Flow Analysis", "Investment Advice", "Retirement Planning"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Expert business consulting services to help your business grow and succeed in today's competitive marketplace.",
      features: ["Business Planning", "Performance Analysis", "Growth Strategies", "Risk Assessment"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Complete payroll management solutions ensuring accurate and timely payroll processing for your employees.",
      features: ["Payroll Processing", "T4 Preparation", "ROE Preparation", "Payroll Tax Remittance"],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      icon: PieChart,
      title: "Financial Statements",
      description: "Professional preparation of financial statements including compilation, review, and audit services for your business.",
      features: ["Compilation Engagements", "Review Engagements", "Audit Services", "Special Reports"],
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Accounting Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide a full range of accounting and financial services to help individuals and 
            businesses manage their finances effectively and achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn mt-6 p-0 h-auto text-gray-700 hover:text-blue-600 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and see how we can help your business succeed.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
