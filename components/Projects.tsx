import React from "react";
import Card from "./Card";
import { ExternalLink, Github } from "lucide-react";
import docExchange1 from "@/assets/doc-exchange-2.png";
import docExchange2 from "@/assets/doc-exchange-1.png";
import serviceHive1 from "@/assets/service-hive.png";
import proPortrait from "@/assets/pro-portrait.png";

const projects = [
  {
    title: "ServiceHive - Service Booking Platform",
    desc: "A service booking platform for users to book local services provided by service providers.",
    tags: ["React", "Node.js", "Stripe"],
    image: serviceHive1,
    image2: undefined,
    gitHub: "https://github.com/harmanjitsingh1/ServiceHive",
    live: "https://service-hive.vercel.app",
  },
  {
    title: "xCHnG - A Document Exchange App",
    desc: "A secure platform for seamless document sharing and collaboration, featuring real-time updates and version control.",
    tags: ["React", "PWA", "Node.js", "Supabase"],
    image: docExchange1,
    image2: docExchange2,
    gitHub: "https://github.com/harmanjitsingh1/xCHnG-Mine",
    live: "https://exchange-pearl-sigma.vercel.app",
  },
  {
    title: "ProPortrait - AI Headshot Generator",
    desc: "SaaS application leveraging LLMs to help marketers generate blog content 10x faster.",
    tags: ["Gemini AI API", "Supabase", "React.js"],
    image: proPortrait,
    image2: undefined,
    gitHub: "https://github.com/harmanjitsingh1/ProPortrait",
    live: "https://pro-portrait.vercel.app/"
  },
  // {
  //   title: "Health Tracking App",
  //   desc: "Mobile-first progressive web app for tracking daily fitness and nutrition goals.",
  //   tags: ["PWA", "Firebase", "React"],
  //   image:
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  //   image2: undefined,
  // },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-primary">
              Selected Work
            </h2>
            <p className="text-brand-muted max-w-xl">
              A curated selection of projects that demonstrate my ability to
              tackle complex problems.
            </p>
          </div>
          <a
            href="https://github.com/harmanjitsingh1"
            target="main"
            className="text-brand-primary font-semibold hover:underline decoration-2 underline-offset-4"
          >
            View Github Profile &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative max-w-sm sm:max-w-none mx-auto">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[120%] w-[120%] bg-brand-primary/10 blur-[120px] rounded-full opacity-70 z-0 pointer-events-none" />
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-border bg-brand-surface hover:border-brand-primary/40 hover:shadow-[0_8px_30px_rgba(182,248,41,0.12)] transition-all duration-500 transform hover:-translate-y-1.5"
            >
              {/* Image Container with Hover Effect */}
              <div className="aspect-video overflow-hidden relative border-b border-brand-border/50 bg-[#0A0A0A]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {project.image2 && (
                  <img
                    src={project.image2}
                    alt={`${project.title} - Hover Preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay gradient for cooler look */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow z-10 bg-brand-surface relative">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.gitHub}
                      target="_blank"
                      className="p-1.5 rounded-lg bg-brand-dark border border-brand-border hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-all shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-1.5 rounded-lg bg-brand-dark border border-brand-border hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-all shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-brand-muted mb-6 flex-grow line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-brand-dark border border-brand-border/60 text-brand-muted uppercase tracking-wider shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
