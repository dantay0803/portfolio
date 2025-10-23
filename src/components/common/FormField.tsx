import React from "react";

type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "url";
  required?: boolean;
  placeholder?: string;
};

const FormField = ({
  id,
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: FormFieldProps) => {
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
      <input
        id={id}
        className="text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        type={type}
        name={name}
        required={required}
        aria-required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
