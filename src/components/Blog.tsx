import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import BlogCard from './BlogCard'

const BLOGS = [
  {
    title: 'Phalanx',
    date: '2021-05-01',
    category: 'JavaScript',
    excerpt: 'PHALANX is an integrated operations software application that combines RFID/barcode technology, operational mobility with the use of smartphones and tablets and integration with back-office systems on a single software platform.',
    image: <StaticImage className='absolute inset-0 -z-10 h-full w-full object-cover' src={'../images/thumbnail_phalanx.jpg'} alt="Phalanx project thumbnail" />
  },
  {
    title: 'Phalanx',
    date: '2021-05-01',
    category: 'JavaScript',
    excerpt: 'PHALANX is an integrated operations software application that combines RFID/barcode technology, operational mobility with the use of smartphones and tablets and integration with back-office systems on a single software platform.',
    image: <StaticImage className='absolute inset-0 -z-10 h-full w-full object-cover' src={'../images/thumbnail_phalanx.jpg'} alt="Phalanx project thumbnail" />
  },
  {
    title: 'Phalanx',
    date: '2021-05-01',
    category: 'JavaScript',
    excerpt: 'PHALANX is an integrated operations software application that combines RFID/barcode technology, operational mobility with the use of smartphones and tablets and integration with back-office systems on a single software platform.',
    image: <StaticImage className='absolute inset-0 -z-10 h-full w-full object-cover' src={'../images/thumbnail_phalanx.jpg'} alt="Phalanx project thumbnail" />
  },
]

const Blog = () => {
  return (
    <div className='w-full bg-primary'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10'>
        <div className='mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10'>
          <p className='text-white-500 text-lg underline'>Find out what I'm currently working on and thinking about</p>
          <h2 className='uppercase text-white text-6xl mb-8 font-semibold'>Blog</h2>
        </div>
        <div className='mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 justify-between'>
          {BLOGS.map((blog) => (<BlogCard key={blog.title} title={blog.title} date={blog.date} category={blog.category} image={blog.image} />))}
        </div>
      </div>
    </div>
  )
}

export default Blog