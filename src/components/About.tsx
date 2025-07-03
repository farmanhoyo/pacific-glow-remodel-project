
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "15+", label: "Years Experience" },
    { icon: Award, number: "CPA", label: "Certified Professional" },
    { icon: Star, number: "4.9", label: "Client Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900">
                Excellence in Professional Accounting
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                PAC 613 has been serving the Ottawa business community with integrity, 
                expertise, and personalized service. Our team of certified professionals 
                brings decades of combined experience to help you achieve your financial goals.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Why Choose PAC 613?</h4>
              <div className="space-y-3">
                {[
                  "Personalized service tailored to your unique needs",
                  "Deep expertise in Canadian tax law and regulations",
                  "Proactive approach to financial planning and optimization",
                  "Commitment to accuracy and attention to detail",
                  "Long-term partnerships built on trust and results"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
                alt="Professional team at work"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
