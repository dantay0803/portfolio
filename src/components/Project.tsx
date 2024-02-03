import React from 'react'

type ProjectProps = {
  title: string
  tools: string[]
  description: string
  image: React.ReactNode
  reverse: boolean
}

const Project = ({title, tools, description, image, reverse}: ProjectProps) => {
  return (
    <div className={`w-full flex flex-col gap-y-1 ${reverse ? 'justify-end text-right' : 'justify-start text-left'}`}>
      <p className='text-xl text-black underline decoration-accent font-medium'>{title}</p>
      <p className='text-sm text-accent-dark font-normal italic'>{tools.map((tool, index) => (<span>{tool}{index !== tools.length - 1 && ', '}</span>))}</p>
      <p>{description}</p>
      {image}
    </div>
  )
}

export default Project