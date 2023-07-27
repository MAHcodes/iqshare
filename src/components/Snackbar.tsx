import { Alert, IconButton, Snackbar } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { SnackContext } from "../context/snack-provider";
import CloseIcon from "@mui/icons-material/Close";

interface ISnackbarProps {
  children?: ReactNode;
}

const CustomSnackbar: FC<ISnackbarProps> = ({ children }) => {
  const {
    message,
    severity,
    clearSnack: clearNotify,
  } = useContext(SnackContext);
  return (
    <>
      {children}
      <Snackbar
        open={message !== ""}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={clearNotify}
            sx={{ ml: 1 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
