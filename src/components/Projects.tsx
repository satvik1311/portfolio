import { MoveRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Ai Memory Vault",
      category: "AI-Powered Web Application",
      year: "2026",
      description: "An AI-driven platform that lets users capture thoughts, memories, and goals while interacting with a simulated future self, powered by Generative AI to provide insights, motivation, and long-term perspective.",
      link: "https://github.com/satvik1311/ai-memory-vault",
    },
    {
      title: "Tridosha AI",
      category: "AI-Powered Health & Wellness System",
      year: "2025",
      description: "An intelligent wellness platform that combines Ayurveda with AI to analyze individual body types and deliver personalized recommendations for diet, lifestyle, and mental well-being.",
      link: "https://github.com/satvik1311/Tridosha-ai",
    },
    {
      title: "MedScan",
      category: "AI-Powered Healthcare Application",
      year: "2025",
      description: "An AI-driven healthcare platform that converts handwritten prescriptions into structured digital data using OCR and leverages Generative AI to provide clear explanations, dosage insights, and medication understanding. Built with Azure Blob Storage, Azure Computer Vision, OpenAI, and MERN stack.",
      link: "https://github.com/satvik1311/MedScan",
    },
    {
      title: "SanskritOCR",
      category: "AI + Computer Vision",
      year: "2025",
      description: "Built a custom OCR pipeline for Sanskrit text detection using a CRAFT-inspired deep learning model, including data preprocessing, annotation parsing, and bounding box prediction.",
      link: "https://github.com/satvik1311/Sanskrit-OCR-Detection",
    },
  ];

  return (
    <section className="relative z-20 w-full min-h-screen py-12 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg">
            A curated list of intelligent platforms and digital experiences bridging AI and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md cursor-pointer min-h-[320px] block"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-[70%]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl text-white font-medium mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center text-neutral-400 group-hover:text-white transition-colors duration-300">
                <span className="text-sm uppercase tracking-widest mr-4">Contribute / View Source</span>
                <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
