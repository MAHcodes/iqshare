import { Box, Button, Divider } from "@mui/material";
import TextField from "./TextField";
import { Link } from "react-router-dom";
import { SIGNIN, SIGNUP } from "../routes/routes";
import { FC } from "react";
import { useFormik } from "formik";

interface ISignInFormProps {
  login: boolean;
}

const validate = (values: { name: string; email: string }) => {
  const errors: { name?: string; email?: string } = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SignForm: FC<ISignInFormProps> = ({ login }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
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
        name="name"
        label="Name"
        placeholder="John Doe"
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && !!formik.errors.name}
        helperText={formik.touched.name ? formik.errors.name : ""}
      />
      <TextField
        name="email"
        label="Email"
        placeholder="email@example.com"
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email ? formik.errors.email : ""}
      />

      <Button
        type="submit"
        sx={{ width: "100%" }}
        size="large"
        variant="contained"
      >
        {login ? "Log In" : "Sign Up"}
      </Button>

      <Divider>OR</Divider>

      <center>
        {login ? "no " : "have an "}
        account?&nbsp;
        <Link to={login ? SIGNUP : SIGNIN}>{login ? "Sign Up" : "Login"}</Link>
      </center>
    </Box>
  );
};

export default SignForm;
