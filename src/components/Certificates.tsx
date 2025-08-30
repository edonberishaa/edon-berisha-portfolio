import { FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "Core Web Vitals",
      issuer: "Google Developers Group Prishtina",
      type: "Web Performance",
      description: "Certification in web performance optimization and Core Web Vitals metrics",
      pdfPath: "/certificates/Google - Certificate - Edon Berisha.pdf"
    },
    {
      title: "Data Engineer Certificate",
      issuer: "DataCamp",
      type: "Data Engineering",
      description: "Professional certification in data engineering fundamentals and best practices",
      pdfPath: "/certificates/Data Engineer Certificate.pdf"
    },
    {
      title: "Web Application Development Professional",
      issuer: "ICT Kosova",
      type: "Web Application Development",
      description:"Professional certification in Web Application Development",
      pdfPath:"/certificates/Web-App-Cert.pdf"
    }
  ];

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certificates</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, idx) => (
            <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-portfolio-blue bg-opacity-10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{certificate.title}</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Certified
                      </Badge>
                    </div>
                    <p className="text-portfolio-blue font-medium mb-2">{certificate.issuer}</p>
                    <Badge variant="secondary" className="mb-3 bg-gray-100 text-gray-700">
                      {certificate.type}
                    </Badge>
                    <p className="text-gray-600 text-sm mb-4">{certificate.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 hover:bg-portfolio-blue hover:text-white transition-colors" 
                      onClick={() => handleDownload(certificate.pdfPath, certificate.title)}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
