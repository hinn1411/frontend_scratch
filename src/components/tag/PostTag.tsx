import { paths } from "@/utils/paths";
import Link from "next/link";

interface PostTagProps {
  text: string;
}
const PostTag = ({ text }: PostTagProps) => {
  return (
    <Link
      href={paths.viewAllPosts()}
      className="uppercase mr-3 cursor-pointer text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text}
    </Link>
  );
};

export default PostTag;
