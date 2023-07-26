import { IconButton, Snackbar } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { NotifyContext } from "../context/notify-provider";
import CloseIcon from "@mui/icons-material/Close";

interface ISnackbarProps {
  children?: ReactNode;
}

const CustomSnackbar: FC<ISnackbarProps> = ({ children }) => {
  const { message, clearNotify } = useContext(NotifyContext);
  return (
    <>
      {children}
      <Snackbar
        open={message !== ""}
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={clearNotify}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
};

export default CustomSnackbar;
