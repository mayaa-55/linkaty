import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={`px-3 py-1 w-fit rounded-full text-xs bg-accent-primary/10 text-accent-primary font-semibold ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
