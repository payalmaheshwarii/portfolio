import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              Full Stack{" "}
              <span className="gradient-text">Software Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              4+ years of experience building scalable web applications and data
              platforms at MeasureOne. Passionate about creating efficient,
              user-centric solutions using modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-border hover:bg-muted/50"
                data-testid="button-projects"
              >
                View Projects
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/payalmaheshwarii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
              >
                <Github />
              </a>
              <a
                href="https://in.linkedin.com/in/payal-maheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:payalmaheshwari2610@gmail.com"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full max-w-md hover-lift"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
