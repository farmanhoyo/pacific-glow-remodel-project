
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@pac613.ca?subject=${subject}&body=${body}`;
  };

  const handleDirectEmail = () => {
    window.location.href = 'mailto:info@pac613.ca';
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+16136952955';
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 md:px-6 py-2 rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base">
            <MessageSquare className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            Get In Touch
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Office visits are by appointment only. Please contact us anytime; our friendly and professional team is here to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-6 md:pb-8 p-4 md:p-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Get In Touch
                </CardTitle>
                <p className="text-gray-600 text-base md:text-lg">
                  Fill out the form below and we'll get back to you to discuss your needs.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8 p-4 md:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required
                        className="h-10 md:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required
                        className="h-10 md:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email Address *</label>
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        className="h-10 md:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Phone Number</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(613) 123-4567" 
                        className="h-10 md:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?" 
                      className="h-10 md:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your needs or questions..." 
                      required
                      className="min-h-24 md:min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 md:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Send Message
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. Your information is secure and confidential.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  primary: "(613) 695-2955",
                  secondary: "Please contact us anytime",
                  color: "from-green-500 to-emerald-500",
                  action: handlePhoneCall
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  primary: "info@pac613.ca",
                  secondary: "We'll respond within 24 hours",
                  color: "from-blue-500 to-indigo-500",
                  action: handleDirectEmail
                },
                {
                  icon: MapPin,
                  title: "Our Location",
                  primary: "Suite 204, 78 George Street",
                  secondary: "Ottawa, ON",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: Calendar,
                  title: "Office Visits",
                  primary: "By Appointment Only",
                  secondary: "Contact us to schedule",
                  color: "from-orange-500 to-red-500"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group ${item.action ? 'cursor-pointer' : ''}`}
                  onClick={item.action}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-800 font-semibold text-base md:text-lg break-words">{item.primary}</p>
                        <p className="text-gray-600 text-sm mt-1">{item.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Services Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6 md:p-8 text-center">
                <MessageSquare className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-white/90" />
                <h4 className="font-bold text-lg md:text-xl mb-3">Professional Team</h4>
                <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base leading-relaxed">
                  Our friendly and professional team is here to meet all your accounting and tax needs.
                </p>
                <Button 
                  onClick={handleDirectEmail}
                  className="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold rounded-xl text-sm md:text-base"
                >
                  Contact Us Now
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
