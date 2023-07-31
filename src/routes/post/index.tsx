// BUG: API return 500 internal server error
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import AxiosHandler from "../../components/AxiosHandler";
import { useEffect } from "react";
// import Post from "../feed/Post";

const PostPage = () => {
  const { postId } = useParams();
  const { sendItBaby, response, error, loading } = useAxios({
    url: `/Posts/${postId}`,
  });
  const ok = response?.status === 200;
  const success = ok && response?.data.message;

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      {/* <Post post={response?.data} /> */}
    </AxiosHandler>
  );
};

export default PostPage;
