import React from 'react'


const Contact = () => {
  return (
    <div className='w-full bg-secondary'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 lg:pb-10'>
        <div className='mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10'>
          <p className='text-accent-dark text-lg underline'>Let's have a chat</p>
          <h2 className='uppercase text-black text-6xl mb-8 font-semibold'>Contact</h2>
        </div>
        <div className='w-full md:w-2/3'>
          <form className="flex flex-col gap-y-4" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label className="flex flex-col gap-y-2 text-black">Your Name:* <input className='text-black' type="text" name="name" required /></label>
            <label className="flex flex-col gap-y-2 text-black">Your Email:* <input className='text-black' type="email" name="email" required /></label>
            <label className="flex flex-col gap-y-2 text-black">Message:* <textarea className='text-black' name="message" required></textarea></label>
            <button className='bg-accent hover:bg-opacity-70 text-white hover:text-black px-4 py-2 rounded-sm shadow-lg' type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact