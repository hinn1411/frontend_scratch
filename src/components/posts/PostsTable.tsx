import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../card";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import PostsRow from "./PostsRow";
import { PostType } from "@/data/posts";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface PostsTableProps {
  posts: PostType[];
  offset: number;
  totalPosts: number;
}

const PostsTable = ({ posts, offset, totalPosts }: PostsTableProps) => {
  const POSTS_PER_PAGE = 5;
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Posts</CardTitle>
        <CardDescription>Managing posts</CardDescription>
      </CardHeader>
      <CardContent className="relative z-20">
        <Table>
          {/* Column names */}
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Post Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Total views
              </TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead className="hidden md:table-cell">Updated at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          {/* Data */}
          <TableBody>
            {posts.map((post, index) => (
              <PostsRow post={post} key={index} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="relative z-10">
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {Math.min(offset - POSTS_PER_PAGE, totalPosts) + 1}-{offset}
            </strong>{" "}
            of <strong>{totalPosts}</strong> posts
          </div>
          <div className="flex">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <ChevronLeft className="mr-2 w-4 h-4" />
              Previous
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Next
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
};

export default PostsTable;
