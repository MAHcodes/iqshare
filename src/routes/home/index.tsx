import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import AxiosHandler from "../../components/AxiosHandler";
import Feed from "./Feed";

const Home = () => {
  const { sendItBaby, response, error, loading, ok, success } = useAxios({
    url: "/Posts",
  });

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      <Feed posts={ok && response?.data} error={error} title="Latest Posts" />
    </AxiosHandler>
  );
};

export default Home;
