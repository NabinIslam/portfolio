import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from '@formspree/react';

const ContactMe = () => {
  const [state, handleSubmit] = useForm('xknedpdd');

  if (state.succeeded) {
    return (
      <div className="py-14" id="contact">
        <div className="container mx-auto px-4 md:p-0">
          <h2 className="text-center text-2xl font-semibold">
            Thanks for contacting
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-14" id="contact">
      <div
        className="container mx-auto px-4 md:p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
          Contact Me
        </h2>
        <form
          className="flex flex-col gap-4 max-w-md mx-auto my-7"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name="text"
              placeholder="Full name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required={true}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your Message" />
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Message."
              required={true}
              rows={4}
            />
          </div>
          <Button
            className="bg-gradient-to-r from-[#84739F] to-[#3C51A4]"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
