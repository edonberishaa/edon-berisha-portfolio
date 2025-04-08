
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  // Skill categories
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "Python", "JavaScript"]
    },
    {
      title: "Frameworks",
      skills: ["ASP.NET Web API", "ASP.NET Core MVC", "Angular (fundamental skills)"]
    },
    {
      title: "Database",
      skills: ["SQL Server", "MySQL", "Data Engineering Fundamentals"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Visual Studio", "Visual Studio Code", "Git", "Bootstrap", "XAMP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <Badge key={index} className="bg-portfolio-blue text-white px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
