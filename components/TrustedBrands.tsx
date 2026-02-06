"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiThreedotjs,
  SiGithub,
  SiPrisma,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { icon: SiHtml5, label: "HTML/CSS", color: "#E34F26" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiReact, label: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiThreedotjs, label: "Three.js", color: "#ffffff" },
  { icon: SiGithub, label: "GitHub", color: "#F05032" },
];

export const TrustedBrands = () => {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] select-none pointer-events-none overflow-hidden md:pb-10 md:pt-20">
      <div className="container mx-auto flex flex-col items-center text-center mb-8">
        <h3 className="text-sm md:text-lg font-bold tracking-[0.3em] text-brand-primary uppercase opacity-80 drop-shadow-[0_0_10px_rgba(182,248,41,0.5)]">
          Powered By Modern Technologies
        </h3>
      </div>
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-brand-dark to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-brand-dark to-transparent z-20"></div>

        <Carousel
          opts={{ loop: true, dragFree: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 0.8, // Slow smooth scroll
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-0 items-center">
            {techStack.map((tech, idx) => (
              <CarouselItem
                key={idx}
                className="pl-0 basis-auto min-w-[200px] md:min-w-[240px]"
              >
                <div className="flex items-center justify-center gap-4 px-8 group">
                  {/* Icon with Glow */}
                  <div className="relative p-3 rounded-xl bg-brand-surface/30 border border-brand-border/50 group-hover:border-brand-primary/50 transition-colors duration-500">
                    <tech.icon
                      className="w-4 h-4 text-brand-muted group-hover:text-[var(--hover-color)] transition-all duration-500 group-hover:drop-shadow-[0_0_8px_var(--hover-color)]"
                      style={
                        { "--hover-color": tech.color } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Text with Glow */}
                  <span className="text-lg md:text-xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40 group-hover:to-brand-primary/80 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(182,248,41,0.4)]">
                    {tech.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
