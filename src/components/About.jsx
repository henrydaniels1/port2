import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-800 to-gray-600 text-gray-100 relative overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="w-72 h-72 bg-gray-500 rounded-full absolute opacity-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="w-96 h-96 bg-gray-400 rounded-full absolute opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="w-48 h-48 bg-gray-600 rounded-full absolute opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center p-8 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I&apos;m a web developer with a passion for crafting beautiful and functional websites. My focus is on delivering digital experiences that are not just visually stunning but also intuitive, user-friendly, and accessible to everyone. With a blend of creativity and technical expertise, I strive to bring ideas to life in the digital world.
        </p>
      </motion.div>

      {/* Image Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-gray-700 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
}
