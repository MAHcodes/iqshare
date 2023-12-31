import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import PatternBackground from "../../components/PatternBackground";
import logo from "/logo.svg";
import SignUpContainer from "./SignUpContainer";

const SignIn = () => {
  return (
    <PatternBackground>
      <Card sx={{ width: "100%", maxWidth: "450px" }}>
        <CardHeader
          title="IQShare"
          avatar={
            <Avatar
              src={logo}
              variant="square"
              sx={{
                width: 32,
                height: 32,
              }}
            />
          }
        />

        <Typography sx={{ textAlign: "center" }}>Sign Up</Typography>

        <CardContent>
          <SignUpContainer />
        </CardContent>
      </Card>
    </PatternBackground>
  );
};

export default SignIn;
