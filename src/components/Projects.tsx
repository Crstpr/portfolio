const Projects = () => {
  const projects = [
    {
      title: "Online Ticketing Platform - EventNih!",
      description: "A comprehensive platform designed to streamline the process of purchasing tickets for various events, seminars, and activities",
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
    },
    {
      title: "Facial Recognition Program",
      description: "Facial recognition technology to automate attendance tracking, thereby preventing unauthorized entry and ensuring accurate records.",
      technologies: ["Python", "OpenCV"],
    },
    {
      title: "Online Sports Booking System - LapanganKita",
      description: "An online booking system for sports facilities that allows users to reserve courts and track availability.",
      technologies: ["Flutter", "Node.js", "MySQL", "Dart"],
    },
    {
      title: "Portfolio",
      description: "A comprehensive overview of my professional capabilities and accomplishments. It highlights my skills and showcases a selection of projects that exemplify my expertise",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
