
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              Edon<span className="text-portfolio-blue">Berisha</span>
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Computer Science &amp; Engineering Student
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/edonberishaa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/edonberisha" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:edonberisha52@outlook.com" 
              aria-label="Email"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} Edon Berisha. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
