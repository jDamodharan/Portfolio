import { Palette, Monitor, Printer, Smartphone, Award, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visually stunning designs that communicate your message effectively and leave a lasting impression.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Designing user-centered digital experiences that are both beautiful and highly functional.",
      features: ["Website Design", "Mobile App Interface", "User Research", "Prototyping"]
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "Professional print materials that make your brand stand out in the physical world.",
      features: ["Business Cards", "Brochures", "Posters", "Packaging Design"]
    },
    {
      icon: Award,
      title: "Certificate Design",
      description: "Elegant and professional certificates for awards, achievements, and recognition.",
      features: ["Academic Certificates", "Professional Awards", "Training Completion", "Custom Templates"]
    },
    {
      icon: Image,
      title: "Invitation Design",
      description: "Beautiful invitations that set the perfect tone for your special occasions.",
      features: ["Wedding Invitations", "Event Invitations", "Corporate Events", "Digital Invitations"]
    },
    {
      icon: Smartphone,
      title: "Digital Design",
      description: "Modern digital solutions that work seamlessly across all devices and platforms.",
      features: ["Web Banners", "Email Templates", "Digital Ads", "Social Media Content"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive design services to help bring your vision to life. 
            From concept to completion, I'm dedicated to delivering exceptional results 
            that exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-portfolio-hover hover:to-white"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              My Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Concept", desc: "Creating initial design concepts" },
              { step: "03", title: "Design", desc: "Developing the final design solution" },
              { step: "04", title: "Delivery", desc: "Final files and ongoing support" }
            ].map((item, index) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary font-bold text-lg group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to start your <span className="gradient-text">project</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            Get in touch to begin your design journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-opacity">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;