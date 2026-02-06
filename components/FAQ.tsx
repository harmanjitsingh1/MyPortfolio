import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span
          className={`text-lg font-medium transition-colors ${isOpen ? "text-brand-primary" : "text-white group-hover:text-brand-primary"}`}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-primary" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-brand-muted leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your typical tech stack?",
      answer:
        "I primarily work with the React ecosystem (Next.js, React Native), using TypeScript for type safety and Tailwind CSS for styling. For the backend, I prefer Node.js, PostgreSQL, and serverless architectures on AWS or Vercel.",
    },
    {
      question: "Do you handle design as well?",
      answer:
        "Yes! While my core strength is engineering, I have strong experience in UI/UX design and can take a project from rough wireframes to a polished, high-fidelity final product.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Small projects typically take 2-4 weeks, while larger full-stack applications can take 2-3 months. I provide a detailed timeline and roadmap during the initial consultation.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Absolutely. I offer various maintenance packages to ensure your application stays secure, up-to-date, and performs optimally after launch.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
