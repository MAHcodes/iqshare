import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

const DefaultTextField: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{
        width: "100%",
        ...props.sx,
      }}
    />
  );
};

export default DefaultTextField;
