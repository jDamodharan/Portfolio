import { Mail, Phone, MapPin, Instagram, ExternalLink, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 mt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 decorative-grid opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-display gradient-accent-text mb-6">Portfolio</h3>
            <p className="text-white/70 mb-8 max-w-md font-body text-lg leading-relaxed">
              Creating <span className="gradient-text font-semibold">stunning visual experiences</span> through 
              graphic design and UI/UX. Let's bring your ideas to life with creative excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-brand-accent transition-all duration-300 hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-primary transition-all duration-300 hover:scale-110">
                <ExternalLink size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-secondary transition-all duration-300 hover:scale-110">
                <Dribbble size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 font-display gradient-text">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/70 hover:text-brand-accent transition-colors font-body">Home</a></li>
              <li><a href="/works" className="text-white/70 hover:text-brand-accent transition-colors font-body">Works</a></li>
              <li><a href="/services" className="text-white/70 hover:text-brand-accent transition-colors font-body">Services</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-brand-accent transition-colors font-body">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 font-display gradient-text">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Mail size={18} className="text-brand-accent group-hover:scale-110 transition-transform" />
                <span className="text-white/70 font-body">hello@portfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone size={18} className="text-brand-accent group-hover:scale-110 transition-transform" />
                <span className="text-white/70 font-body">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin size={18} className="text-brand-accent group-hover:scale-110 transition-transform" />
                <span className="text-white/70 font-body">New York, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 font-body mb-4 md:mb-0">
              © 2024 Portfolio. All rights reserved. Designed with <span className="text-brand-accent">passion</span>.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors font-body text-sm">Privacy</a>
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors font-body text-sm">Terms</a>
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors font-body text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;