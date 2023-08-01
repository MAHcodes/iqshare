import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import ErrorIcon from "@mui/icons-material/Error";

interface IErrorProps {
  Icon?: SvgIconComponent;
  message: string;
  children?: ReactElement;
}

const Error: FC<IErrorProps> = ({ Icon, message, children }) => {
  const iconStyles = {
    color: "primary.main",
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      {Icon ? <Icon sx={iconStyles} /> : <ErrorIcon sx={iconStyles} />}
      <Typography>{message}</Typography>
      {children}
    </Box>
  );
};

export default Error;
