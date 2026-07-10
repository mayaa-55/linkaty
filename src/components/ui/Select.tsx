import React from "react";

interface SelectProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
  required?: boolean;
}

const Select = ({
  label,
  name,
  value,
  onChange,
  className,
  children,
  required,
}: SelectProps) => {
  return (
    <label className="block w-full space-y-1">
      {label && (
        <span className="block text-sm font-medium text-gray-700">
          {label} {" "}
          {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`block h-10 px-2 w-full rounded border border-gray-300 focus:ring-4 ring-0 ring-accent-primary/15 outline-none transition-all duration-300 ease-in-out bg-white ${className}`}
        required={required}
      >
        {children}
      </select>
    </label>
  );
};

export default Select;
