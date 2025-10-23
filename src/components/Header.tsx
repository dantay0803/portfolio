import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { Fragment, useState } from "react";

const LINKS = [
  {
    text: "projects",
    url: "#projects",
  },
  {
    text: "about",
    url: "#about",
  },
  {
    text: "blog",
    url: "/blog",
  },
  {
    text: "resume",
    url: "#resume",
  },
  {
    text: "contact",
    url: "#contact",
  },
];

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute w-full px-4 sm:px-6 lg:px-8 pt-6">
      <nav
        className="flex flex-row justify-between items-end"
        aria-label="Main navigation"
      >
        <Link
          className="uppercase text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          to="/"
        >
          Daniel Taylor
        </Link>
        <div className="hidden lg:flex flex-row lg:gap-x-6">
          {LINKS.map((link) => (
            <AnchorLink
              key={`div-${link.url}`}
              className="capitalize text-white hover:text-accent hover:underline underline-offset-8 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              to={link.url}
            >
              {link.text}
            </AnchorLink>
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
        <Transition
          show={isOpen}
          enter="transition-transform transform duration-500 ease-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform transform duration-300 ease-in"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          as={Fragment}
        >
          <Dialog
            className="w-1/2 absolute top-0 right-0 z-50"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="bg-white h-screen">
              <Dialog.Panel>
                <Dialog.Title className="text-2xl font-bold text-black px-4 py-6">
                  <button
                    type="button"
                    className="float-right focus:outline-none focus:ring-2 focus:ring-accent"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </button>
                </Dialog.Title>
                <div className="flex flex-col gap-y-4 px-4 py-6">
                  {LINKS.map((link) => (
                    <AnchorLink
                      key={`anchor-${link.url}`}
                      className="capitalize text-black hover:text-accent hover:underline underline-offset-8"
                      to={link.url}
                    >
                      {link.text}
                    </AnchorLink>
                  ))}
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
