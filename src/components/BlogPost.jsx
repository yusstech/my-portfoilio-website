import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogdata';
import { FaClock, FaArrowLeft, FaTags } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#0a0a0a] pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
              <p className="text-[#C7C7C7] mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] text-[#d3e97a] rounded-full hover:bg-[#d3e97a] hover:text-black transition-all duration-300"
              >
                <FaArrowLeft />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Back to Blog Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#d3e97a] hover:text-[#c8de62] transition-colors mb-8"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-[#C7C7C7] mb-6">
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{post.readTime}</span>
                </div>
                <span>•</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
              </div>

              {/* Featured Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-[#C7C7C7] text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
              
              {/* Tags */}
              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-[#222222]">
                <FaTags className="text-[#d3e97a]" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-[#222222] text-[#d3e97a] text-sm rounded-full hover:bg-[#d3e97a] hover:text-black transition-all duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost; 