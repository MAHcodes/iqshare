import { Grid, styled } from "@mui/material";
import { FC } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  posts: string[];
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  postedDate: string;
  user: User;
  tagIds: number[];
}

interface IPostProps {
  post: IPost;
}

const StyledBox = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const Post: FC<IPostProps> = ({ post }) => {
  console.log(post);
  return (
    <StyledBox container columns={2}>
      <Grid item xs={2}>
        {/* {post.user.username} */}
      </Grid>
      <Grid item xs={2}>
        {post.title}
      </Grid>
      <Grid item xs={2}>
        {post.description}
      </Grid>
    </StyledBox>
  );
};

export default Post;
