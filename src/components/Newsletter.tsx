
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay updated with our latest features
          </h2>
          <p className="text-secondary mb-8">
            Join our newsletter and get notified when we release new updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow glass"
            />
            <Button className="button-gradient whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
