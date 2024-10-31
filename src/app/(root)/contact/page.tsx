"use client";

import { useState } from "react";

function page() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    window.location.href = `mailto:gautamribhu@gmail.com?subject=${name}?body=${message}`;
    setName("");
    setMessage("");
  };

  return (
    <div className="pattern h-dvh">
      <div className="min-h-screen font-Caveat w-11/12 max-w-[80%] mx-auto flex justify-center items-center">
        <section className="p-6 w-full pt-36 md:pt-0 text-gray-800">
          <form
            onSubmit={handleEmailClick}
            className="w-[80%] p-8 mx-auto outline space-y-6 rounded-md shadow"
          >
            <h2 className="w-full text-3xl text-center font-bold leading-tight">
              Contact Me
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring ring-violet-600 dark:bg-gray-100"
              />
            </div>
            {/* <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring ring-violet-600 dark:bg-gray-100"
              />
            </div> */}
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full active:scale-95 px-4 py-2 ring ring-violet-600 font-bold rounded shadow text-xl text-black"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default page;
