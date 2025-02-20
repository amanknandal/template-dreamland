
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Leader from "@/components/Leader";
import Services from "@/components/Services";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Leader />
      <Services />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
