import { FC, ReactNode, useContext, useEffect } from "react";
import { SnackContext } from "../context/snack-provider";
import Loading from "./Loading";

interface IAxiosHandlerProps {
  error: string;
  success: string;
  loading: boolean;
  children: ReactNode;
}

const AxiosHandler: FC<IAxiosHandlerProps> = ({
  error,
  success,
  loading,
  children,
}) => {
  const { setSnack } = useContext(SnackContext);

  useEffect(() => {
    if (error) {
      setSnack({ message: error, severity: "error" });
      return;
    }
    if (success) {
      setSnack({ message: success, severity: "success" });
    }
  }, [error, success, setSnack]);

  return loading ? <Loading fullscreen /> : children;
};

export default AxiosHandler;
