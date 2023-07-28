import { useNavigate } from "react-router-dom";
import { ROOT } from "../../routes/routes";
import { FC, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/user/userSlice";
import { SnackContext } from "../../context/snack-provider";
import useAxios from "../../hooks/useAxios";
import SignUpForm from "./SignUpForm";

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

const SignUpContainer: FC<ISignInFormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setSnack } = useContext(SnackContext);

  const { loading, error, response, sendItBaby } = useAxios({
    url: "/api/Users",
    method: "POST",
  });

  useEffect(() => {
    if (error) {
      setSnack({ message: error, severity: "error" });
    }
    if (!loading && !error) {
      if (response?.status === 200) {
        dispatch(
          add({
            name: response.data.data.username,
            email: response.data.data.email,
          }),
        );
        setSnack({
          message: `Welcome ${response.data.data.username}`,
          severity: "success",
        });
        navigate(ROOT);
      }
    }
  }, [error, loading, response, setSnack, dispatch, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "name",
      email: "email@example.com",
    },
    validate,
    onSubmit: (values) => {
      sendItBaby({
        name: values.name,
        email: values.email,
      });
      console.log({
        error,
        loading,
        response,
      });
      if (!loading && response?.status === 200) {
        dispatch(
          add({
            name: response.data.data.username,
            email: response.data.data.email,
          }),
        );
        setSnack({
          message: `Welcome ${response.data.data.username}`,
          severity: "success",
        });
        navigate(ROOT);
      }
    },
  });

  return <SignUpForm formik={formik} />;
};

export default SignUpContainer;
