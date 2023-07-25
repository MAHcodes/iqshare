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

const SignIn = () => {
  return (
    <PatternBackground>
      <Card>
        <CardHeader
          title="Welcome to IQShare!"
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

        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>

        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </PatternBackground>
  );
};

export default SignIn;
