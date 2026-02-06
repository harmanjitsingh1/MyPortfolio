import React from "react";
import Button from "./Button";

import { useModal } from "../context/ModalContext";

const CallToAction: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-primary">
          Ready to build something <br />
          <span className="text-brand-primary">extraordinary?</span>
        </h2>
        <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-12">
          Let's turn your ideas into a high-performance reality. Spots for new
          projects are limited for this quarter.
        </p>
        <Button
          size="large"
          className="text-lg px-12 py-5 shadow-[0_0_40px_rgba(182,248,41,0.3)]"
          onClick={openModal}
        >
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
