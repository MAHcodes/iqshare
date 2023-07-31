import { MoodBad } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import WriteButton from "../../components/Header/WriteButton";

const NoPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <MoodBad sx={{ color: "primary.main" }} />
      <Typography>No posts</Typography>
      <WriteButton />
    </Box>
  );
};

export default NoPost;
