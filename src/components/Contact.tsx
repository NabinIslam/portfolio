'use client';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xknedpdd');

  return (
    <section className="bg-[#111319]">
      <div className="container py-24" data-aos="fade-down">
        <h2 className="text-white font-extrabold text-5xl text-center">
          Contact
        </h2>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between max-w-3xl mx-auto py-5">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <p className="text-gray-400">+880 1743 724938</p>
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope className="text-green-600 text-2xl" />
            <p className="text-gray-400">sinabin62246@gmail.com</p>
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <p className="text-gray-400">Dhaka, Bangladesh</p>
          </span>
        </div>
        <form
          className="space-y-5 max-w-3xl mx-auto mt-10
        "
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="w-full bg-transparent border-b-4 border-gray-500 p-4 focus:border-green-600 focus:outline duration-500 text-gray-400"
              type="text"
              name="name"
              placeholder="Name*"
              required
            />
          </div>
          <div>
            <input
              className="w-full bg-transparent border-b-4 border-gray-500 p-4 focus:border-green-600 focus:outline duration-500 text-gray-400"
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
          </div>
          <div>
            <input
              className="w-full bg-transparent border-b-4 border-gray-500 p-4 focus:border-green-600 focus:outline duration-500 text-gray-400"
              type="text"
              name="subject"
              placeholder="Subject*"
              required
            />
          </div>
          <div>
            <textarea
              className="w-full bg-transparent border-b-4 border-gray-500 p-4 focus:border-green-600 focus:outline duration-500 text-gray-400"
              name="message"
              placeholder="Message*"
              required
            />
          </div>
          <button
            className="bg-green-600 px-6 py-3 rounded-xl text-white hover:text-green-600 hover:border-[2px] hover:border-green-600 hover:bg-transparent duration-300"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>

          {state.succeeded && (
            <p className="text-gray-400 font-bold text-center py-2">
              Thanks for contacting
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
