import { useNavigate } from "react-router-dom";
import { ROOT } from "../../routes/routes";
import { FC, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/user/userSlice";
import useAxios from "../../hooks/useAxios";
import SignUpForm from "./SignUpForm";
import AxiosHandler from "../../components/AxiosHandler";

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

  const { loading, error, response, sendItBaby, source } = useAxios({
    url: "/Users",
    method: "POST",
  });
  const ok = response?.status === 200;
  const success = ok && response?.data.message;

  useEffect(() => {
    if (response?.status === 200) {
      dispatch(
        add({
          id: response.data.data.id,
          name: response.data.data.username,
          email: response.data.data.email,
        }),
      );
      navigate(ROOT);
    }

    return () => source?.cancel();
  }, [dispatch, navigate, response, source]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      sendItBaby({
        data: {
          name: values.name,
          email: values.email,
        },
      });
    },
  });

  return (
    <AxiosHandler error={error} loading={loading} success={success}>
      <SignUpForm formik={formik} />
    </AxiosHandler>
  );
};

export default SignUpContainer;
