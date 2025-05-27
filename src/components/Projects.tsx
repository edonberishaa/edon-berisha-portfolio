import { Github } from "lucide-react";
import {
    Card, CardContent, CardDescription,
    CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/loadProjects"; // 🆕 dynamic data

const projectData = getProjects(); // 🔄 instead of hardcoded array

const ProjectCard = ({ project }: { project: ReturnType<typeof getProjects>[0] }) => {
    return (
        <Card className="border-0 shadow-md hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.date && <CardDescription>{project.date}</CardDescription>}
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
                    {project.technologies?.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-gray-100">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                    </a>
                </Button>
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
