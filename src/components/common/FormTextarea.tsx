import React from "react";

type FormTextareaProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

const FormTextarea = ({
  id,
  label,
  name,
  required = false,
  placeholder,
  rows = 5,
}: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-black font-medium">
        {label}
        {required && (
          <>
            {" "}
            <span className="text-accent" aria-label="required">
              *
            </span>
          </>
        )}
      </label>
      <textarea
        id={id}
        className="text-black border border-gray-300 rounded px-3 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        name={name}
        required={required}
        aria-required={required}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default FormTextarea;
