import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import About from "../components/About"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Header />
    <main className="flex-auto">
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Resume />
      <Contact />
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>