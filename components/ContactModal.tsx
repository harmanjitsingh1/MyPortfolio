import React, { useState, FormEvent, useEffect } from "react";
import {
  X,
  Send,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  Unplug,
  Linkedin,
  Github,
} from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useToast } from "../context/ToastContext";
import Button from "./Button";

const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useModal();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d5d1c47e-a89e-4a67-b368-3eadbd0fb60e",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          closeModal();
        }, 1000);
      } else {
        showToast(data.message || "Failed to send message", "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Minimal Backdrop - mostly transparent/blur as requested */}
      <div
        className="absolute inset-0 bg-brand-dark/20 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[450px] bg-[#0A0A0A] border border-brand-border/20 rounded-[2rem] p-8 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] animate-fade-in-up flex flex-col items-center shadow-[0_0_30px_rgba(182,248,41,0.15)]">
        <button
          onClick={closeModal}
          className="absolute top-5 right-6 text-brand-muted hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center w-full mb-8 pt-2">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* Glowing Icon */}
            <div className="w-12 h-12 shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center shadow-[0_0_30px_rgba(182,248,41,0.2)]">
              <Unplug className="w-6 h-6 text-brand-primary fill-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-0">
              Let's Connect
            </h2>
          </div>
          <p className="text-brand-muted text-sm max-w-[260px] mx-auto">
            Ready to start your project? Fill out the form below and I'll get
            back to you.
          </p>
        </div>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-bold text-brand-muted uppercase tracking-wider pl-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted/70" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-[#151515] border border-brand-border/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary/50 focus:bg-[#1a1a1a] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-bold text-brand-muted uppercase tracking-wider pl-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted/70" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-[#151515] border border-brand-border/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary/50 focus:bg-[#1a1a1a] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="project"
              className="text-xs font-bold text-brand-muted uppercase tracking-wider pl-1"
            >
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted/70" />
              <textarea
                id="project"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Tell me about your project..."
                className="w-full bg-[#151515] border border-brand-border/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary/50 focus:bg-[#1a1a1a] transition-all resize-none"
              />
            </div>
          </div>

          <Button
            className="w-full justify-center py-4 text-base shadow-[0_0_20px_rgba(182,248,41,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Social Options */}
        <div className="mt-8 flex items-center gap-4 w-full">
          <div className="h-px bg-brand-border/30 flex-1"></div>
          <span className="text-xs text-brand-muted font-medium uppercase tracking-wider">
            Or
          </span>
          <div className="h-px bg-brand-border/30 flex-1"></div>
        </div>

        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="mailto:harmanjitsingh3002@gmail.com"
            className="w-12 h-12 rounded-full bg-[#151515] border border-brand-border/40 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(182,248,41,0.3)]"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="https://in.linkedin.com/in/harmanjitsingh4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#151515] border border-brand-border/40 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(182,248,41,0.3)]"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/harmanjitsingh1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#151515] border border-brand-border/40 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(182,248,41,0.3)]"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
