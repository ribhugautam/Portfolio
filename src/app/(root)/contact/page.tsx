"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(name);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:gautamribhu@gmail.com?subject=${subject}&body=${body}`;
    setName("");
    setMessage("");
  };

  return (
    <div className="pattern h-dvh">
      <div className="min-h-screen font-Caveat w-11/12 max-w-5xl mx-auto flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full pt-24 sm:pt-32 lg:pt-40 underline underline-offset-4 decoration-violet-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight"
        >
          Contact Me
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="p-4 sm:p-6 md:p-8 w-full text-gray-800"
        >
          <form
            onSubmit={handleEmailClick}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 md:p-8 mx-auto border-2 border-black rounded-lg space-y-6"
          >
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              aria-label="Name"
              className="block w-full p-3 sm:p-4 rounded border-2 border-black focus:outline-none focus:ring-2 dark:bg-gray-100"
            />

            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              required
              aria-label="Message"
              className="block w-full p-3 sm:p-4 rounded border-2 border-black focus:outline-none focus:ring-2 dark:bg-gray-100"
            />

            <button
              type="submit"
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-violet-600 text-white font-semibold rounded shadow-md hover:bg-violet-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-600"
            >
              Send
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default Page;
