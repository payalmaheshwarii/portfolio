import { Card } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "ReactJS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      color: "secondary",
      skills: [
        { name: "NodeJS", level: 90 },
        { name: "ExpressJS", level: 85 },
        { name: "Python", level: 80 },
      ],
    },
    {
      title: "Database",
      color: "accent",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "DevOps & Cloud",
      color: "primary",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      color: "secondary",
      skills: [
        { name: "GraphQL", level: 70 },
        { name: "gRPC", level: 65 },
        { name: "Stripe/Razorpay", level: 75 },
      ],
    },
    {
      title: "AI & Productivity",
      color: "accent",
      skills: [
        { name: "GitHub Copilot", level: 90 },
        { name: "Cursor IDE", level: 85 },
        { name: "Agile/Scrum", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-card/30"
      data-testid="skills-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            Technologies I work with
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-card p-6 border border-border hover-lift"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <h3
                className={`text-xl font-bold mb-4 text-${category.color}`}
                data-testid={`skill-category-title-${categoryIndex}`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>
                        {skill.name}
                      </span>
                      <span 
                        className="text-muted-foreground"
                        data-testid={`skill-level-${categoryIndex}-${skillIndex}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="skill-bar h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                        data-testid={`skill-bar-${categoryIndex}-${skillIndex}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
