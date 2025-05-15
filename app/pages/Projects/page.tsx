'use client';
import ecommerce from '../../../public/ecommerce.png';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaServer,
} from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'mobile' | 'fullstack';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with product listings, cart functionality, and Stripe payment integration.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      image: '/projects/ecommerce.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce.example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity application for managing tasks with drag-and-drop functionality and real-time updates.',
      tags: ['React', 'Firebase', 'Material UI'],
      category: 'frontend',
      image: '/projects/taskmanager.jpg',
      githubUrl: 'https://github.com/yourusername/task-manager',
    },
    {
      id: 3,
      title: 'Restaurant API Service',
      description:
        'Backend service for restaurant management with menu customization and order processing.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      category: 'backend',
      image: '/projects/restaurant-api.jpg',
      githubUrl: 'https://github.com/yourusername/restaurant-api',
    },
    {
      id: 4,
      title: 'Fitness Tracker Mobile App',
      description:
        'Cross-platform mobile application for tracking workouts and nutrition with data visualization.',
      tags: ['React Native', 'GraphQL', 'Expo'],
      category: 'mobile',
      image: '/projects/fitness-app.jpg',
      liveUrl: 'https://apps.apple.com/fitness-tracker',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectFilter = (category: string) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <FaCode className="mr-2" />;
      case 'backend':
        return <FaServer className="mr-2" />;
      case 'mobile':
        return <FaMobile className="mr-2" />;
      default:
        return <FaCode className="mr-2" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My <span className="text-yellow-400">Projects</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work and contributions
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'frontend', 'backend', 'mobile', 'fullstack'].map(
          (category, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                activeFilter === category
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => handleProjectFilter(category)}
            >
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          )
        )}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-400/20 transition-all flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={ecommerce}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <h3 className="text-2xl font-medium mb-4">No projects found</h3>
          <p className="text-gray-400">
            We couldn't find any projects matching this filter.
          </p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Whether you need a full application or help with part of one, I'd love
          to hear about it.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Let's Talk
        </motion.a>
      </motion.div>
    </div>
  );
}
