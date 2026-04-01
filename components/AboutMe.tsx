import React from "react";
import { Layout, Code2, Briefcase, GraduationCap, User } from "lucide-react";
import Card from "./Card";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-brand-dark relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div className="order-1 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who am I? <br />
            <span className="text-brand-primary">A passionate builder.</span>
          </h2>
          <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
            <p>
              Hello! I'm Harmanjit Singh, a Full Stack Engineer dedicated to crafting
              beautiful, high-performance web applications. I bridge the gap
              between stunning user interfaces and robust backend logic.
            </p>
            <p>
              My journey in tech is fueled by an endless curiosity and a drive to solve
              real-world problems through elegant code. Whether it's architecting
              scalable databases or animating a responsive frontend, I pour my passion
              into every line.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source, and constantly refining my craft. Let's build
              something extraordinary together.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">3+</span>
              <span className="text-sm text-brand-muted">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-brand-border"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">20+</span>
              <span className="text-sm text-brand-muted">Projects Completed</span>
            </div>
            <div className="w-px h-12 hidden md:block bg-brand-border"></div>
            <div className="flex flex-col hidden md:flex">
              <span className="text-4xl font-bold text-white mb-1">100%</span>
              <span className="text-sm text-brand-muted">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right Side: Cards Component */}
        <div className="order-2 relative w-full h-full min-h-[400px]">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-2 gap-4 h-full items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <Card className="group flex flex-col items-start p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center mb-4 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:shadow-[0_0_15px_rgba(182,248,41,0.5)] transition-all duration-300 z-10">
                  <Layout className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">Frontend</h3>
                <p className="text-sm text-brand-muted relative z-10">React, Next.js, Tailwind, TS</p>
              </Card>

              <Card className="group flex flex-col items-start p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center mb-4 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:shadow-[0_0_15px_rgba(182,248,41,0.5)] transition-all duration-300 z-10">
                  <User className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">Experience</h3>
                <p className="text-sm text-brand-muted relative z-10">3+ Years Building Web Apps</p>
              </Card>
            </div>

            {/* Right Column, staggered */}
            <div className="flex flex-col gap-4 translate-y-8 md:translate-y-12">
              <Card className="group flex flex-col items-start p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center mb-4 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:shadow-[0_0_15px_rgba(182,248,41,0.5)] transition-all duration-300 z-10">
                  <Code2 className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">Backend</h3>
                <p className="text-sm text-brand-muted relative z-10">Node.js, Express, Postgres</p>
              </Card>

              <Card className="group flex flex-col items-start p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center mb-4 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:shadow-[0_0_15px_rgba(182,248,41,0.5)] transition-all duration-300 z-10">
                  <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">Education</h3>
                <p className="text-sm text-brand-muted relative z-10">Computer Science Degree</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
