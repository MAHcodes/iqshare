// TODO: refactor
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import AxiosHandler from "../../components/AxiosHandler";
import Post, { IPost } from "./Post";
import Error from "./NoPost";
import WriteButton from "../../components/Header/WriteButton";
import { MoodBad } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

const Feed = () => {
  const { sendItBaby, response, error, loading } = useAxios({
    url: "/Posts",
  });
  const ok = response?.status === 200;
  const success = ok && response?.data.message;
  const posts: IPost[] = ok && response?.data;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const postsCountPerPage = 5;
  const pagesCount = Math.ceil(posts.length / postsCountPerPage) || 1;
  const currentPostsStartIndex =
    currentPage * postsCountPerPage - postsCountPerPage;
  const currentPostsEndIndex = currentPage * postsCountPerPage;

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaginate = (_: unknown, value: number) => {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  };

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      {error ? (
        <Error message={error} />
      ) : posts.length ? (
        posts
          .slice(currentPostsStartIndex, currentPostsEndIndex)
          .map((post: IPost) => <Post key={post.id} post={post} />)
      ) : (
        <Error message="No posts" Icon={MoodBad}>
          <WriteButton />
        </Error>
      )}
      <Stack spacing={2}>
        <Pagination
          page={currentPage}
          count={pagesCount}
          onChange={handlePaginate}
          color="primary"
          sx={{ marginInline: "auto", paddingBottom: "1rem" }}
        />
      </Stack>
    </AxiosHandler>
  );
};

export default Feed;
