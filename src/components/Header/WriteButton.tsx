import { WRITE } from "../../routes/routes";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const WriteButton = () => {
  const location = useLocation();
  const isWritePage = location.pathname === WRITE;

  if (isWritePage) return;

  return (
    <Button href={WRITE} variant="outlined" startIcon={<Edit />}>
      Write
    </Button>
  );
};

export default WriteButton;
