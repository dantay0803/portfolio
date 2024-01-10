import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import React from 'react'

type BlogCardProps = {
  title: string
  date?: string
  category?: string
  image: ImageDataLike
  imageAlt: string
}

const BlogCard = ({title, date, category, image, imageAlt}: BlogCardProps) => {
  let featuredImg = getImage(image)

  return (
    <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8 pt-80 sm:pt-48 lg:pt-80'>
      {featuredImg && <GatsbyImage image={featuredImg} alt={imageAlt} className='absolute inset-0 -z-10 h-full w-full object-cover' />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className='w-full h-full flex flex-col justify-end gap-y-2 text-white'>
        <div className='flex flex-row justify-between items-center italic text-xs'>
          <p>{date}</p>
          <p className='text-white-300 rounded-lg px-2 py-1'>{category}</p>
        </div>
        <p className='font-poppins text-lg font-semibold line-clamp-2'>{title}</p>
      </div>
    </article>
  )
}

export default BlogCard