
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">SaaS</h3>
            <p className="text-white/80">
              Transform your workflow with our ultimate SaaS solution.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/80 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
