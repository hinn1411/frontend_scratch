"use client";
import { paths } from "@/utils/paths";
import Link from "next/link";

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <Link
      href={paths.viewAllPosts()}
      className="uppercase mr-3 cursor-pointer text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text}
    </Link>
  );
};

export default Tag;
