
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-display font-bold text-primary">
            SaaS
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-item">
              Features
            </a>
            <a href="#pricing" className="nav-item">
              Pricing
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <Button variant="outline" className="hover-translate">
              Sign In
            </Button>
            <Button className="button-gradient hover-translate">Get Started</Button>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass animate-slide-down">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#features"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="button-gradient w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
