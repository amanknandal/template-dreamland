
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50" />
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
          alt="Government Building"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2" />
            <span className="text-white/90">Welcome to Municity Government</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            We Will Provide The Best Management of Our City
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We are the strength of our people.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="bg-[#0A2165] text-white hover:bg-[#0A2165]/90 px-8">
              Learn More →
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
