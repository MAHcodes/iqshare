import { Box, Button } from "@mui/material";
import TextField from "../../components/TextField";
import { FC } from "react";
import { FormikValues } from "formik";

interface ISignInFormProps {
  formik: FormikValues;
}

const SignUpForm: FC<ISignInFormProps> = ({ formik }) => (
  <Box
    component="form"
    onSubmit={formik.handleSubmit}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: ".75rem",
      width: "100%",
    }}
  >
    <TextField
      label="Name"
      placeholder="John Doe"
      required={true}
      error={formik.touched.name && !!formik.errors.name}
      helperText={formik.touched.name ? formik.errors.name : ""}
      {...formik.getFieldProps("name")}
    />
    <TextField
      label="Email"
      placeholder="email@example.com"
      required={true}
      error={formik.touched.email && !!formik.errors.email}
      helperText={formik.touched.email ? formik.errors.email : ""}
      {...formik.getFieldProps("email")}
    />
    <Button
      type="submit"
      sx={{ width: "100%" }}
      size="large"
      variant="contained"
    >
      Sign Up
    </Button>
  </Box>
);

export default SignUpForm;
