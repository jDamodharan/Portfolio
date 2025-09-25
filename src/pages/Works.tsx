import { useState } from "react";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/certificate-sample.jpg";
import invitationImage from "@/assets/invitation-sample.jpg";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's collaborate and create something amazing together.
          </p>
          <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-opacity">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Works;