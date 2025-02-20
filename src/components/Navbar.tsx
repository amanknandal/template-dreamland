
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Volume2 } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/12b4cee6-fc1e-4401-9a5d-261297045f4f.png" alt="Municity Logo" className="h-12" />
            <span className="text-2xl font-display font-bold text-primary">Municity</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#services" className="nav-item">Services</a>
            <a href="#blog" className="nav-item">Blog</a>
            <a href="#contact" className="nav-item">Contact</a>
            <Button className="bg-[#0A2165] text-white hover:bg-[#0A2165]/90">
              <Volume2 className="mr-2 h-4 w-4" />
              Upcoming Events
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-down">
            <div className="flex flex-col space-y-4 p-4">
              <a href="/" className="nav-item">Home</a>
              <a href="#about" className="nav-item">About</a>
              <a href="#services" className="nav-item">Services</a>
              <a href="#blog" className="nav-item">Blog</a>
              <a href="#contact" className="nav-item">Contact</a>
              <Button className="bg-[#0A2165] text-white hover:bg-[#0A2165]/90 w-full">
                <Volume2 className="mr-2 h-4 w-4" />
                Upcoming Events
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
