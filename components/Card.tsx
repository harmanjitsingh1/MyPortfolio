import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8
      ${hoverEffect ? 'hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;