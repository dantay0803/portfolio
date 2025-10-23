import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 xl:pb-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 md:mx-0 pb-5 pt-5 lg:pt-10">
          <p className="text-accent-dark text-lg underline">
            Let's have a chat
          </p>
          <h2 className="uppercase text-black text-6xl mb-8 font-semibold">
            Contact
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <form
            className="flex flex-col gap-y-4"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            aria-label="Contact form"
          >
            <input type="hidden" name="bot-field" aria-hidden="true" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col gap-y-2">
              <label htmlFor="contact-name" className="text-black font-medium">
                Your Name:{" "}
                <span className="text-accent" aria-label="required">
                  *
                </span>
              </label>
              <input
                id="contact-name"
                className="text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                type="text"
                name="name"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="contact-email" className="text-black font-medium">
                Your Email:{" "}
                <span className="text-accent" aria-label="required">
                  *
                </span>
              </label>
              <input
                id="contact-email"
                className="text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                type="email"
                name="email"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="contact-message"
                className="text-black font-medium"
              >
                Message:{" "}
                <span className="text-accent" aria-label="required">
                  *
                </span>
              </label>
              <textarea
                id="contact-message"
                className="text-black border border-gray-300 rounded px-3 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                name="message"
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              className="bg-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-sm shadow-lg transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              type="submit"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
