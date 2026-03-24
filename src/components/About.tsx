export default function About() {
  return (
    <section className="relative z-20 w-full min-h-screen flex items-center py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-32 w-full">
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight uppercase lg:sticky lg:top-24">
            About Me
          </h2>
          <div className="mt-6 w-12 h-1 bg-gradient-to-r from-neutral-500 to-transparent"></div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-10 text-neutral-400 text-lg md:text-2xl leading-relaxed font-light">
          <p>
            I am a Software Developer grounded in <span className="text-white font-medium">AI/ML</span>, <span className="text-white font-medium">Web3</span>, and <span className="text-white font-medium">full-stack engineering</span>, currently pursuing my B.Tech in Computer Science at GLA University. 
          </p>
          <p>
            I specialize in architecting scalable, real-world applications and actively contributing to the growing digital communities that push these technologies forward.
          </p>
          <p>
            Passionate about crafting high-impact products, I am constantly exploring emerging tools and methodologies—bridging the gap between complex backend systems and intuitive experiences through hands-on development and relentless innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
