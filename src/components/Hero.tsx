const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">James Christopher Dharmadi</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Full Stack Developer • React & Node.js Specialist • Building Scalable Web Apps
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto">
        I build modern full-stack applications with React, Node.js, PostgreSQL, and Flutter, turning ideas into real-world products with clean UI and strong backend systems.
        </p>
        <br />
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Currently interning at PT KPSG Group and developing my thesis project LapanganKita.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
