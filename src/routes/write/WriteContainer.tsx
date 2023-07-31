import { useFormik } from "formik";
import WriteForm from "./WriteForm";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";

const WriteContainer = () => {
  const { sendItBaby, loading } = useAxios({
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

  return loading ? <Loading fullscreen /> : <WriteForm formik={formik} />;
};

export default WriteContainer;
