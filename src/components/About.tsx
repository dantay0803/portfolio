import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'


const About = () => {
  return (
    <div id="about" className='w-full'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10'>
        <div className='mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10'>
          <p className='text-accent-dark text-lg underline'>Get to know me and what makes me tick</p>
          <h2 className='uppercase text-black text-6xl mb-8 font-semibold'>About Me</h2>
        </div>
        <div className='flex flex-col lg:flex-row justify-start md:justify-between items-start gap-x-5 mx-auto lg:mx-0'>
          <div className="w-full lg:w-1/2 flex flex-shrink-0 flex-col flex-wrap justify-center gap-y-5">
            <p className=''>Hello, I'm Daniel Taylor. A software developer based in Glasgow, Scotland. I enjoy creating digital experiences for desktop, mobile and web. I have experience working with technologies like JavaScript, React, C# and Unity.</p>
            <p className=''>After graduating from university with a first-class BSc. Honours in Computer Games Development. I spent the start of my career as the sole developer on a children's mobile application, where I refreshed its design and added enhanced features. Which led to the application's launch in Australia and America. Currently you can find me working at <a className='text-black hover:text-accent decoration-accent underline hover:no-underline font-semibold hover:cursor-pointer' href="https://addjam.com" target="_blank" rel="noopener noreferrer">Add Jam</a> creating a verity of web and mobile projects for our clients across various industries.</p>
            <p className=''>Some technologies I've been working with recently:</p>
            <div className='flex flex-row gap-x-8 md:gap-x-16 lg:gap-x-32 pl-4'>
              <ul className='list-disc marker:text-accent'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>C#</li>
              </ul>
              <ul className='list-disc marker:text-accent'>
                <li>HTML & CSS</li>
                <li>React Native</li>
                <li>Gatsby</li>
                <li>Ruby</li>
              </ul>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-24 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <StaticImage className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src={'../assets/images/about/profileImage.jpg'} alt="Daniel Taylor head shot" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <StaticImage className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src={'../assets/images/about/studentemploymentadvicepresentation.jpg'} alt="Daniel Taylor giving a student employment presentation" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <StaticImage className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src={'../assets/images/about/hiking.jpg'} alt="Daniel Taylor standing atop of Ben Lomond" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About