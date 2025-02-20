
const Leader = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/lovable-uploads/fcba5cb8-2061-44e5-bda4-c72c70b35041.png"
              alt="Mayor"
              className="rounded-lg shadow-xl animate-fade-up"
            />
            <div className="absolute -right-6 -bottom-6 -z-10 w-full h-full border-2 border-[#0A2165] rounded-lg"></div>
          </div>
          <div className="animate-fade-up delay-200">
            <div className="flex gap-2 mb-4">
              <div className="w-12 h-1 bg-[#0A2165] mt-4"></div>
              <h3 className="text-[#0A2165] text-xl">Meet Our Leader</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet the Intellectual Leader of the Next Generation
            </h2>
            <h4 className="text-xl text-[#0A2165] mb-4">
              New Jersey Mayoral Candidate - Adam Brown
            </h4>
            <p className="text-gray-600 text-lg">
              "I promise to do my best to bring innovation to my city and provide a better future for my people."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;
