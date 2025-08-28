import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SGH Medical Portal",
      description: "Online medical details management system for Smart Gujarat Hackathon",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["CSS", "HTML", "JavaScript"],
      github: "https://github.com/payalmaheshwarii/SGH-2019-20-",
    },
    {
      title: "JavaScript Memory Game",
      description: "Interactive memory matching game built with vanilla JavaScript",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/payalmaheshwarii/JavaScript_MemoryGame",
    },
    {
      title: "Attendance Management System",
      description: "Complete attendance tracking system with analytics and reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "Node.js", "MySQL"],
      github: "https://github.com/payalmaheshwarii/attendance_management_system",
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS platform for online education and course management",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/payalmaheshwarii/LMS-",
    },
    {
      title: "Real-time Crypto Price Tracker",
      description: "Live cryptocurrency price tracking with real-time updates and charts",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["TypeScript", "React", "WebSocket"],
      github: "https://github.com/payalmaheshwarii/Real-time-crypto-pricee",
    },
    {
      title: "Horses vs Humans Classifier",
      description: "Machine learning model for image classification using deep learning",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "TensorFlow", "ML"],
      github: "https://github.com/payalmaheshwarii/horses-or-humans",
    },
  ];

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">
            Some of my recent work and contributions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border border-border overflow-hidden hover-lift"
              data-testid={`project-card-${index}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                  data-testid={`project-github-${index}`}
                >
                  <Github className="mr-2" size={16} />
                  View on GitHub
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
