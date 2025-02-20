
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-down">
            Transform Your Workflow with Our
            <span className="heading-gradient"> Ultimate SaaS Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 animate-fade-up">
            Streamline your business operations and boost productivity with our
            comprehensive suite of tools designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Button className="button-gradient w-full sm:w-auto text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 hover-translate"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
