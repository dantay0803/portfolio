import React, { useState, memo } from "react";

type ProjectProps = {
  title: string;
  tools: string[];
  description: string;
  image: React.ReactNode;
  reverse: boolean;
  onClick?: () => void;
  ProjectDetails: React.ComponentType<Modal>;
};

const Project = ({
  title,
  tools,
  description,
  image,
  reverse,
  ProjectDetails,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className={`w-full flex flex-col gap-y-1 ${
        reverse ? "justify-end text-right" : "justify-start text-left"
      } hover:cursor-pointer`}
    >
      <p className="text-xl text-black underline decoration-accent font-medium">
        {title}
      </p>
      <p className="text-sm text-accent-dark font-normal italic">
        {tools.map((tool, index) => (
          <span key={tool}>
            {tool}
            {index !== tools.length - 1 && ", "}
          </span>
        ))}
      </p>
      <p>{description}</p>
      {image}
      <ProjectDetails isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default memo(Project, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description &&
    prevProps.reverse === nextProps.reverse &&
    JSON.stringify(prevProps.tools) === JSON.stringify(nextProps.tools) &&
    prevProps.ProjectDetails === nextProps.ProjectDetails
  );
});
