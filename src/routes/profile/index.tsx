import { IPost } from "../feed/Post";

export interface IUser {
  id: number;
  username: string;
  email: string;
  posts: IPost[];
}

const Profile = () => {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis atque
      animi quisquam corporis reiciendis repudiandae cumque vitae expedita velit
      commodi, neque ipsam, alias ratione officia cupiditate, voluptates at
      blanditiis quia?
    </p>
  );
};

export default Profile;
