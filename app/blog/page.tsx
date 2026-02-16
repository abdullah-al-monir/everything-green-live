'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiSearch, BiCalendar, BiUser, BiChart, BiClipboard } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { LuFocus } from 'react-icons/lu';
import { PiMarkerCircleThin, PiNeedle } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { RiGuideFill } from 'react-icons/ri';
import { GiGraduateCap } from 'react-icons/gi';
import { IoMdDownload } from 'react-icons/io';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'seo', 'marketing', 'tutorial', 'news'];

  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Mistakes That Are Killing Your Rankings',
      excerpt: 'Discover the most common SEO mistakes and how to fix them to improve your search rankings dramatically.',
      category: 'seo',
      author: 'Sarah Chen',
      date: 'Mar 15, 2024',
      image: <BsSearch />,
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'How to Use Our Extension for Competitive Analysis',
      excerpt: 'A step-by-step guide on using our powerful extension to analyze competitors and stay ahead in your niche.',
      category: 'tutorial',
      author: 'Mike Rodriguez',
      date: 'Mar 12, 2024',
      image: <LuFocus />,
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'The Ultimate Link Building Strategy for 2024',
      excerpt: 'Learn the most effective link building strategies that actually work in 2024 and beyond.',
      category: 'seo',
      author: 'Emily Watson',
      date: 'Mar 10, 2024',
      image: <PiNeedle />,
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Google Algorithm Updates: What Changed and Why',
      excerpt: 'Complete breakdown of the latest Google algorithm updates and their impact on your website.',
      category: 'news',
      author: 'David Kim',
      date: 'Mar 8, 2024',
      image: <BiChart />,
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Content Marketing vs SEO: Which Should You Focus On?',
      excerpt: 'Understanding the difference and how to balance both strategies for maximum results.',
      category: 'marketing',
      author: 'Jessica Lee',
      date: 'Mar 5, 2024',
      image: <PiMarkerCircleThin />,
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Technical SEO Audit: Complete Checklist for 2024',
      excerpt: 'Everything you need to know about technical SEO and how to audit your website properly.',
      category: 'tutorial',
      author: 'Alex Thompson',
      date: 'Mar 1, 2024',
      image: <CiSettings />,
      readTime: '9 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="gradient-light-bg py-24 sm:py-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-green-primary mb-4">OUR BLOG</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-darker mb-6 leading-tight">
              SEO Tips, Insights & Strategies
            </h1>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest trends in SEO, digital marketing, and competitive intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b border-gray-light">
        <div className="container-custom">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-dark w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${selectedCategory === cat
                    ? 'bg-green-primary text-white'
                    : 'bg-gray-light text-gray-dark hover:bg-gray-light/80'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-lg transition-all group cursor-pointer"
                >
                  {/* Image */}
                  <div className="flex-center text-7xl h-60 bg-gray-light text-green-primary">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-green-light text-green-primary text-xs font-bold rounded-full capitalize">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-darker mb-3 group-hover:text-green-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-dark text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-light">
                      <div className="flex items-center gap-2 text-xs text-gray-dark">
                        <BiUser className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-dark">
                        <BiCalendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read Time */}
                    <p className="text-xs text-green-primary font-semibold mt-3">
                      {post.readTime}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-dark">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-secondary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 sm:py-32 bg-gradient-light-bg">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-darker mb-4">Subscribe To Our Newsletter</h2>
            <p className="text-lg text-gray-dark mb-8">
              Get the latest SEO tips and marketing insights delivered to your inbox weekly.
            </p>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>

            <p className="text-sm text-gray-dark mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-darker mb-16">Popular Resources</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <RiGuideFill />,
                title: 'SEO Beginner\'s Guide',
                desc: 'Everything you need to know to get started with SEO'
              },
              {
                icon: <BiClipboard />,
                title: 'Keyword Research Template',
                desc: 'Free template to research and organize keywords'
              },
              {
                icon: <GiGraduateCap />,
                title: 'Video Tutorial Series',
                desc: 'Step-by-step video guides for using our extension'
              },
              {
                icon: <IoMdDownload />,
                title: 'SEO Checklist',
                desc: 'Complete checklist for optimizing your website'
              }
            ].map((resource, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-light rounded-2xl p-8 text-left hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 text-green-primary">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-darker mb-2 group-hover:text-green-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-dark">{resource.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}