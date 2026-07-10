import React from "react";

interface TextareaProps {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
}

const Textarea = ({ label, name, placeholder, value, onChange, className, required }: TextareaProps) => {
  return (
    <label className="block w-full space-y-1">
      {label && (
        <span className="block text-sm font-medium text-gray-700">
          {label} {" "}
          {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block min-h-10 h-25 px-2 py-1 w-full rounded border border-gray-300
          focus:ring-4 ring-0 ring-accent-primary/15 outline-none transition-shadow duration-300
          ease-in-out bg-white ${className}`}
        required={required}
      />
    </label>
  );
};

export default Textarea;
