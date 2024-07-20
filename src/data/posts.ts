export type PostType = {
  id: number;
  status: string;
  imageUrl: string;
  title: string;
  totalViews: number;
  createdAt: string;
  updatedAt: string;
};
export const posts: PostType[] = [
  {
    id: 1,
    status: "done",
    imageUrl: "/placeholder-user.jpg",
    title: "How to become a good Software Engineer?",
    totalViews: 123,
    createdAt: "12/12/2022",
    updatedAt: "14/12/2022",
  },
  {
    id: 2,
    status: "hidden",
    imageUrl: "/placeholder-user.jpg",
    title: "How to become a good Frontend Engineer?",
    totalViews: 123,
    createdAt: "12/12/2022",
    updatedAt: "14/12/2022",
  },
  {
    id: 3,
    status: "done",
    imageUrl: "/placeholder-user.jpg",
    title: "How to become a good Backend Engineer?",
    totalViews: 123,
    createdAt: "12/12/2022",
    updatedAt: "14/12/2022",
  },
];
