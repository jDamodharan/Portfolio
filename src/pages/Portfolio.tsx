import { useState, useEffect } from "react";
import { ArrowRight, Download, Sparkles, Palette, Monitor, Printer, Award, Image as ImageIcon, Smartphone, Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@/assets/profile-photo.jpg";
import certificateImage from "@/assets/certificate-sample.jpg";
import invitationImage from "@/assets/invitation-sample.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const worksRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  
  useParallax();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = ["All", "Certificates", "Invitations", "Branding", "UI/UX", "Print Design"];

  const portfolioItems = [
    {
      id: 1,
      title: "Professional Certificate",
      category: "Certificates",
      image: certificateImage,
      description: "Modern certificate design with elegant typography"
    },
    {
      id: 2,
      title: "Wedding Invitation",
      category: "Invitations",
      image: invitationImage,
      description: "Elegant invitation design with floral elements"
    },
    {
      id: 3,
      title: "Corporate Branding",
      category: "Branding",
      image: certificateImage,
      description: "Complete brand identity package"
    },
    {
      id: 4,
      title: "Mobile App Design",
      category: "UI/UX",
      image: invitationImage,
      description: "User-centered mobile application interface"
    },
    {
      id: 5,
      title: "Event Poster",
      category: "Print Design",
      image: certificateImage,
      description: "Eye-catching event promotional material"
    },
    {
      id: 6,
      title: "Achievement Certificate",
      category: "Certificates",
      image: invitationImage,
      description: "Academic achievement recognition design"
    }
  ];

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
      icon: ImageIcon,
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

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <section id="home" className="snap-start min-h-screen pt-20 relative overflow-hidden parallax-container">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 decorative-dots opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl parallax-element" data-speed="0.2"></div>

        {/* Animated Background Text Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="hero-text-bg font-accent"
            style={{
              top: '15%',
              left: '5%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              animationDelay: '0s'
            }}
          >
            GRAPHIC DESIGNER
          </div>
          <div 
            className="hero-text-bg font-accent"
            style={{
              top: '45%',
              right: '0%',
              transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
              animationDelay: '2s'
            }}
          >
            GRAPHIC DESIGNER
          </div>
          <div 
            className="hero-text-bg font-accent"
            style={{
              bottom: '15%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
              animationDelay: '4s'
            }}
          >
            GRAPHIC DESIGNER
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div 
            ref={heroRef}
            className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] fade-in-up"
          >
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-brand-accent animate-pulse" />
                  <span className="text-brand-accent font-script text-xl">Hello, I'm</span>
                </div>
                
                <h1 className="font-display text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="gradient-accent-text neon-text">Creative</span>
                  <br />
                  <span className="font-accent">Designer</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg font-body leading-relaxed">
                  Transforming <span className="gradient-text font-semibold">bold ideas</span> into 
                  <span className="gradient-text font-semibold"> stunning visual experiences</span> through 
                  innovative graphic design and user-centered UI/UX solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="glow-button text-white font-semibold text-lg px-8 py-4"
                  onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="font-display">View My Work</span>
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-background font-semibold text-lg px-8 py-4 transition-all duration-300"
                >
                  <Download className="mr-3 h-6 w-6" />
                  <span className="font-display">Download CV</span>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative parallax-element" data-speed="0.1">
                {/* Glowing Background Effects */}
                <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 scale-110 animate-pulse"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl animate-bounce"></div>
                <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-brand-secondary/20 rounded-full blur-lg animate-pulse"></div>
                
                {/* Main Profile Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand-primary/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20"></div>
                  <img
                    src={profileImage}
                    alt="Creative Designer Profile"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="fade-in-up mt-20 pt-16 border-t border-border/30"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed", icon: "🎨" },
                { number: "3+", label: "Years Experience", icon: "⚡" },
                { number: "100%", label: "Client Satisfaction", icon: "✨" },
                { number: "24/7", label: "Creative Mindset", icon: "🚀" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl lg:text-5xl font-bold gradient-text font-display mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-body font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="snap-start min-h-screen pt-20 bg-background/50">
        <div className="container mx-auto px-6 py-12">
          <div 
            ref={worksRef}
            className="fade-in-up"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                My <span className="gradient-text">Works</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore my portfolio of creative designs across various categories. 
                Each project represents a unique solution crafted with passion and precision.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "hero-gradient text-white"
                      : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="portfolio-card group cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-brand-primary font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="snap-start min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12">
          <div 
            ref={servicesRef}
            className="fade-in-up"
          >
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
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-8 lg:p-12">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start min-h-screen pt-20 bg-background/50">
        <div className="container mx-auto px-6 py-12">
          <div 
            ref={contactRef}
            className="fade-in-up"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your vision to life? Let's discuss your project and 
                create something amazing together. I'm here to help you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-muted-foreground mb-8">
                    I'm always excited to work on new projects and collaborate with 
                    creative minds. Reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">hello@portfolio.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">New York, USA</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Response Time</h3>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <MessageSquare className="w-6 h-6 mr-2 text-brand-primary" />
                      Send Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="border-gray-200 focus:border-brand-primary focus:ring-brand-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="border-gray-200 focus:border-brand-primary focus:ring-brand-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g., Logo Design, UI/UX, Print Design"
                          className="border-gray-200 focus:border-brand-primary focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                          required
                          rows={6}
                          className="border-gray-200 focus:border-brand-primary focus:ring-brand-primary resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full hero-gradient text-white hover:opacity-90 transition-opacity"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;