import React from 'react'

const Awards = () => {
  return (
    <div className='w-full flex flex-row justify-between items-start'>
      <div className='w-2/5 flex flex-col gap-y-1 pr-2 md:pr-0'>
        <p className='text-lg md:text-xl text-black underline decoration-accent font-medium'>Skills</p>
      </div>
      <div className='w-3/5 border-l-2 border-black pl-8 md:pl-16'>
        <div className='flex flex-col md:flex-row justify-start items-start gap-x-32'>
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
    </div>
  )
}

export default Awards