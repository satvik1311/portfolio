export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "FastAPI (Uvicorn)"],
    },
    {
      title: "Cloud & AI Services",
      skills: ["Azure Blob Storage", "Azure Computer Vision", "Azure OpenAI", "Azure Cosmos DB", "OpenAI API", "Gemini API"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Label Studio"],
    },
  ];

  return (
    <section className="relative z-20 w-full py-12 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg">
            A comprehensive overview of the tools and technologies I use to build scalable, intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md"
            >
              <h3 className="text-lg text-white font-medium mb-6 uppercase tracking-widest group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-300">
                {category.title}
              </h3>
              
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
