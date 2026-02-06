import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Terminal, Code2, Globe } from "lucide-react";
import Button from "./Button";
import { TrustedBrands } from "./TrustedBrands";
import Background from "./Background";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Engineer";
  // const { openModal } = useModal(); // This import and usage is commented out in the provided snippet, so I'll keep it out.

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center md:pt-20 overflow-hidden">
      <Background />

      <div className="container mx-auto relative z-10 max-w-[1200px]">
        <div>
          <div className="flex flex-col lg:flex-row pb-10 justify-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-sm text-brand-muted">
                  Available for new projects
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">
                  Digital
                </span>
                <br />
                <span className="relative">
                  Experiences
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-brand-primary opacity-50"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:400ms]">
                I transform complex problems into elegant, scalable solutions.
                Specializing in modern web technologies and intuitive user
                interfaces.
              </p>
            </div>
            <div className="flex-1 relative animate-fade-in-up [animation-delay:400ms] hidden lg:block">
              <div className="relative w-full  max-w-[500px] mx-auto">
                <div className="absolute top-20 left-0 right-0 mx-auto w-full h-full bg-gradient-to-tr from-brand-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-[#0A0A0A] border border-brand-border rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 border-b border-brand-border pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-brand-muted font-mono ml-2">
                      developer.tsx
                    </div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-gray-400">
                      // Building the future needed
                    </div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-200">Engineer</span>{" "}
                      <span className="text-gray-400">=</span>{" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-blue-400">Developer</span>({"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-brand-primary">name</span>:{" "}
                      <span className="text-green-300">'Harmanjit Singh'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-brand-primary">role</span>:{" "}
                      <span className="text-green-300">
                        'Full Stack Engineer'
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-brand-primary">skills</span>: [
                      <span className="text-green-300">'React'</span>,{" "}
                      <span className="text-green-300">'Node.js'</span>,{" "}
                      <span className="text-green-300">'TypeScript'</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-brand-primary">passion</span>:{" "}
                      <span className="text-blue-400">true</span>
                    </div>
                    <div>{"}"});</div>
                    <div className="mt-4">
                      <span className="text-purple-400">await</span>{" "}
                      <span className="text-yellow-200">Engineer</span>.
                      <span className="text-blue-400">deploy</span>(
                      <span className="text-green-300">'Awesome_App'</span>);
                    </div>
                    <div className="typing-cursor inline-block w-2 h-4 bg-brand-primary ml-1 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
              <a href="#projects" className="w-auto">
                <Button className="w-auto">
                  View My Work <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Button variant="secondary" className="w-auto">
                Download Resume <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-brand-muted animate-fade-in-up [animation-delay:800ms]">
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Terminal className="w-5 h-5 text-brand-primary" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Code2 className="w-5 h-5 text-brand-primary" />
                <span>Modern Stack</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Globe className="w-5 h-5 text-brand-primary" />
                <span>Global Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
