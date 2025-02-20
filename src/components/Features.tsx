
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and security measures to protect your data.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team in real-time across all devices.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Easy Integration",
    description:
      "Integrate with your favorite tools and services in just minutes.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Features that make a difference
          </h2>
          <p className="text-secondary">
            Discover the tools that will revolutionize your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg card-shadow hover-translate"
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
