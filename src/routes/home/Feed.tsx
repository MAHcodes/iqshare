import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import Post, { IPost } from "./Post";
import Error from "./NoPost";
import WriteButton from "../../components/Header/WriteButton";
import { MoodBad } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import Posts from "./Posts";

interface IFeedProps {
  posts: IPost[];
  error?: string;
  title?: string;
}

const Feed: FC<IFeedProps> = ({ posts, error, title }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const postsCountPerPage = 5;
  const pagesCount = Math.ceil(posts.length / postsCountPerPage) || 1;
  const currentPostsStartIndex =
    currentPage * postsCountPerPage - postsCountPerPage;
  const currentPostsEndIndex = currentPage * postsCountPerPage;

  const handlePaginate = (_: unknown, value: number) => {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : posts.length ? (
        <Posts
          posts={posts}
          currentPostsStartIndex={currentPostsStartIndex}
          currentPostsEndIndex={currentPostsEndIndex}
          title={title}
        />
      ) : (
        <Error message="No posts" Icon={MoodBad}>
          <WriteButton />
        </Error>
      )}
      {pagesCount > 1 && (
        <Stack spacing={2}>
          <Pagination
            page={currentPage}
            count={pagesCount}
            onChange={handlePaginate}
            color="primary"
            sx={{ marginInline: "auto", paddingBottom: "1rem" }}
          />
        </Stack>
      )}
    </>
  );
};

export default Feed;
