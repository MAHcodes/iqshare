import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import AxiosHandler from "../../components/AxiosHandler";
import Feed from "../home/Feed";
import Profile from "./Profile";

const ProfilePage = () => {
  const { id: userId } = useSelector((state: RootState) => state.user);

  const { sendItBaby, response, error, ok, loading, success } = useAxios({
    url: `/Users/byId?Id=${userId}`,
  });

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      <Profile user={ok && response?.data} />
      <Feed
        posts={ok && response?.data.posts}
        error={error}
        title={`${response?.data.username}'s posts`}
      />
    </AxiosHandler>
  );
};

export default ProfilePage;
