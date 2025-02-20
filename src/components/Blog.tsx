
const posts = [
  {
    title: "New Public Transportation Routes",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?auto=format&fit=crop&q=80",
    description: "Expanding our city's transportation network for better connectivity.",
  },
  {
    title: "Green City Initiative Launch",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
    description: "Join us in making our city more sustainable and environmentally friendly.",
  },
  {
    title: "Community Safety Programs",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    description: "New initiatives to enhance public safety and emergency response.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Latest News & Updates</h2>
          <p className="text-gray-600">Stay informed about the latest developments in our city</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="feature-card-hover bg-white rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[#0A2165]">{post.date}</span>
                <h3 className="text-xl font-display font-semibold mb-2 mt-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="text-[#0A2165] font-semibold hover:underline inline-flex items-center"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
