
import { Button } from "./ui/button";

const services = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    title: "Birth Certificate",
    description: "We will ensure that you receive the best service that will employ the best obstetricians in the hospitals in our city.",
    link: "#birth-certificate",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "Building Sanction",
    description: "We will ensure the safety of all buildings that are worn and not resistant to earthquakes.",
    link: "#building-sanction",
  },
  {
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
    title: "Sidewalks Parking",
    description: "We will rearrange the sidewalks in our city and bring amazing solutions to parking problems.",
    link: "#sidewalks",
  },
  {
    image: "https://images.unsplash.com/photo-1612730938857-bf2195bf7e33?auto=format&fit=crop&q=80",
    title: "Emergency Ambulance",
    description: "In the face of all the negativities in our city, we will speed up the ambulance service as close as a phone call to you.",
    link: "#ambulance",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#0A2165] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find Government Services and Information
            </h2>
            <p className="text-white/80">
              We will work together with hope for a better city management.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:border-[#ea384c] transition-all duration-300">
              Get To Know Us →
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:border-[#ea384c] transition-all duration-300">
              All Services →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-hover group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 hover:border-[#ea384c] transition-all duration-300"
                >
                  {service.title} →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex md:hidden gap-4">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:border-[#ea384c] w-full transition-all duration-300">
            Get To Know Us →
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:border-[#ea384c] w-full transition-all duration-300">
            All Services →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
