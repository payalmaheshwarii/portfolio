import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
   const isMobile = useIsMobile();
  return (
    <section
      id="about"
      className="py-20 bg-card/30"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            I'm a passionate full-stack engineer with expertise in building
            scalable data platforms and web applications
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {<div>
            <img
              src="./assets/About_profile_photo.png"
              alt="Professional developer headshot"
              className="rounded-2xl w-80 h-100 shadow-lg mx-10"
              data-testid="img-about"
            />
          </div>}
          <div className="space-y-4">
            <p className="text-md text-muted-foreground leading-relaxed" data-testid="about-text-1">
              Based in Ahmedabad, Gujarat, I'm a software engineer at MeasureOne
              where I've been instrumental in developing and scaling consumer
              data-as-a-service platforms. My journey in tech spans over 4
              years, during which I've consistently delivered high-impact
              solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-text-2">
              I specialize in full-stack development with expertise in
              JavaScript ecosystems, cloud infrastructure, and modern
              development practices. I'm passionate about integrating AI-native
              workflows and have successfully boosted delivery speed by ~40%
              through innovative tooling and automation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-card p-6 border border-border">
                <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-experience">
                  4+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="bg-card p-6 border border-border">
                <div className="text-2xl font-bold text-secondary mb-2" data-testid="stat-improvement">
                ⚡
                </div>
                <div className="text-muted-foreground">Full-Stack Expertise</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
