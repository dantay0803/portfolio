import React from "react";

type ImageWithRingProps = {
  children: React.ReactNode;
  className?: string;
};

const ImageWithRing = ({ children, className = "" }: ImageWithRingProps) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  );
};

export default ImageWithRing;
