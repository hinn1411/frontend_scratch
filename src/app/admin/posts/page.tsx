import PostsTable from "@/components/posts/PostsTable";
import { postStatuses } from "@/data/postStatuses";
import { File, PlusCircle } from "lucide-react";
import { posts } from "@/data/posts";
export default function PostsPage() {
  return (
    <>
      <div className="flex justify-between">
        {/* statuses buttons */}
        <ul className="inline-flex h-10 justify-center items-center p-1 rounded-md bg-muted text-muted-foreground">
          {postStatuses.map((category, index) => (
            <li key={index}>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {category}
              </button>
            </li>
          ))}
        </ul>
        {/* action buttons */}
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center rounded-md px-3 h-8 gap-1 text-sm font-medium border border-input bg-background ring-offset-background transition-colors hover:bg-accent">
            <File className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Import
            </span>
          </button>
          <button className="inline-flex items-center rounded-md px-3 h-8 gap-1 text-sm font-medium border border-input bg-adminPrimary text-adminPrimary-foreground hover:bg-adminPrimary/90">
            <PlusCircle className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Post
            </span>
          </button>
        </div>
      </div>
      <div>
        <PostsTable posts={posts} offset={10} totalPosts={99} />
      </div>
    </>
  );
}
