import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Typography,
  styled,
} from "@mui/material";
import TextField from "../../components/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginTop: theme.spacing(1),
  display: "flex",
  alignItems: "end",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const Write = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
        Share New Post
      </Typography>
      <StyledBox>
        <TextField label="Title" variant="outlined" />
        <Autocomplete
          sx={{ width: "100%" }}
          options={["test"]}
          multiple
          renderTags={(value, props) =>
            value.map((option, index) => (
              <Chip label={option} {...props({ index })} key={index} />
            ))
          }
          renderInput={(params) => <TextField label="Add Tags" {...params} />}
        />
        <TextField rows={10} label="Description" multiline />
        <Button size="large" endIcon={<NavigateNextIcon />} variant="contained">
          Share
        </Button>
      </StyledBox>
    </>
  );
};

export default Write;
