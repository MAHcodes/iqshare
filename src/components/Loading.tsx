import { Backdrop, CircularProgress } from "@mui/material";
import { FC } from "react";

interface ILoadingProps {
  fullscreen?: boolean;
}

const Loading: FC<ILoadingProps> = ({ fullscreen = false }) =>
  // FIXME: I believe this could have been done better
  fullscreen ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CircularProgress color="inherit" />
  );

export default Loading;
