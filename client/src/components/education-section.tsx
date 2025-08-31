import { Card } from "@/components/ui/card";
import { Trophy, Users, Medal, Code } from "lucide-react";

export default function EducationSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "ML & AI Competition Winner",
      description: "Won the Zonal Round conducted by Dignique Techlabs with IIT Roorkee (Feb 2019)",
      color: "accent",
    },
    {
      icon: Users,
      title: "Event Organizer",
      description: "Active Volunteer in GTU CTF and conducted StartUp Street event (April 2019)",
      color: "primary",
    },
    {
      icon: Medal,
      title: "Smart Gujarat Hackathon",
      description: "Qualified for zonal round with Universal HealthCard Web Application",
      color: "secondary",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-card/30"
      data-testid="education-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="education-title">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="education-subtitle">
            Academic background and notable accomplishments
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card p-8 border border-border hover-lift" data-testid="education-card">
            <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="education-card-title">
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6" data-testid="education-degree">
                <h4 className="text-xl font-semibold mb-2" data-testid="degree-title">
                  Bachelor of Engineering in Computer Science
                </h4>
                <p className="text-muted-foreground mb-1" data-testid="degree-institution">
                  Vishwakarma Government Engineering College (GTU)
                </p>
                <p className="text-muted-foreground mb-2" data-testid="degree-period">
                  2018 - 2022
                </p>
                <p className="text-lg font-medium text-primary" data-testid="degree-cgpa">
                  CGPA: 9.2/10
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6" data-testid="education-secondary">
                <h4 className="text-xl font-semibold mb-2" data-testid="secondary-title">
                  Higher Secondary Education
                </h4>
                <p className="text-muted-foreground mb-1" data-testid="secondary-institution">
                  Best High School
                </p>
                <p className="text-muted-foreground mb-2" data-testid="secondary-period">
                  2018
                </p>
                <p className="text-lg font-medium text-secondary" data-testid="secondary-percentage">
                  92.36%
                </p>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="bg-card p-8 border border-border hover-lift" data-testid="achievements-card">
            <h3 className="text-2xl font-bold mb-6 text-accent" data-testid="achievements-card-title">
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`achievement-${index}`}>
                    <IconComponent
                      className={`text-${achievement.color} text-xl mt-1 mr-4 flex-shrink-0`}
                      size={20}
                    />
                    <div>
                      <h4 className="text-lg font-semibold mb-2" data-testid={`achievement-title-${index}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`achievement-description-${index}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
