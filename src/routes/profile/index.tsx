import { useSelector } from "react-redux";
import { IPost } from "../home/Post";
import { RootState } from "../../redux/store";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import AxiosHandler from "../../components/AxiosHandler";
import Feed from "../home/Feed";

export interface IUser {
  id: number;
  username: string;
  email: string;
  posts: IPost[];
}

const Profile = () => {
  const { id: userId } = useSelector((state: RootState) => state.user);

  const { sendItBaby, ok, response, error, loading, success } = useAxios({
    url: `/Users/${userId}`,
  });

  useEffect(() => {
    sendItBaby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AxiosHandler error={error} success={success} loading={loading}>
      {response?.data.username}
      {response?.data.email}
      <Feed posts={ok && response?.data.posts} error={error} />
    </AxiosHandler>
  );
};

export default Profile;
