import { useFormik } from "formik";
import WriteForm from "./WriteForm";
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";

const WriteContainer = () => {
  const { sendItBaby, source, loading, response, error } = useAxios({
    url: "/Posts",
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: [],
    },
    onSubmit: (values) => {
      console.log(values);
      sendItBaby({
        data: {
          title: values.title,
          description: values.description,
        },
      });
    },
  });

  useEffect(() => {
    console.log({ response, error, loading });
  }, [source, error, loading, response]);

  return loading ? <Loading fullscreen /> : <WriteForm formik={formik} />;
};

export default WriteContainer;
