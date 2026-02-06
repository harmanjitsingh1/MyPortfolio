import React from "react";
import Card from "./Card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Document Exchange App",
    desc: "A secure platform for seamless document sharing and collaboration, featuring real-time updates and version control.",
    tags: ["React", "Node.js", "Secure"],
    image: "/projects/doc-exchange-1.png",
    image2: "/projects/doc-exchange-2.png", // Hover image
  },
  {
    title: "E-commerce Platform",
    desc: "Headless e-commerce solution with Shopify integration, supporting 10k+ concurrent users.",
    tags: ["React", "Node.js", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    image2: undefined,
  },
  {
    title: "AI Content Generator",
    desc: "SaaS application leveraging LLMs to help marketers generate blog content 10x faster.",
    tags: ["OpenAI API", "Tailwind", "Svelte"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    image2: undefined,
  },
  {
    title: "Health Tracking App",
    desc: "Mobile-first progressive web app for tracking daily fitness and nutrition goals.",
    tags: ["PWA", "Firebase", "React"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    image2: undefined,
  },
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
            href="#"
            className="text-brand-primary font-semibold hover:underline decoration-2 underline-offset-4"
          >
            View Github Profile &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[120%] w-[120%] bg-brand-primary/10 blur-[120px] rounded-full opacity-70 z-0" />
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-brand-border bg-brand-surface hover:border-brand-primary/50 transition-all duration-300"
            >
              {/* Image Container with Hover Effect */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.image2 && (
                  <img
                    src={project.image2}
                    alt={`${project.title} - Hover Preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-brand-dark border border-brand-border hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-brand-dark border border-brand-border hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-brand-muted mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-brand-dark border border-brand-border text-brand-muted uppercase tracking-wide"
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
