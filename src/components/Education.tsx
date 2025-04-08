
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Education</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
              <div className="flex-shrink-0 bg-portfolio-blue bg-opacity-10 p-4 rounded-full">
                <GraduationCap className="h-8 w-8 text-portfolio-blue" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <h3 className="text-xl font-bold text-gray-900">Universiteti "Isa Boletini" - FIMK</h3>
                  <span className="text-sm font-medium text-gray-500">Mitrovice, Kosovo</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <p className="text-gray-700 font-medium">Bachelor's Degree in Computer Science and Engineering</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">Expected Graduation: October 2026</span>
                </div>
                
                <div className="space-y-3 text-gray-600">
                  <p className="font-semibold text-portfolio-blue">GPA: 9.25/10.00</p>
                  <p><span className="font-medium">Related Coursework:</span> Data Structures & Algorithms, Database Management, Web Development and Internet, Software Engineering, Computer Organization & Programming, Combinatorics, Big Data, Object-Oriented Programming, Statistics, Data Security</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
