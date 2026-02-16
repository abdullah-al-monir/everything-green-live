'use client';

import { motion } from 'framer-motion';
import { BiRocket } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { IoDiamondOutline, IoHeartOutline, IoPeopleOutline } from 'react-icons/io5';
import { PiPlant } from 'react-icons/pi';
import { RiFocus2Line } from 'react-icons/ri';

export default function AboutPage() {
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
            <p className="text-sm font-semibold text-green-primary mb-4">ABOUT US</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-darker mb-6 leading-tight">
              Building The Future Of SEO Research
            </h1>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
              We believe that everyone should have access to professional-grade SEO tools.
              Our mission is to democratize competitive intelligence for marketers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-darker mb-6">Our Mission</h2>
              <p className="text-gray-dark text-lg leading-relaxed mb-6">
                To empower digital marketers, SEO professionals, and business owners with
                instant access to actionable competitive intelligence. We make it incredibly
                easy to analyze any website's SEO performance with just one click.
              </p>
              <ul className="space-y-4">
                {['Accuracy First', 'User-Friendly Design', 'Affordable Pricing', 'Continuous Innovation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                    <span className="text-gray-dark font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gray-light rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-green flex items-center justify-center">
                <RiFocus2Line className='text-6xl text-red-500' />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-gray-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-darker mb-16">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Active Users' },
              { number: '50M+', label: 'Websites Analyzed' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-green-primary mb-2">{stat.number}</h3>
                <p className="text-gray-dark font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-darker mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              A diverse group of passionate professionals dedicated to building amazing tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Sarah Chen', role: 'CEO & Founder', bio: 'Former Head of SEO at TechCorp' },
              { name: 'Mike Rodriguez', role: 'CTO', bio: '15+ years in software engineering' },
              { name: 'Emily Watson', role: 'Head of Marketing', bio: 'Digital marketing expert' },
              { name: 'David Kim', role: 'Lead Developer', bio: 'Full-stack developer & open source contributor' },
              { name: 'Jessica Lee', role: 'Product Manager', bio: 'Passionate about user experience' },
              { name: 'Alex Thompson', role: 'Customer Success', bio: 'Dedicated to customer satisfaction' }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-green flex items-center justify-center text-5xl overflow-hidden group-hover:scale-105 transition-transform">
                  👤
                </div>
                <h3 className="text-xl font-bold text-gray-darker mb-1">{member.name}</h3>
                <p className="text-green-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-dark text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gradient-light-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-darker mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IoDiamondOutline className="text-5xl text-green-primary" />,
                title: 'Quality',
                description: 'We never compromise on data accuracy and product quality'
              },
              {
                icon: <IoPeopleOutline className="text-5xl text-green-primary" />,
                title: 'Transparency',
                description: 'Honest pricing, clear communication, and no hidden fees'
              },
              {
                icon: <BiRocket className="text-5xl text-green-primary" />,
                title: 'Innovation',
                description: 'Constantly pushing boundaries and improving our tools'
              },
              {
                icon: <PiPlant className="text-5xl text-green-primary" />,
                title: 'Growth',
                description: 'Your success is our success and we invest in your growth'
              },
              {
                icon: <BsShieldCheck className="text-5xl text-green-primary" />,
                title: 'Security',
                description: 'Your data is safe with enterprise-grade encryption'
              },
              {
                icon: <IoHeartOutline className="text-5xl text-green-primary" />,
                title: 'Community',
                description: 'Building a supportive community of digital professionals'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 card-shadow text-center"
              >
                <div className="text-5xl mb-4 flex-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-darker mb-3">{value.title}</h3>
                <p className="text-gray-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-darker mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-dark mb-10 max-w-2xl mx-auto">
              Start analyzing websites like a pro today. Get instant access to professional-grade SEO insights.
            </p>
            <button className="btn-primary text-lg">Get Started Free</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}