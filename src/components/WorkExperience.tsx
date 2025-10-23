import React, { memo } from "react";
import ExternalLink from "./common/ExternalLink";

type WorkExperienceProps = {
  company: string;
  link: string;
  date: string;
  role: string;
  description: string[];
};

const WorkExperience = ({
  company,
  link,
  date,
  role,
  description,
}: WorkExperienceProps) => {
  return (
    <div className="w-full flex flex-row justify-between items-start">
      <div className="w-2/5 flex flex-col gap-y-1 pr-2 md:pr-0">
        <ExternalLink
          href={link}
          className="text-lg md:text-xl text-black underline decoration-accent font-medium hover:cursor-pointer hover:no-underline hover:text-accent"
          ariaLabel={`Visit ${company} website`}
        >
          {company}
        </ExternalLink>
        <p className="italic text-sm text-accent-dark">{date}</p>
        <p className="italic text-sm text-accent-dark">{role}</p>
      </div>
      <div className="w-3/5 flex flex-col gap-y-4 border-l-2 border-black pl-8 md:pl-16 pb-16 md:pb-24">
        {description.map((desc: string, index: number) => (
          <p key={`${company}-work-experience-${index}`}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default memo(WorkExperience);
