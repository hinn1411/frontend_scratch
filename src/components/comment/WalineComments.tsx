"use client";

import { init } from "@waline/client";
import { useEffect, useState } from "react";

interface WalineCommentsProps {}

const WalineComments = ({}: WalineCommentsProps) => {
  const [loadComments, setLoadCommnets] = useState<boolean>(false);
  // useEffect(() => {
  //   let element: HTMLDivElement | null;
  //   if (loadComments) {
  //     element = document.getElementById("waline") as HTMLDivElement;
  //     init({
  //       el: "#waline",
  //       reaction: true,
  //       serverURL: "?",
  //       emoji: [
  //         "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo",
  //         "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus",
  //       ],
  //       requiredMeta: ["nick"],
  //     });
  //   }
  // }, [loadComments]);
  return (
    <>
      <button
        className="mb-6 rounded bg-primary-500 p-2 text-white hover:opacity-80 dark:hover:opacity-80"
        onClick={() => setLoadCommnets(true)}
      >
        Load Comments
      </button>
    </>
  );
};

export default WalineComments;
