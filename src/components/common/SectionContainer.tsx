import React from "react";

type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "primary" | "secondary" | "white";
};

const SectionContainer = ({
  id,
  children,
  className = "",
  bgColor = "white",
}: SectionContainerProps) => {
  const bgClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
  };

  return (
    <div id={id} className={`w-full ${bgClasses[bgColor]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
