import { Grid, Typography, styled } from "@mui/material";
import { FC } from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import { POST } from "../routes";

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
  boxShadow: theme.shadows[1],
  marginBottom: "1rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  color: theme.palette.text.primary,
  ":hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const Post: FC<IPostProps> = ({ post }) => {
  return (
    <Link to={`${POST}/${post.id}`}>
      <StyledBox container columns={2}>
        <Grid item xs={2}>
          {/* {post.user.username} */}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {post.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography paragraph>{post.description}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Tags ids={post.tagIds} />
        </Grid>
      </StyledBox>
    </Link>
  );
};

export default Post;
