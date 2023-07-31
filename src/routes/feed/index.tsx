import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import AxiosHandler from "../../components/AxiosHandler";
import Post, { IPost } from "./Post";
import Error from "./NoPost";
import WriteButton from "../../components/Header/WriteButton";
import { MoodBad } from "@mui/icons-material";

const Feed = () => {
  const { sendItBaby, response, error, loading } = useAxios({
    url: "/Posts",
  });
  const ok = response?.status === 200;
  const success = ok && response?.data.message;
  const posts: IPost[] = ok && response?.data;

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      {error ? (
        <Error message={error} />
      ) : posts.length ? (
        posts.map((post: IPost) => <Post key={post.id} post={post} />)
      ) : (
        <Error message="No posts" Icon={MoodBad}>
          <WriteButton />
        </Error>
      )}
    </AxiosHandler>
  );
};

export default Feed;
