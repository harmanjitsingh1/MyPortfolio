import React, { useEffect, useState } from "react";
import { Check, X, AlertCircle } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-xl 
        border backdrop-blur-md shadow-2xl transition-all duration-500 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        ${
          type === "success"
            ? "bg-[#0A0A0A]/90 border-brand-primary/30 shadow-[0_5px_20px_rgba(182,248,41,0.15)]"
            : "bg-[#0A0A0A]/90 border-red-500/30 shadow-[0_5px_20px_rgba(239,68,68,0.15)]"
        }
      `}
    >
      {/* Icon Wrapper */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
        ${type === "success" ? "bg-brand-primary/20 text-brand-primary" : "bg-red-500/20 text-red-500"}
        `}
      >
        {type === "success" ? (
          <Check className="w-4 h-4" />
        ) : (
          <AlertCircle className="w-4 h-4" />
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <span
          className={`text-sm font-bold ${type === "success" ? "text-brand-primary" : "text-red-500"}`}
        >
          {type === "success" ? "Success" : "Error"}
        </span>
        <span className="text-sm text-white/90 font-medium">{message}</span>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="ml-2 p-1 text-brand-muted hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
