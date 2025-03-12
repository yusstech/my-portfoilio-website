import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogdata';
import { FaArrowRight, FaClock, FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get unique tags from all blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-[#C7C7C7] max-w-2xl mx-auto">
              Explore articles about web development, software engineering, and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111111] text-white border border-[#222222] rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-[#d3e97a]"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C7C7C7]" />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="bg-[#111111] text-white border border-[#222222] rounded-lg px-4 py-2 focus:outline-none focus:border-[#d3e97a]"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
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
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#222222] text-[#d3e97a] text-xs rounded-full cursor-pointer"
                        onClick={() => setSelectedTag(tag)}
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

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center text-[#C7C7C7] py-12">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage; 