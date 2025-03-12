import { Link } from 'react-router-dom';
import { blogPosts } from '../blogdata';
import { FaArrowRight, FaClock } from 'react-icons/fa';

function Blog() {
  // Get the first 3 blog posts for the featured section
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-[#0a0a0a]" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#222222] text-[#d3e97a] text-sm font-semibold">
            Blog
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-[#C7C7C7] max-w-2xl mx-auto">
            Sharing my thoughts and experiences in software development, web technologies, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[#111111] rounded-lg overflow-hidden border border-[#222222] hover:border-[#d3e97a] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#222222] text-[#d3e97a] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 hover:text-[#d3e97a] transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-[#C7C7C7] text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-[#C7C7C7]">
                    <FaClock className="mr-2" />
                    {post.readTime}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-[#d3e97a] hover:text-[#c8de62] transition-colors flex items-center gap-2"
                  >
                    Read More
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] text-[#d3e97a] rounded-full hover:bg-[#d3e97a] hover:text-black transition-all duration-300"
          >
            View All Posts
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;