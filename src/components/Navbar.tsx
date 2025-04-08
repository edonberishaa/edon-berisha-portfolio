
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-portfolio-blue">
              Edon<span className="text-portfolio-dark">Berisha</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors">About</a>
              <a href="#education" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors">Education</a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors">Projects</a>
              <a href="#skills" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors">Skills</a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Social links - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/edonberishaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-600 hover:text-portfolio-blue transition-colors" />
            </a>
            <a href="https://linkedin.com/in/edonberisha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-portfolio-blue transition-colors" />
            </a>
            <a href="mailto:edonberisha52@outlook.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-600 hover:text-portfolio-blue transition-colors" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 animate-fade-in">
          <div className="space-y-2 py-2">
            <a onClick={toggleMenu} href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-portfolio-blue">About</a>
            <a onClick={toggleMenu} href="#education" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-portfolio-blue">Education</a>
            <a onClick={toggleMenu} href="#projects" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-portfolio-blue">Projects</a>
            <a onClick={toggleMenu} href="#skills" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-portfolio-blue">Skills</a>
            <a onClick={toggleMenu} href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-portfolio-blue">Contact</a>
          </div>
          <div className="pt-4 flex space-x-6 border-t border-gray-200 mt-4">
            <a href="https://github.com/edonberishaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-600 hover:text-portfolio-blue" />
            </a>
            <a href="https://linkedin.com/in/edonberisha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-portfolio-blue" />
            </a>
            <a href="mailto:edonberisha52@outlook.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-600 hover:text-portfolio-blue" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
