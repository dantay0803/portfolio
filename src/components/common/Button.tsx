import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-sm shadow-lg transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-accent hover:bg-opacity-90 text-white",
    secondary: "bg-primary hover:bg-opacity-90 text-white",
    outline:
      "border-accent border-2 hover:bg-accent hover:text-white transition duration-300 ease-in-out",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
