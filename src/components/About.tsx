
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Star, Trophy, Target, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, number: "Expert", label: "Tax Solutions", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, number: "Cross", label: "Border Tax", color: "from-purple-500 to-indigo-500" },
    { icon: Briefcase, number: "Business", label: "Strategy", color: "from-emerald-500 to-teal-500" },
    { icon: Award, number: "Professional", label: "Service", color: "from-amber-500 to-orange-500" }
  ];

  const achievements = [
    { icon: Trophy, title: "Business Planning", desc: "For start ups looking for financing, we have expertise in developing business plans for businesses of all sizes." },
    { icon: Target, title: "Strategy Planning", desc: "Visionary entrepreneurs always need to have a clear and concise roadmap on how to best achieve their long term goals." },
    { icon: Briefcase, title: "Feasibility Studies", desc: "Planning on launching a new venture? A feasibility study is therefore a must from financial, legal and operational perspective." },
    { icon: Globe, title: "Tax Strategies", desc: "We advise corporate clients on a wide range of tax strategies available to them to meet their business needs in a tax efficient manner." }
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold">
                <Award className="w-4 h-4" />
                <span>About PAC Consulting</span>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                As entrepreneurs we know what it takes to run a successful business. We use our broad expertise 
                and knowledge in the finance, technology and the legal landscape to help you execute on your business strategy needs.
              </p>
            </div>

            {/* Key Services */}
            <div id="expertise" className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Business Strategy Planning & Tax Strategy Planning",
                  "Business Plans & Feasibility Studies for all business sizes",
                  "Cross Border Tax Services & Compliance Solutions",
                  "Corporate Reorganizations & Tax Efficient Structures",
                  "Human Resource Consulting & Business Advisory Services"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Highlights Grid */}
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
                  alt="Professional business consulting"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-1">Expert Solutions</h4>
                    <p className="text-sm text-gray-600">Professional accounting & business strategy services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <CardContent className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-2">Professional Expertise</h4>
              <p className="opacity-90">Comprehensive accounting, tax and business strategy services tailored to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
