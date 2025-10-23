import React from "react";

const BlogCardSkeleton = () => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 px-6 pb-8 pt-80 sm:pt-48 lg:pt-80 h-[440px] animate-pulse">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
      <div className="w-full h-full flex flex-col justify-end gap-y-2">
        <div className="flex flex-row justify-between items-center">
          <div className="h-3 w-24 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 w-20 bg-gray-300 rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-5 w-full bg-gray-300 rounded animate-pulse" />
          <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </article>
  );
};

export default BlogCardSkeleton;
