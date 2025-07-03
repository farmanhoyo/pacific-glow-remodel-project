
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Start Your Financial
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your financial potential? Our expert team is standing by to provide 
            personalized solutions that drive exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  Schedule Your Consultation
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">First Name *</label>
                    <Input 
                      placeholder="John" 
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Last Name *</label>
                    <Input 
                      placeholder="Doe" 
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email Address *</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Phone Number</label>
                    <Input 
                      placeholder="(613) 555-0123" 
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Company Name</label>
                  <Input 
                    placeholder="Your Company Inc." 
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">How Can We Help You? *</label>
                  <Textarea 
                    placeholder="Tell us about your financial goals, challenges, or specific services you're interested in..." 
                    className="min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Send Message & Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. Your information is secure and will never be shared.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  primary: "(613) 555-0123",
                  secondary: "Available Mon-Fri 9am-6pm EST",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  primary: "info@pac613.ca",
                  secondary: "Response within 4 hours",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  primary: "Ottawa, Ontario",
                  secondary: "Serving National Capital Region",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  primary: "Mon-Fri: 9:00 AM - 6:00 PM",
                  secondary: "Weekend consultations available",
                  color: "from-orange-500 to-red-500"
                }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-800 font-semibold text-lg">{item.primary}</p>
                        <p className="text-gray-600 text-sm mt-1">{item.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-red-500 to-pink-500 text-white">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="font-bold text-xl mb-3">Urgent Financial Matter?</h4>
                <p className="mb-6 text-white/90">
                  For time-sensitive financial issues, we offer emergency consultation services.
                </p>
                <Button className="w-full bg-white text-red-600 hover:bg-gray-50 font-semibold rounded-xl">
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
