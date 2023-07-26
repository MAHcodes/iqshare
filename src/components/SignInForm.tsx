import { Box, Button, Divider, TextFieldProps } from "@mui/material";
import TextField from "./TextField";
import { Link } from "react-router-dom";
import { SIGNIN, SIGNUP } from "../routes/routes";
import { FC } from "react";

interface IData {
  login: boolean;
  textFields: TextFieldProps[];
  action: () => void;
}

interface ISignInFormProps {
  data: IData;
}

const SignInForm: FC<ISignInFormProps> = ({ data }) => {
  const { textFields, login, action } = data;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".75rem",
        width: "100%",
      }}
    >
      {textFields.map((textField, idx) => (
        <TextField key={idx} {...textField} />
      ))}

      <Button
        sx={{ width: "100%" }}
        size="large"
        variant="contained"
        onClick={action}
      >
        {login ? "Log In" : "Sign Up"}
      </Button>

      <Divider>OR</Divider>

      <center>
        {login ? "no " : "have an "}
        account?&nbsp;
        <Link to={login ? SIGNUP : SIGNIN}>{login ? "Sign Up" : "Login"}</Link>
      </center>
    </Box>
  );
};

export default SignInForm;
