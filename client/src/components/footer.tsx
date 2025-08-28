import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4" data-testid="footer-name">
            Payal Maheshwari
          </div>
          <p className="text-muted-foreground mb-6" data-testid="footer-tagline">
            Full Stack Software Engineer | Building the future one line of code at a time
          </p>
          <div className="flex justify-center gap-6 mb-8" data-testid="footer-social">
            <a
              href="https://github.com/payalmaheshwarii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github className="text-2xl" />
            </a>
            <a
              href="https://in.linkedin.com/in/payal-maheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="text-2xl" />
            </a>
            <a
              href="mailto:payalmaheshwari2610@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="text-2xl" />
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground" data-testid="footer-copyright">
              &copy; 2025 Payal Maheshwari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
