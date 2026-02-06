import React from "react";

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 1. Base Dark Background & Grid Pattern */}
      <div className="absolute inset-0 bg-[#0B0B0B] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 2. Main Neon Glow (Green/Yellow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 blur-[120px] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[100px] rounded-full opacity-30" />

      {/* 3. Three Layers of Animated Stars */}
      {/* Layer 1: Small & Slow */}
      <div className="absolute inset-0 animate-[move-up_60s_linear_infinite] opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[30%] left-[80%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[50%] left-[10%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[70%] left-[40%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[80%] left-[90%] w-[1px] h-[1px] bg-white rounded-full" />
        <div className="absolute top-[20%] left-[10%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[40%] left-[70%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[60%] left-[30%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[80%] left-[20%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]" />
        <div className="absolute top-[90%] left-[80%] w-[1px] h-[1px] bg-white rounded-full" />
      </div>

      {/* Layer 2: Medium & Medium Speed */}
      <div className="absolute inset-0 animate-[move-up_45s_linear_infinite] opacity-60">
        <div className="absolute top-[15%] left-[50%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_4px_#fff]" />
        <div className="absolute top-[45%] left-[25%] w-[3px] h-[3px] bg-brand-primary rounded-full shadow-[0_0_4px_#B6F829]" />
        <div className="absolute top-[75%] left-[70%] w-[2px] h-[2px] bg-white rounded-full" />
        <div className="absolute top-[20%] left-[90%] w-[2px] h-[2px] bg-white rounded-full" />
      </div>

      {/* Layer 3: Sparse & Fast (Simulated Parallax) */}
      <div className="absolute inset-0 animate-[move-up_30s_linear_infinite] opacity-80">
        <div className="absolute top-[40%] left-[60%] w-[3px] h-[3px] bg-brand-primary rounded-full shadow-[0_0_8px_#B6F829]" />
        <div className="absolute top-[10%] left-[10%] w-[1px] h-[1px] bg-white rounded-full" />
      </div>

      {/* 4. Radial Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0B_90%)]" />
    </div>
  );
};

export default Background;
