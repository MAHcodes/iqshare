import { Button, Grid } from "@mui/material";
import TextField from "./TextField";

const SignInForm = () => {
  return (
    <Grid container columns={2} spacing={1}>
      <Grid item xs={2}>
        <TextField label="Name" placeholder="John Doe" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Email" placeholder="email@example.com" />
      </Grid>
      <Grid item xs={1}>
        <Button size="large" variant="contained">
          test
        </Button>
      </Grid>
      <Grid item xs={1}>
        <TextField label="Email" placeholder="email@example.com" />
      </Grid>
    </Grid>
  );
};

export default SignInForm;
