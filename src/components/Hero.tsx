
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Hi, I'm <span className="text-portfolio-blue">Edon Berisha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              A Computer Science student at Universiteti "Isa Boletini", 
              passionate about building websites and applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">View My Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="text-gray-600 flex items-center mt-4">
              <p className="text-sm">Kosovo Citizen | Computer Science Student</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80">
              <AvatarImage 
                src="/IMG_0867.JPG" 
                alt="Edon Berisha" 
                className="object-cover"
              />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <a 
        href="#education" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </a>
    </section>
  );
};

export default Hero;
