import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Canadians with U.S Real Estate-Taxation",
      author: "Amelia Chan",
      date: "January 30, 2023",
      category: "Cross Border Tax",
      excerpt: "In this article, I will discuss the U.S and cross border tax treatment of the two common types of income...",
      readTime: "8 min read"
    },
    {
      title: "Tax implications of Intercorporate loans",
      author: "Prosper Chenjelani", 
      date: "November 8, 2022",
      category: "Tax",
      excerpt: "In cases where a taxpayer owns multiple incorporated businesses. Its fairly common for there to be intercompany loans between those...",
      readTime: "6 min read"
    },
    {
      title: "Change in use rules for property owners",
      author: "Prosper Chenjelani",
      date: "May 5, 2022", 
      category: "Tax",
      excerpt: "Real estate, including rental and leasing are the top contributors to Canadian GDP; adding about 14% to total GDP. By...",
      readTime: "7 min read"
    },
    {
      title: "Taxation of Foreign Earned Income (US & CA)",
      author: "Amelia Chan",
      date: "January 31, 2022",
      category: "Cross Border Tax", 
      excerpt: "If you are a US citizen with Canadian sourced income, you may find yourself in a scenario where you...",
      readTime: "9 min read"
    },
    {
      title: "Strategy Plan or Business Plan",
      author: "Prosper Chenjelani",
      date: "January 24, 2022",
      category: "Strategy",
      excerpt: "Does your business need a strategy plan or a business plan, what is the difference? Read to find out. Most...",
      readTime: "5 min read"
    },
    {
      title: "Section 85 Rollover",
      author: "Prosper Chenjelani", 
      date: "October 1, 2021",
      category: "Tax",
      excerpt: "Tax free transfer of personal assets to corporation under section 85 Rollover provisions.",
      readTime: "10 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cross Border Tax':
        return 'from-emerald-500 to-teal-500';
      case 'Tax':
        return 'from-purple-500 to-indigo-500';
      case 'Strategy':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'Cross Border Tax':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Tax':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Strategy':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base">
            <BookOpen className="w-4 h-4" />
            <span>Expert Blog</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Expert Insights &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Guidance
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Stay informed with our expert analysis on tax strategies, business planning, 
            and cross-border financial compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getCategoryBg(post.category)} border`}>
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <CardTitle className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 p-4 md:p-6 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group/btn mt-4 p-0 h-auto text-gray-700 hover:text-blue-600 font-semibold text-sm"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white mx-4 md:mx-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Professional Advice?</h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
              Our expert team is ready to help you navigate complex tax and business strategies.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 md:px-8 py-3 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;