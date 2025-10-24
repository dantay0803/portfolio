import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import React, { memo } from "react";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  categories?: string;
  image: ImageDataLike;
  imageAlt: string;
};

const BlogCard = ({
  slug,
  title,
  date,
  categories,
  image,
  imageAlt,
}: BlogCardProps) => {
  let featuredImg = getImage(image);

  return (
    <Link to={slug}>
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 h-[440px] hover:scale-105 transform transition duration-500">
        {featuredImg && (
          <GatsbyImage
            image={featuredImg}
            alt={imageAlt}
            className="absolute inset-0 -z-10 h-full w-full"
            objectFit="cover"
            objectPosition="center"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="w-full h-full flex flex-col justify-end gap-y-2 text-white px-6 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <div className="flex flex-row justify-between items-center italic text-xs">
            <p>{date}</p>
            <p className="text-white-300 rounded-lg px-2 py-1">{categories}</p>
          </div>
          <p className="text-lg font-semibold line-clamp-2">{title}</p>
        </div>
      </article>
    </Link>
  );
};

export default memo(BlogCard);
