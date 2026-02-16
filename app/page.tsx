'use client';
import { useState } from 'react';
import { MeterGauge } from '@/components/MeterGauge';
import { BiGlobe, BiMinus, BiPlay, BiPlus } from 'react-icons/bi';
import Image from 'next/image';
import { AttributionMatch } from '@/components/AttributionMatch';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { BsFillEyeFill, BsFillPlugFill } from 'react-icons/bs';

export default function ExtensionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="bg-white font-sans text-gray-darker">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-32 overflow-hidden gradient-light-bg">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-gray-darker">
              Your SEO <span className="relative inline-block">
                Swiss Army
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#1c9876" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> <br /> Knife, Right In The Browser.<span className="text-orange">🔥</span>
            </h1>
            <p className="text-gray-dark text-lg mb-10 max-w-md leading-relaxed">
              One click reveals the SEO score, traffic, backlinks, and authority of any website you visit.
              Perfect for link building, content research, and competitive analysis.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="btn-primary text-lg shadow-lg" style={{ boxShadow: '0 10px 25px rgba(28, 152, 118, 0.2)' }}>
                Add to Chrome
              </button>
              <button className="flex items-center gap-3 font-bold text-gray-darker hover:text-green-primary smooth-transition">
                <div className="w-12 h-12 bg-black text-white rounded-full flex-center shadow-lg">
                  <BiPlay size={24} />
                </div>
                Watch Video
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center lg:justify-end h-137.5">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 80, opacity: 0.35 }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-0 w-90 rounded-2xl overflow-hidden"
              style={{
                filter: 'blur(2px)',
                boxShadow: '0 60px 120px -20px rgba(0,0,0,0.3)'
              }}
            >
              <Image
                src="/hero-2.png"
                width={480}
                height={360}
                alt="Background Dashboard"
                className="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: -60, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-130 bg-gray-900 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.4), 0 30px 60px -30px rgba(0,0,0,0.3)'
              }}
            >
              <div className="border-8 border-gray-900 rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/hero-1.png"
                  width={520}
                  height={380}
                  alt="Main Browser View"
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-8 -right-4 z-30 w-90"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
              }}
            >
              <AttributionMatch value={64} />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-12 left-8 z-30 w-90"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))'
              }}
            >
              <MeterGauge value={78} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-darker mb-2">Loved By SEOs And Marketers</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 card-shadow border border-gray-light hover:shadow-lg smooth-transition"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} size={24} className="text-green-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-dark mb-8 leading-relaxed font-medium">
                  {testimonial.text}
                </p>

                {/* Quote Icon */}
                <div className="flex justify-end mb-6">
                  <FaQuoteRight size={32} className="text-green-secondary" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-light shrink-0">
                    <Image
                      src={testimonial.avatar}
                      width={56}
                      height={56}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-darker">{testimonial.name}</h4>
                    <p className="text-sm text-gray-dark">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${currentTestimonial === index
                  ? 'bg-green-primary w-8'
                  : 'bg-green-light hover:bg-green-secondary'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-darker mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line (SVG) */}
            <svg className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-2/3 h-20" viewBox="0 0 800 100" fill="none">
              <path d="M0 50C200 0 600 100 800 50" stroke="#1c9876" strokeDasharray="8 8" strokeOpacity="0.3" />
            </svg>
            {[
              { step: "Step 1", title: "Add The Extension From The Chrome Web Store.", icon: BsFillPlugFill },
              { step: "Step 2", title: "Navigate To Any Website You Want To Analyze.", icon: BiGlobe },
              { step: "Step 3", title: "Click The Extension Icon To See All SEO Data Magically Overlay The Page.", icon: BsFillEyeFill }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="bg-white card-shadow px-4 py-2 rounded-lg text-xs font-bold mb-6 border border-gray-light">{item.step}</div>
                  <IconComponent className="w-12 h-12 text-green-primary mb-6" />
                  <p className="font-semibold text-gray-darker max-w-50 leading-relaxed">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-darker mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-green-light bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-gray-light smooth-transition"
                >
                  <span className="text-lg font-bold text-gray-darker flex gap-4">
                    <span className="text-green-light">0{i + 1}</span> {faq.q}
                  </span>
                  {openFaq === i ? (
                    <BiMinus size={20} className="text-green-primary" />
                  ) : (
                    <BiPlus size={20} className="text-green-primary" />
                  )}
                </button>
                <div className={`overflow-hidden smooth-transition ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-gray-dark px-6">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 gradient-light-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-darker mb-6">Ready to Analyze Any Website?</h2>
            <p className="text-lg text-gray-dark mb-10 max-w-2xl mx-auto">
              Join thousands of SEO professionals already using our extension to gain competitive insights instantly.
            </p>
            <button className="btn-primary text-lg">Get Started Free</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    text: "I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.",
    name: "Jhon Stokes",
    role: "Founder",
    avatar: "/c-2.png"
  },
  {
    text: "I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.",
    name: "Jane Doe",
    role: "Head of SEO at ABC Agency.",
    avatar: "/c-2.png"
  },
  {
    text: "This extension has completely transformed how I approach SEO research. The data is accurate, the interface is intuitive, and the support team is amazing. Highly recommended!",
    name: "Mike Johnson",
    role: "SEO Strategist",
    avatar: "/c-2.png"
  },
  {
    text: "Best investment for my digital marketing agency. My clients see the value immediately, and we've increased our productivity by 40%. This tool is a game-changer.",
    name: "Sarah Williams",
    role: "Marketing Director",
    avatar: "/c-1.png"
  }
];

const faqs = [
  { q: "Is This Extension Free?", a: "Yes! The core version with key metrics is free. We offer a Pro plan with more in-depth data and historical trends." },
  { q: "Which Browsers Do You Support?", a: "Currently we support Google Chrome, Brave, and Edge." },
  { q: "How Accurate Is The Data?", a: "Our data is updated every 24 hours to ensure high precision." }
];