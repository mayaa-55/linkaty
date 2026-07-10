import React from "react";
import { type LucideIcon } from "lucide-react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}

const Tag = ({ children, className, icon: Icon }: TagProps) => {
  return (
    <div
      className={`px-3 shrink-0 py-1 text-sm rounded-full bg-gray-50 border border-gray-300 text-gray-500 flex items-center gap-2 ${className}`}
    >
      {Icon && <Icon className="w-4.5 h-4.5 text-accent-secondary" />}
      {children}
    </div>
  );
};

export default Tag;
