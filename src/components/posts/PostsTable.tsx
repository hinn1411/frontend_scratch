import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "../card";

interface PostsTableProps {
  products?: any[];
  offset: number;
  totalPosts: number;
}

const PostsTable = ({}: PostsTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Posts</CardTitle>
        <CardDescription>Managing posts</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  );
};

export default PostsTable;
