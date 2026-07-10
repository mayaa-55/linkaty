import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "reset" | "submit" | "button";
}

const Button = ({ children, className, type="button" }: ButtonProps) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-semibold bg-accent-primary text-white flex
        outline-none items-center gap-2 focus:ring-4 ring-0 ring-accent-primary/15 transition-all
        duration-300 ease-in-out ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
