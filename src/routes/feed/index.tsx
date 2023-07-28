import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import AxiosHandler from "../../components/AxiosHandler";
import Post, { IPost } from "./Post";
import NoPost from "./NoPost";

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

  console.log(response);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      {posts.length ? (
        posts.map((post: IPost) => <Post key={post.id} post={post} />)
      ) : (
        <NoPost />
      )}
    </AxiosHandler>
  );
};

export default Feed;
