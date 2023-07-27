import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type severityType = "error" | "warning" | "info" | "success" | undefined;
type snackType = { message: string; severity?: severityType };

export const SnackContext = createContext<{
  message: string;
  severity: severityType;
  setSnack: Dispatch<SetStateAction<snackType>>;
  clearSnack: () => void;
}>({
  message: "",
  severity: undefined,
  setSnack: () => {},
  clearSnack: () => {},
});

const snackInitialState = { message: "", severity: undefined };
const SNACK_DURATION = 3000; // ms

const SnackProvider = ({ children }: { children: ReactNode }) => {
  const [snack, setSnack] = useState<snackType>(snackInitialState);

  const clearSnack = () => {
    setSnack(snackInitialState);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearSnack();
    }, SNACK_DURATION);

    return () => clearTimeout(timeout);
  }, [snack]);

  return (
    <SnackContext.Provider
      value={{
        message: snack.message,
        severity: snack.severity,
        setSnack,
        clearSnack,
      }}
    >
      {children}
    </SnackContext.Provider>
  );
};

export default SnackProvider;
