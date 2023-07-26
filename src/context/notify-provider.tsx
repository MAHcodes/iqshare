import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const NotifyContext = createContext<{
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  clearNotify: () => void;
}>({
  message: "",
  setMessage: () => {},
  clearNotify: () => {},
});

const NotifyProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");

  const clearNotify = () => {
    setMessage("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <NotifyContext.Provider value={{ message, setMessage, clearNotify }}>
      {children}
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
