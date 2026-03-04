const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate developer who enjoys solving problems and building clean, responsive web applications using modern technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Besides coding, I'm also interested in other parts of the software development process such as quality assurance, testing, and project coordination. I enjoy understanding how a product is planned, built, and improved to create a better experience for users.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I focus on writing clean, maintainable code and continuously learning to improve both my technical and collaborative skills.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">▹</span>
                <span>Location: Tangerang, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">▹</span>
                <span>Experience: 1+ years</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">▹</span>
                <span>Education: Computer Science</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">▹</span>
                <span>Languages: English, Mandarin.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
