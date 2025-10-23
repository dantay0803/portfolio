import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Navigation from "../components/common/Navigation";
import { MAIN_NAV_LINKS } from "../constants/navigation";
import { SEO } from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="relative min-h-screen bg-secondary">
      <Navigation links={MAIN_NAV_LINKS} variant="light" />
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl -mt-20">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-semibold text-black mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
            Let's get you back on track!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/"
              className="bg-accent text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Go Home
            </Link>
            <Link
              to="/blog"
              className="border-2 border-accent text-black px-6 py-3 rounded hover:bg-accent hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Read Blog
            </Link>
            <Link
              to="/#projects"
              className="border-2 border-gray-300 text-black px-6 py-3 rounded hover:border-accent hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <SEO title="404 - Page Not Found" pathname="/404" />
);
