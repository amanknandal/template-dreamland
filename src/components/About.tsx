
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="flex gap-2 mb-4">
              <div className="w-12 h-1 bg-[#0A2165] mt-4"></div>
              <h3 className="text-[#0A2165] text-xl">About Our City</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building a Better Future Together
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We are committed to creating a vibrant, sustainable, and inclusive community where every resident can thrive. Our city administration focuses on transparency, efficiency, and citizen-centered services.
            </p>
            <ul className="space-y-4">
              {[
                "Transparent Government Operations",
                "Sustainable Development",
                "Community-Driven Initiatives",
                "Modern Infrastructure"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0A2165] rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80"
              alt="City Hall"
              className="rounded-lg shadow-xl hover-border-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
