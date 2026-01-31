
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  date: string;
  description: string[];
  github: string;
  technologies: string[];
  status?: string;
  liveLink?: string;
}

const projectData: ProjectProps[] = [
  {
    title: "UMIB Student Application",
    date: "December 2025 - January 2026",
    description: [
      "Comprehensive academic ecosystem with React Native mobile app, web admin dashboard, and AI chatbot assistant.",
      "Features real-time timetabling, push notifications, and secure data management using Expo, TypeScript & NativeWind."
    ],
    github: "https://github.com/edonberishaa/UMIB-Student-App",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind"]
  },
  {
    title: "The Wild Oasis",
    date: "November 2025",
    description: [
      "High-performance cabin booking platform with SSR for fast speeds and SEO optimization.",
      "Features real-time availability, NextAuth authentication, and intuitive booking management dashboard."
    ],
    github: "",
    liveLink: "https://oasis-wild-ebon.vercel.app/",
    technologies: ["Next.js 14", "Supabase", "Tailwind CSS", "NextAuth"]
  },
  {
    title: "WorldWise",
    date: "November 2025",
    description: [
      "Dynamic travel tracking app with interactive map visualization using React and Leaflet.",
      "Features context-based state management, geolocation integration, and protected routes."
    ],
    github: "https://github.com/edonberishaa/react-world-wise",
    technologies: ["React", "Leaflet", "Context API"]
  },
  {
    title: "Production System",
    date: "May 2025 - June 2025",
    description: [
      "Smart bakery management solution for tracking production, inventory, sales with AI-enhanced documentation."
    ],
    github: "https://github.com/edonberishaa/Production-System",
    technologies: ["ASP.NET Core MVC", "SQL Server"]
  },
  {
    title: "Attendance System",
    date: "March 2025",
    description: [
      "Attendance tracking software using Arduino fingerprint sensor with ASP.NET Core MVC interface."
    ],
    github: "https://github.com/edonberishaa/AttendanceSystem",
    technologies: ["Arduino", "ASP.NET Core MVC", "SQL Server"]
  },
  {
    title: "Advanced Churn ETL Pipeline",
    date: "June 2025",
    description: [
      "Production-ready customer churn prediction pipeline with Apache Airflow, Task Groups, XComs & Sensors."
    ],
    github: "https://github.com/edonberishaa/advanced-churn-pipeline",
    technologies: ["Apache Airflow", "Python", "Scikit", "Docker"]
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription>{project.date}</CardDescription>
          </div>
          {project.status && (
            <Badge variant="secondary" className="bg-blue-100 hover:bg-blue-100 text-blue-700">
              {project.status}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {project.description.map((desc, idx) => (
          <p key={idx} className="text-sm text-gray-600">{desc}</p>
        ))}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="outline" className="bg-gray-100">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {project.github && (
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        )}
        {project.liveLink && (
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
