import React from 'react'

const Education = () => {
  return (
    <div className='w-full flex flex-row justify-between items-start'>
      <div className='w-2/5 flex flex-col gap-y-1 pr-2 md:pr-0'>
        <p className='text-lg md:text-xl text-black underline decoration-accent font-medium font-poppins'>Education</p>
        <p className='italic text-sm text-accent-dark'>September 2012 - June 2016</p>
      </div>
      <div className='w-3/5 flex flex-col gap-y-2 border-l-2 border-black pl-8 md:pl-16 pb-16 md:pb-24'>
        <p className='underline text-lg'>University of the West of Scotland</p>
        <p>BSc. Hons Computer Games Development (First Class)</p>
      </div>
    </div>
  )
}

export default Education