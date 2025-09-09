
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
            Your Trusted
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Tax Partners
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Professional accounting and tax services tailored to your needs. From individual tax returns to complex business strategies, we're here to help you succeed.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "CRA Certified",
                description: "Licensed professionals you can trust"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced accounting professionals"
              },
              {
                icon: TrendingUp,
                title: "Results Driven",
                description: "Maximizing your financial success"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-card border border-border hover:bg-accent transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
