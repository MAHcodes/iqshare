import { ComponentType, HTMLAttributes, useContext, useEffect } from "react";
import { SnackContext } from "../../context/snack-provider";

const WithSnacks = <T extends HTMLAttributes<HTMLElement>>(
  Component: ComponentType<T>,
  error: string,
  success: string,
) => {
  const { setSnack } = useContext(SnackContext);

  useEffect(() => {
    error && setSnack({ message: error, severity: "error" });
  }, [error, setSnack]);

  useEffect(() => {
    success && setSnack({ message: success, severity: "error" });
  }, [success, setSnack]);

  const EnhancedWithSnacks = (props: T) => <Component {...props} />;
  return EnhancedWithSnacks;
};

export default WithSnacks;
