import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Call backend API
      const response = await apiRequest('POST', '/api/contact', formData);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message || "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="contact-title">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
            I'm always open to new opportunities and interesting conversations :)
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8" data-testid="contact-info">
              <div className="flex items-center" data-testid="contact-email">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Mail className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-muted-foreground">
                    payalmaheshwari2610@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center" data-testid="contact-phone">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Phone className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-muted-foreground">+91 6351544926</p>
                </div>
              </div>
              <div className="flex items-center" data-testid="contact-location">
                <div className="bg-accent/20 p-3 rounded-lg mr-4">
                  <MapPin className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4" data-testid="contact-social">
                <a
                  href="https://github.com/payalmaheshwarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-lg border border-border hover:border-primary transition-colors"
                  data-testid="social-github"
                >
                  <Github className="text-xl" />
                </a>
                <a
                  href="https://in.linkedin.com/in/payal-maheshwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-lg border border-border hover:border-primary transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a
                  href="mailto:payalmaheshwari2610@gmail.com"
                  className="bg-card p-3 rounded-lg border border-border hover:border-primary transition-colors"
                  data-testid="social-email"
                >
                  <Mail className="text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-card border border-border" data-testid="contact-form-card">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" data-testid="label-name">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="mt-2"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" data-testid="label-email">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="mt-2"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" data-testid="label-subject">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiring about..."
                    className="mt-2"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" data-testid="label-message">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    rows={5}
                    className="mt-2 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
