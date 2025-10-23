import React from "react";
import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import FormField from "./common/FormField";
import FormTextarea from "./common/FormTextarea";
import Button from "./common/Button";

const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      bgColor="secondary"
      className="pb-20 xl:pb-10"
    >
      <SectionHeader subtitle="Let's have a chat" title="Contact" />
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

          <FormField
            id="contact-name"
            label="Your Name:"
            name="name"
            type="text"
            required
          />

          <FormField
            id="contact-email"
            label="Your Email:"
            name="email"
            type="email"
            required
          />

          <FormTextarea
            id="contact-message"
            label="Message:"
            name="message"
            required
          />

          <Button type="submit" variant="primary" ariaLabel="Send message">
            Send Message
          </Button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Contact;
