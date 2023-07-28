import { Typography } from "@mui/material";
import WriteContainer from "./WriteContainer";

const Write = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
        Share New Post
      </Typography>
      <WriteContainer />
    </>
  );
};

export default Write;
