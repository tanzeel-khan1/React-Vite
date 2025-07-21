import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}  >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-teal-400 mb-4"
          />
          <h1 className="text-4xl font-bold text-teal-400">Tanzeel Khan</h1>
          <p className="text-lg text-gray-300">Frontend Developer</p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }} >
          <h2 className="text-2xl font-semibold text-teal-300 mb-2">About Me</h2>
          <p className="text-gray-400">
            Passionate frontend developer skilled in creating responsive and modern user interfaces using React, Tailwind CSS, and animation libraries. Always eager to learn new technologies and improve UI/UX.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <li className="bg-gray-800 px-4 py-2 rounded-lg">React</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg">HTML5 & CSS3</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg">Framer Motion</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg">Git</li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-teal-200">E-commerce Website</h3>
              <p className="text-gray-400">Built a complete frontend for an online electronics store using React and Tailwind.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-teal-200">Portfolio Site</h3>
              <p className="text-gray-400">Personal portfolio built with React and animated using Framer Motion.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          <h2 className="text-2xl font-semibold text-teal-300 mb-2">Contact</h2>
          <p className="text-gray-400">Email: tanzeelkhan@example.com</p>
          <p className="text-gray-400">GitHub: github.com/tanzeelkhan</p>
        </motion.div>

      </div>


    </div>
  );
};

export default Portfolio;
