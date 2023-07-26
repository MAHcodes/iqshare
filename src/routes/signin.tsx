import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import PatternBackground from "../components/PatternBackground";
import logo from "/logo.svg";
import SignInForm from "../components/SignInForm";
import { useLocation } from "react-router-dom";
import { SIGNIN } from "./routes";

const SignIn = () => {
  const location = useLocation();
  const method = location.pathname === SIGNIN ? "Log In" : "Sign Up";

  return (
    <PatternBackground>
      <Card sx={{ width: "100%", maxWidth: "450px" }}>
        <CardHeader
          title="IQShare"
          avatar={
            <Avatar
              src={logo}
              sx={{
                borderRadius: 0,
                width: 32,
                height: 32,
              }}
            />
          }
        />

        <Typography sx={{ textAlign: "center" }}>{method}</Typography>

        <CardContent>
          <SignInForm
            data={{
              login: location.pathname === SIGNIN,
              textFields: [
                {
                  label: "Name",
                  placeholder: "John Doe",
                },
                {
                  label: "Email",
                  placeholder: "email@example.com",
                },
              ],
              action: () => {},
            }}
          />
        </CardContent>
      </Card>
    </PatternBackground>
  );
};

export default SignIn;
