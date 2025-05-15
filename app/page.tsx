'use client';
import profilePic from '../public/image.png';
import Image from 'next/image';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // Skills data
  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 75 },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi I&apos;m{' '}
              <span className="text-yellow-400">Muhammad Ehsan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              I build exceptional digital experiences with modern web
              technologies. Focused on creating responsive, performant, and
              accessible web applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="/pages/Contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="/pages/About"
                className="border border-yellow-400 hover:bg-yellow-400/10 text-yellow-400 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <Image
                  className="text-4xl"
                  src={profilePic}
                  alt="Profile Pic"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are the technologies I work with on a daily basis
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of my recent work that I&apos;m particularly proud of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce App</h3>
                <p className="text-gray-400 mb-4">
                  A modern e-commerce platform built with Next.js and Stripe
                  integration.
                </p>
                <Link href="#" className="text-yellow-400 hover:underline">
                  View Project →
                </Link>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">
                  Real-time data visualization dashboard with interactive
                  charts.
                </p>
                <Link href="#" className="text-yellow-400 hover:underline">
                  View Project →
                </Link>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Music Streaming App</h3>
                <p className="text-gray-400 mb-4">
                  A Spotify-like music player with custom playlists and audio
                  effects.
                </p>
                <Link href="#" className="text-yellow-400 hover:underline">
                  View Project →
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pages/Projects"
              className="inline-block border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m currently available for freelance work or full-time
              positions.
            </p>
            <Link
              href="/pages/Contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
