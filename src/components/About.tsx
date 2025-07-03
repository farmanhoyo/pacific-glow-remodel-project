
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Star, Trophy, Target, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: "30+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { icon: Users, number: "500+", label: "Satisfied Clients", color: "from-purple-500 to-indigo-500" },
    { icon: Award, number: "CPA", label: "Certified Professional", color: "from-emerald-500 to-teal-500" },
    { icon: Star, number: "100%", label: "Client Satisfaction", color: "from-amber-500 to-orange-500" }
  ];

  const achievements = [
    { icon: Trophy, title: "Professional Excellence", desc: "CPA certified with 30+ years experience" },
    { icon: Target, title: "Accurate Service", desc: "Precise and reliable accounting solutions" },
    { icon: Briefcase, title: "Business Growth", desc: "Helping clients achieve financial success" },
    { icon: Globe, title: "Local Expertise", desc: "Serving Ottawa and surrounding areas" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold">
                <Award className="w-4 h-4" />
                <span>About PAC 613</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Professional
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Accounting
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Since 1993
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                PAC 613 Professional Accounting Corporation has been providing comprehensive accounting 
                and tax services to individuals and businesses in Ottawa and surrounding areas for over 30 years. 
                Our commitment to excellence and personalized service has made us a trusted partner for all your financial needs.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose PAC 613</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Over 30 years of professional accounting experience",
                  "CPA certified and fully licensed professional",
                  "Personalized service tailored to your specific needs",
                  "Comprehensive range of accounting and tax services",
                  "Committed to accuracy, integrity, and client satisfaction"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80"
                  alt="Professional accounting team"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">Professional Service</h4>
                    <p className="text-sm text-gray-600">Trusted accounting expertise since 1993</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <CardContent className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-2">CPA Certified Professional</h4>
              <p className="opacity-90">Licensed and certified to provide professional accounting services in Ontario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
