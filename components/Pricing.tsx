import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import { useModal } from "../context/ModalContext";

const Pricing: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-primary">
            Simple Pricing
          </h2>
          <p className="text-brand-muted">
            Transparent packages for your development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter / Hourly Plan */}
          <div className="flex flex-col h-full bg-[#0A0A0A] border border-brand-primary/30 rounded-[2rem] p-8 hover:scale-[1.02] transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Hourly Rate
              </h3>
              <p className="text-brand-muted text-sm mb-6">
                For emerging brands & fixes
              </p>
              <div className="text-5xl font-bold text-white mb-1">$85</div>
              <p className="text-sm text-brand-muted uppercase tracking-wider font-medium">
                Per Hour
              </p>
            </div>

            <ul className="flex-1 space-y-5 mb-10">
              {[
                "Code Reviews",
                "Bug Fixes",
                "Consultation",
                "Feature Updates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-muted" />
                  </div>
                  <span className="text-brand-muted">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              className="w-full py-4 rounded-xl text-white border-brand-border/50 border border-brand-primary/50 hover:scale-105 hover:bg-brand-surface hover:text-white"
              onClick={openModal}
            >
              Book Hourly
            </Button>
          </div>

          {/* Growth / Project Plan */}
          <div className="flex flex-col h-full bg-[#0A0A0A] border-2 border-brand-primary/50 rounded-[2rem] p-8 relative shadow-[0_0_40px_rgba(182,248,41,0.1)] hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Recommended
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Project Based
              </h3>
              <p className="text-brand-muted text-sm mb-6">
                Most popular choice
              </p>
              <div className="text-5xl font-bold text-white mb-1">Custom</div>
              <p className="text-sm text-brand-muted uppercase tracking-wider font-medium">
                Fixed Price
              </p>
            </div>

            <ul className="flex-1 space-y-5 mb-10">
              {[
                "Full Project Management",
                "Architecture Design",
                "QA & Testing",
                "30 Days Support",
                "Priority Communication",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-dark" />
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              className="w-full py-4 rounded-xl"
              onClick={openModal}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
