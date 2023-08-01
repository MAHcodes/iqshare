import { FC } from "react";
import Post, { IPost } from "./Post";
import { Typography } from "@mui/material";

interface IPostsProps {
  posts: IPost[];
  title?: string;
  currentPostsStartIndex: number;
  currentPostsEndIndex: number;
}

const Posts: FC<IPostsProps> = ({
  posts,
  title,
  currentPostsEndIndex,
  currentPostsStartIndex,
}) => {
  return (
    <>
      {title && (
        <Typography variant="h4" sx={{ marginBlock: 3, textAlign: "center" }}>
          {title}
        </Typography>
      )}
      {posts
        .slice(currentPostsStartIndex, currentPostsEndIndex)
        .map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
    </>
  );
};

export default Posts;
