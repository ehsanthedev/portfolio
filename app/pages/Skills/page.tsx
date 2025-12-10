"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaPalette,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function SkillsPage() {
  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 60 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express", level: 60 },
        { name: "REST APIs", level: 60 },
        // { name: 'GraphQL', level: 65 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "React Native", level: 65 },
        { name: "Responsive Design", level: 90 },
        { name: "PWA", level: 60 },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 60 },
        { name: "User Research", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "Firebase", level: 65 },
        // { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      title: "Tools & Other",
      icon: <FaTools className="text-yellow-400 text-4xl mb-4" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        // { name: 'Docker', level: 60 },
        // { name: 'Jest', level: 70 },
        // { name: 'CI/CD', level: 65 },
      ],
    },
  ];

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
          My <span className="text-yellow-400">Skills</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I work with to create exceptional digital
          experiences
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/10 transition-all"
            >
              <div className="text-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-yellow-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + catIndex * 0.05,
                        }}
                        className="bg-yellow-400 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mt-20"
      >
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-yellow-400">Other</span> Proficiencies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Agile Methodologies",
              "Technical Writing",
              "Code Review",
              "Mentoring",
              "Public Speaking",
              "Project Management",
              "Team Collaboration",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
