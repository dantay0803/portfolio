import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [showComponent, setShowComponent] = useState(false)


  const handleSetVisible = () => {
    if (window.scrollY > 100) {
      setShowComponent(true)
    } else {
      setShowComponent(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSetVisible);
    return () => {
      window.removeEventListener('scroll', handleSetVisible);
    };
  }, [window.scrollY])
  

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button className={`${window.scrollY < 100 ? 'hidden' : 'fixed'} bottom-5 right-5 z-10 opacity-50 hover:opacity-100 rounded-full bg-accent px-3 py-2`} onClick={handleClick} aria-label='Scroll to top'>
      👆
    </button>
  )
}

export default ScrollToTop