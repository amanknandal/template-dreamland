
import { Briefcase, Calculator, Stethoscope, Car } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Employment",
    description: "New opportunities for our citizens",
    link: "#employment",
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Business Tax",
    description: "Pay your business taxes online",
    link: "#tax",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Health Medicine",
    description: "Access to healthcare services",
    link: "#health",
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Sidewalks Parks",
    description: "City infrastructure maintenance",
    link: "#infrastructure",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="feature-card-hover bg-white rounded-xl p-6 text-center"
            >
              <div className="bg-[#0A2165] text-white p-4 rounded-lg inline-block mb-4 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-[#0A2165]">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
