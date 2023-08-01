import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const usePosts = () => {
  const { data, error, isLoading } = useSWR("/api/Posts", fetcher);

  return {
    posts: data,
    isLoading,
    isError: error,
  };
};

export default usePosts;
