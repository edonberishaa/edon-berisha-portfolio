
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-portfolio-blue" />,
      text: "edonberisha52@outlook.com",
      href: "mailto:edonberisha52@outlook.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-blue" />,
      text: "(+383)-49-644-580",
      href: "tel:+38349644580"
    },
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-blue" />,
      text: "Kosovo",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-portfolio-blue" />,
      text: "linkedin.com/in/edonberisha",
      href: "https://linkedin.com/in/edonberisha"
    },
    {
      icon: <Github className="h-5 w-5 text-portfolio-blue" />,
      text: "github.com/edonberishaa",
      href: "https://github.com/edonberishaa"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Me</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to connect!
          </p>
        </div>

        <Card className="border-0 shadow-lg mx-auto max-w-3xl">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Get in touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a 
                      key={i} 
                      href={item.href} 
                      target={item.href.startsWith("http") ? "_blank" : "_self"} 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-portfolio-blue transition-colors"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Interested in working together?</h3>
                <p className="text-gray-600">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="mt-6">
                  <a 
                    href="mailto:edonberisha52@outlook.com" 
                    className="inline-block px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Send me an email
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
