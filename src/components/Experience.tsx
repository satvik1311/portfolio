export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Evigway Technologies Pvt. Ltd",
      duration: "Mar 2026 – Present",
      description: [
        "Working as a full-stack developer on scalable, production-grade applications in a defense-tech environment.",
        "Developing and optimizing backend services using Node.js and Express, ensuring high performance and reliability.",
        "Building responsive and dynamic frontend interfaces using React.js and Tailwind CSS.",
        "Collaborating with cross-functional teams to design secure and efficient system architectures.",
        "Implementing REST APIs, authentication systems, and database integrations.",
        "Contributed to real-world deployment pipelines and performance optimization."
      ],
    },
    {
      role: "AI Developer Intern",
      company: "YantraPragya",
      duration: "May 2025 – Nov 2025",
      description: [
        "Processed and analyzed datasets using Pandas and NumPy for model training.",
        "Built and visualized machine learning models using TensorFlow and Matplotlib.",
        "Applied OpenCV for image preprocessing and detection tasks.",
        "Worked on bounding-box detection and semantic segmentation for medical imaging.",
        "Developed an OCR model for Sanskrit text recognition.",
        "Improved model accuracy through optimization techniques and documented results."
      ],
    },
    {
      role: "Web Development Intern",
      company: "Indux Solar",
      duration: "May 2025 – Sep 2025",
      description: [
        "Contributed to building and maintaining scalable web applications.",
        "Developed full-stack solutions for InduxProperties and InduxCRM platforms.",
        "Built responsive UIs using React.js and integrated backend services using Node.js & Express.",
        "Collaborated with team members to design, develop, and test features in an agile environment.",
        "Ensured performance optimization and improved overall user experience."
      ],
    },
  ];

  return (
    <section className="relative z-20 w-full py-12 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg">
            My professional journey so far.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 md:gap-0">
                <div>
                  <h3 className="text-xl md:text-2xl text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400 font-medium mt-1 uppercase tracking-widest text-sm">
                    {exp.company}
                  </p>
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-xs font-mono text-neutral-500 px-3 py-1 rounded-full border border-neutral-700/50 bg-neutral-800/30">
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-5 text-neutral-400 text-sm leading-relaxed mt-4 space-y-2 group-hover:text-neutral-300 transition-colors duration-300">
                {exp.description.map((point, i) => (
                  <li key={i} className="pl-1 marker:text-neutral-600">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
