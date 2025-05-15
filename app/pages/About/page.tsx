'use client';
import profilePic from '../../../public/image.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaMobile } from 'react-icons/fa';

export default function About() {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <FaCode className="text-yellow-400 text-2xl" />,
      description:
        'Building responsive UIs with React, Next.js, and Tailwind CSS',
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette className="text-yellow-400 text-2xl" />,
      description: 'Creating intuitive and visually appealing user experiences',
    },
    {
      name: 'Backend Integration',
      icon: <FaServer className="text-yellow-400 text-2xl" />,
      description: 'Connecting frontend with APIs and databases',
    },
    {
      name: 'Mobile Responsiveness',
      icon: <FaMobile className="text-yellow-400 text-2xl" />,
      description: 'Ensuring perfect display on all devices',
    },
  ];

  const experience = [
    {
      year: '2022-Present',
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
    },
    { year: '2020-2022', role: 'UI Developer', company: 'Digital Creations' },
    {
      year: '2018-2020',
      role: 'Web Design Intern',
      company: 'Creative Studio',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-yellow-400">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={profilePic} // Replace with your image
                  alt="Muhammad Ehsan"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">
                Who <span className="text-yellow-400">I Am</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                I'm Muhammad Ehsan, a passionate frontend developer with over 5
                years of experience creating beautiful, functional, and
                user-centered digital experiences. I specialize in modern
                JavaScript frameworks and have a keen eye for design details.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new web
                technologies, contributing to open-source projects, or mentoring
                aspiring developers. I believe in writing clean, efficient code
                and creating products that make a difference.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-yellow-400 font-bold">Name:</h3>
                  <p>Muhammad Ehsan</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold">Email:</h3>
                  <p>ehsanthedev@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold">From:</h3>
                  <p>Faisalabad, Pakistan</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold">Freelance:</h3>
                  <p>Available</p>
                </div>
              </div>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
                Download CV
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700 transition-colors"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The path that brought me where I am today
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`mb-8 p-6 rounded-lg ${
                  index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-yellow-400">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <div className="px-4 py-2 bg-gray-900 rounded-full text-sm font-medium">
                    {exp.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
