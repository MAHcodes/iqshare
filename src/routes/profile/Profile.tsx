import { FC } from "react";
import { IPost } from "../home/Post";
import {
  Avatar,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useNameAvatar from "../../hooks/useNameAvatar";

export interface IUser {
  id: number;
  username: string;
  email: string;
  posts: IPost[];
}

interface IProfileProps {
  user: IUser;
}

const StyledBox = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: "1rem",
  borderWidth: "1px",
  borderStyle: "solid",
  color: theme.palette.text.primary,
  borderColor: theme.palette.primary.main,
}));

const Profile: FC<IProfileProps> = ({ user }) => {
  const userId = useSelector((state: RootState) => state.user.id);
  const isSameUser = userId === user.id;
  const stringAvatar = useNameAvatar(user.username);

  return (
    <StyledBox container columns={12}>
      <Grid item xs={12} md={1}>
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 64,
            height: "auto",
            aspectRatio: 1,
          }}
        >
          {stringAvatar}
        </Avatar>
      </Grid>
      <Grid item xs={12} md={11}>
        <Grid container columns={2}>
          <Grid item xs={2} md={isSameUser ? 1 : 2}>
            <Typography variant="h5">{user.username}</Typography>
          </Grid>
          {isSameUser && (
            <Grid item xs={2} md={1} sx={{ display: "flex" }}>
              <Tooltip title="Edit User">
                <IconButton sx={{ ml: "auto" }}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete User">
                <IconButton>
                  <Delete color="error" />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
        <Typography paragraph sx={{ mt: 1 }}>
          {user.email}
        </Typography>
      </Grid>
    </StyledBox>
  );
};

export default Profile;
