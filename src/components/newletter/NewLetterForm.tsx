"use client";

import { FormEvent, useRef, useState } from "react";

interface NewLetterFormProps {
  title?: string;
  apiUrl?: string;
}

const NewLetterForm = ({}: NewLetterFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = emailRef.current?.value;
    if (!emailValue) {
      setErr(true);
      setMessage("Please enter your email");
      return;
    }
    // Call API logic
  };
  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Subscribe to the newsletter
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div className="flex flex-col">
          <label className="flex-1 " htmlFor="email">
            <span className="sr-only">Email</span>
            <input
              autoComplete="email"
              className="w-72 rounded-md px-4 py-2 ring-1 ring-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black dark:ring-gray-200 dark:focus:ring-primary-600"
              id="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
              type="email"
              disabled={subscribed}
              name="email"
            />
          </label>
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
          <button
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary-500 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 dark:bg-primary-500 dark:hover:shadow-purple-500/30 ${
              subscribed ? "cursor-default" : ""
            }`}
            type="submit"
            disabled={subscribed}
          >
            <span className="relative z-50 text-lg text-white">Sign Up</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </button>
        </div>
      </form>
      {err && (
        <p className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">
          {message}
        </p>
      )}
    </div>
  );
};

export default NewLetterForm;
