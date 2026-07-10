import React from "react";

interface InputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  required,
}: InputProps) => {
  return (
    <label className="block w-full space-y-1">
      {label && (
        <span className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block h-10 px-2 w-full rounded border border-gray-300 focus:ring-4 ring-0
          ring-accent-primary/15 outline-none transition-all duration-300 ease-in-out bg-white
          ${className}`}
        required={required}
      />
    </label>
  );
};

export default Input;
