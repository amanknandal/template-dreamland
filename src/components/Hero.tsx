
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50" />
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
          alt="Government Building"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center glass-effect px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2" />
            <span className="text-white/90">Welcome to Municity Government</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            We Will Provide The Best Management of Our City
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We are the strength of our people.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="bg-[#0A2165] text-white hover:bg-[#0A2165]/90 px-8 hover-border-glow">
              Learn More →
            </Button>
            <button className="video-button group">
              <Play className="h-6 w-6 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
