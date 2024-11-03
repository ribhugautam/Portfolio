"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";

function Page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:gautamribhu@gmail.com?subject=${name}&body=${message}`;
    setName("");
    setMessage("");
  };

  return (
    <div className="pattern h-dvh">
      <div className="min-h-screen font-Caveat w-11/12 max-w-[80%] mx-auto flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full pt-36 mx-auto sm:pt-48 lg:pt-48 underline underline-offset-4 decoration-violet-600 text-4xl sm:text-5xl text-center font-bold leading-tight"
        >
          Contact Me
        </motion.h2>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="p-6 w-full text-gray-800"
        >
          <form
            onSubmit={handleEmailClick}
            className="w-[80%] max-w-[700px] p-8 mx-auto outline space-y-6 rounded-md shadow"
          >
            <div>
              {/* <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label> */}
              <input
                id="name"
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full p-2 rounded focus:outline-none ring ring-black focus:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              {/* <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label> */}
              <textarea
                id="message"
                rows={8}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none ring ring-black focus:ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full active:scale-95 px-4 py-2 ring ring-violet-600 bg-violet-600 text-white font-bold rounded shadow text-xl"
              >
                Send
              </button>
            </div>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

export default Page;
