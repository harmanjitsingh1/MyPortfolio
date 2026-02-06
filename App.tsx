import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { ModalProvider, useModal } from "./context/ModalContext";
import { ToastProvider } from "./context/ToastContext";
import ContactModal from "./components/ContactModal";
import { TrustedBrands } from "./components/TrustedBrands";

const AutoOpenModal: React.FC = () => {
  const { openModal } = useModal();
  const hasOpened = React.useRef(false);

  useEffect(() => {
    // Only set the timer if we haven't opened yet
    if (hasOpened.current) return;

    const timer = setTimeout(() => {
      // Check again inside timeout to be safe
      if (!hasOpened.current) {
        openModal();
        hasOpened.current = true;
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [openModal]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToastProvider>
      <ModalProvider>
        <AutoOpenModal />
        <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-brand-dark overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <TrustedBrands />
            <Services />
            <Projects />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CallToAction />
          </main>
          <Footer />
          <ContactModal />
        </div>
      </ModalProvider>
    </ToastProvider>
  );
};

export default App;
