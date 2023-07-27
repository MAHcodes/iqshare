import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import PatternBackground from "../../components/PatternBackground";
import logo from "/logo.svg";
import SignForm from "../../components/SignForm";
import { useLocation } from "react-router-dom";
import { SIGNIN } from "../routes";

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
              variant="square"
              sx={{
                width: 32,
                height: 32,
              }}
            />
          }
        />

        <Typography sx={{ textAlign: "center" }}>{method}</Typography>

        <CardContent>
          <SignForm login={location.pathname === SIGNIN} />
        </CardContent>
      </Card>
    </PatternBackground>
  );
};

export default SignIn;
