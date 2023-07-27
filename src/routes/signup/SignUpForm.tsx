// TODO: refactor
import { Box, Button } from "@mui/material";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../routes/routes";
import { FC, useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/user/userSlice";
import { SnackContext } from "../../context/snack-provider";

interface ISignInFormProps {}

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

const SignForm: FC<ISignInFormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setSnack } = useContext(SnackContext);

  const formik = useFormik({
    initialValues: {
      name: "name",
      email: "email@example.com",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("https:localhost:5001/api/Users", values)
        .then((res) => {
          if (res.status === 200) {
            dispatch(
              add({
                name: res.data.data.username,
                email: res.data.data.email,
              }),
            );
            setSnack({
              message: `Welcome ${res.data.data.name}`,
              severity: "success",
            });
            navigate(ROOT);
          }
        })
        .catch((e) => {
          console.error(e);
          setSnack({ message: e.message, severity: "error" });
        });
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
};

export default SignForm;
