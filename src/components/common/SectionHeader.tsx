import React from "react";

type SectionHeaderProps = {
  subtitle: string;
  title: string;
  textColor?: "black" | "white";
  subtitleColor?: string;
};

const SectionHeader = ({
  subtitle,
  title,
  textColor = "black",
  subtitleColor,
}: SectionHeaderProps) => {
  const titleColorClass = textColor === "white" ? "text-white" : "text-black";
  const defaultSubtitleColor =
    textColor === "white" ? "text-white-400" : "text-accent-dark";
  const subtitleColorClass = subtitleColor || defaultSubtitleColor;

  return (
    <div className="mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10">
      <p className={`${subtitleColorClass} text-lg underline`}>{subtitle}</p>
      <h2
        className={`uppercase ${titleColorClass} text-6xl mb-8 font-semibold`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
