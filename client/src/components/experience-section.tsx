import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "MeasureOne",
      period: "May 2023 – Present",
      color: "primary",
      achievements: [
        "Developed and scaled a consumer data-as-a-service platform using full-stack technologies",
        "Integrated AI-native workflows (Cursor, Copilot) for prototyping and refactoring, boosting delivery speed by ~40%",
        "Designed a tool that preserved backward-compatibility for a service, leading to a 25% improvement in accuracy",
        "Built high-performance APIs and conducted detailed root cause analyses of session failures",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "MeasureOne",
      period: "March 2022 – April 2023",
      color: "secondary",
      achievements: [
        "Led a 3-member team to build a data-driven code generation tool, reducing onboarding time",
        "Engineered async APIs for M1-Link and improved navigation speed by 1.5x with 90% accuracy",
        "Collaborated with cross-functional teams to assess solutions for evolving customer needs",
      ],
    },
    {
      title: "Engineering Intern",
      company: "MeasureOne",
      period: "Aug 2021 – Feb 2022",
      color: "accent",
      achievements: [
        "Automated document scraping and parsing workflows (HTML/PDF), reducing manual effort",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            My journey in software engineering
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card p-8 border border-border hover-lift"
              data-testid={`experience-card-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 text-${exp.color}`}
                    data-testid={`experience-title-${index}`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-xl text-muted-foreground" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </p>
                </div>
                <div className="text-muted-foreground" data-testid={`experience-period-${index}`}>
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className="flex items-start"
                    data-testid={`experience-achievement-${index}-${achievementIndex}`}
                  >
                    <CheckCircle
                      className={`text-${exp.color} mt-1 mr-3 flex-shrink-0`}
                      size={16}
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
