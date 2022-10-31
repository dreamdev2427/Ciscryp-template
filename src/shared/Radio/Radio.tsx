import React, { FC } from "react";

export interface RadioProps {
  className?: string;
  name: string;
  id: string;
  onChange?: (value: string) => void;
  defaultChecked?: boolean;

  label: string;
}

const Radio: FC<RadioProps> = ({
  className,
  name,
  id,
  onChange,
  label,
  defaultChecked,
}) => {
  return (
    <div className={`flex items-center text-sm sm:text-base ${className}`}>
      <input
        id={id}
        name={name}
        type="radio"
        className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded-full border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
        onChange={(e) => onChange && onChange(e.target.value)}
        defaultChecked={defaultChecked}
        value={id}
      />
      <label
        htmlFor={id}
        className="ml-2.5 sm:ml-3 block text-neutral-900 dark:text-neutral-100"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
