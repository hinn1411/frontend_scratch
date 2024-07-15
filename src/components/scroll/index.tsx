"use client";

import { SearchIcon } from "../search/icons";
import { CommentsIcon, ArrowTopIcon } from "./icons";

import { useEffect, useState } from "react";

const ScrollToTopAndComment = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  });
  const handleScrollToComment = () => {
    document.getElementById("comment")?.scrollIntoView();
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div
      className={` fixed bottom-8 right-8 z-50 hidden flex-col gap-3 ${
        isShow ? "md:flex" : "md:hidden"
      }`}
    >
      <button className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
        <SearchIcon className="h-5 w-5" />
      </button>
      <button
        aria-label={`scroll to comment`}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        onClick={handleScrollToComment}
      >
        <CommentsIcon className="w-5 h-5" />
      </button>
      <button
        onClick={handleScrollToTop}
        aria-label={`scroll to top`}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <ArrowTopIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollToTopAndComment;
