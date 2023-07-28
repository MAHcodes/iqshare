import TextField from "../../components/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, styled } from "@mui/material";
import { FormikValues } from "formik";
import { FC } from "react";
import Autocomplete from "./Autocomplete";

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

interface IWriteFormProps {
  formik: FormikValues;
}

const WriteForm: FC<IWriteFormProps> = ({ formik }) => {
  return (
    <StyledBox component="form" onSubmit={formik.handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        required
        {...formik.getFieldProps("title")}
      />
      <Autocomplete formik={formik} />
      <TextField
        rows={10}
        label="Description"
        multiline
        {...formik.getFieldProps("description")}
      />
      <Button
        type="submit"
        size="large"
        endIcon={<NavigateNextIcon />}
        variant="contained"
      >
        Share
      </Button>
    </StyledBox>
  );
};

export default WriteForm;
