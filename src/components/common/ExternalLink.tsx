import React from "react";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const ExternalLink = ({
  href,
  children,
  className = "",
  ariaLabel,
}: ExternalLinkProps) => {
  const baseClasses =
    "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
