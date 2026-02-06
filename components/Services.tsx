import React from "react";
import { Layout, Smartphone, Zap, Search } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive interfaces using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Enhancing core web vitals and reducing load times for better SEO and UX.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications built with React Native.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    desc: "Code structure optimization to ensure search engines love your application.",
  },
];

import { useModal } from "../context/ModalContext";

const Services: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 bg-brand-dark relative"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Sticky Info */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expertise that <br />
              <span className="text-brand-primary">drives growth.</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              I don't just write code; I build solutions that solve business
              problems. From initial concept to deployment, I ensure every layer
              of your application is optimized for success.
            </p>
            <Button onClick={openModal}>Start a Project</Button>
          </div>
        </div>

        {/* Right Column: Service List */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 group hover:bg-brand-surface/80"
            >
              <div className="w-14 h-14 rounded-full bg-brand-dark border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-primary transition-colors">
                <service.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
