const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Flutter", "Dart"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Figma", "Agile", "Postman", "Visual Paradigm", "JasperSoft Reporting"]
    },
    {
      category: "Analytical & Research",
      skills: ["Data Analysis", "Research", "Problem Structuring", "Report Writing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
