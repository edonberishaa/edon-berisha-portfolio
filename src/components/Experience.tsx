import { Trophy, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const achievements = [
    {
      title: "Full Stack Engineer",
      organization: "Genpact/Xponential",
      type: "Current",
      icon: Briefcase,
      description: "Building and maintaining full-stack web applications in a professional environment"
    },
    {
      title: "Hackathon Winner",
      organization: "Pristina.Innovate.Healthcare",
      type: "Winner",
      icon: Trophy,
      description: "Won first place in the healthcare innovation hackathon"
    },
    {
      title: "Finalist",
      organization: "ITP Prizren Hackathon",
      type: "Finalist",
      icon: Award,
      description: "Reached finals in the Innovation and Technology Park hackathon"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience & Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hackathon participations and achievements that showcase problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-portfolio-blue bg-opacity-10 p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-portfolio-blue" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-gray-800">{achievement.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={
                            achievement.type === 'Winner' ? 'bg-yellow-100 text-yellow-800' : 
                            achievement.type === 'Current' ? 'bg-green-100 text-green-800' : 
                            'bg-blue-100 text-blue-800'
                          }
                        >
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-portfolio-blue font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;