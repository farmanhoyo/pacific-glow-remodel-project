
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Shield, Users, FileText, PieChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Comprehensive tax planning, preparation, and filing services for individuals and businesses.",
      features: ["Personal Tax Returns", "Corporate Tax Planning", "Tax Optimization Strategies"]
    },
    {
      icon: FileText,
      title: "Financial Statements",
      description: "Professional preparation and analysis of financial statements to support your business decisions.",
      features: ["Monthly Statements", "Annual Reports", "Financial Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow and navigate complex financial challenges.",
      features: ["Business Planning", "Cash Flow Management", "Performance Analysis"]
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Independent verification services to ensure accuracy and compliance with regulations.",
      features: ["Financial Audits", "Compliance Reviews", "Risk Assessment"]
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Efficient payroll management solutions to keep your team paid and compliant.",
      features: ["Payroll Processing", "Benefits Administration", "Tax Compliance"]
    },
    {
      icon: PieChart,
      title: "Bookkeeping",
      description: "Accurate record-keeping and financial management for businesses of all sizes.",
      features: ["Daily Transactions", "Monthly Reconciliation", "Financial Reporting"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Accounting Services
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tax preparation to strategic business advisory, we provide the full spectrum 
            of professional accounting services your business needs to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
