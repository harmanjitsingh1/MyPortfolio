import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  icon = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full active:scale-95";

  const variants = {
    primary:
      "bg-brand-primary text-brand-dark hover:bg-white shadow-[0_0_35px_rgba(182,248,41,0.4)] hover:text-black hover:shadow-[0_0_35px_rgba(182,248,41,0.6)] hover:scale-105",
    secondary:
      "bg-transparent border border-brand-border text-white hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5",
    ghost: "bg-transparent text-brand-muted hover:text-white",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;
