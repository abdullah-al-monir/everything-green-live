'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiPhone, BiMapPin } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            <p className="text-sm font-semibold text-green-primary mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-darker mb-6 leading-tight">
              We'd Love To Hear From You
            </h1>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
              Have questions? Our team is ready to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BsMailbox className="w-8 h-8" />,
                title: 'Email',
                value: 'hello@greenext.com',
                subtitle: 'We reply within 24 hours'
              },
              {
                icon: <BiPhone className="w-8 h-8" />,
                title: 'Phone',
                value: '+1 (555) 123-4567',
                subtitle: 'Mon-Fri 9am-6pm EST'
              },
              {
                icon: <BiMapPin className="w-8 h-8" />,
                title: 'Office',
                value: 'San Francisco, CA',
                subtitle: 'Visit our headquarters'
              }
            ].map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-light rounded-2xl p-8 text-center card-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-green-primary text-white flex items-center justify-center mx-auto mb-6">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-darker mb-2">{contact.title}</h3>
                <p className="text-gray-darker font-semibold mb-2">{contact.value}</p>
                <p className="text-gray-dark text-sm">{contact.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 sm:py-32 bg-gray-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-darker mb-8">Send Us A Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-light rounded-lg border border-green-secondary">
                  <p className="text-green-primary font-semibold">✓ Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-green-light rounded-2xl focus:outline-none focus:border-green-primary transition-colors duration-200 resize-none"
                />

                <button type="submit" className="btn-primary w-full text-lg">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 card-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-darker mb-6">Why Contact Us?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Support',
                    desc: 'Need help with the extension? Our support team is here to assist.'
                  },
                  {
                    title: 'Partnerships',
                    desc: 'Interested in working together? Let\'s explore collaboration opportunities.'
                  },
                  {
                    title: 'Feedback',
                    desc: 'Have ideas to improve our product? We love hearing from our users.'
                  },
                  {
                    title: 'Sales Inquiries',
                    desc: 'Looking for enterprise solutions? Contact our sales team.'
                  }
                ].map((reason, i) => (
                  <div key={i} className="pb-6 border-b border-gray-light last:border-0 last:pb-0">
                    <h4 className="font-bold text-gray-darker mb-2">{reason.title}</h4>
                    <p className="text-gray-dark text-sm">{reason.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-light">
                <p className="text-gray-dark text-sm">
                  <span className="font-semibold text-gray-darker">Response Time:</span> We typically respond within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-darker mb-12">Quick Answers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Common Issues',
                desc: 'Check our help center for answers to common questions'
              },
              {
                title: 'Documentation',
                desc: 'Browse our detailed guides and tutorials'
              },
              {
                title: 'Community Forum',
                desc: 'Join our community and get help from other users'
              }
            ].map((link, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-gray-darker mb-2 group-hover:text-green-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-dark text-sm">{link.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}