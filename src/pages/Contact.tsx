import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
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

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about my design process and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Most projects take 1-3 weeks depending on complexity. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer revisions?",
                answer: "Yes! I include 3 rounds of revisions in all projects to ensure you're completely satisfied with the final result."
              },
              {
                question: "What file formats do you provide?",
                answer: "I deliver high-resolution files in multiple formats including PNG, JPG, PDF, and source files (AI, PSD, Figma)."
              },
              {
                question: "How do we communicate during the project?",
                answer: "I keep you updated through email and scheduled check-ins. You'll always know the project status and next steps."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-brand-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;