import { Box, Button, styled } from "@mui/material";
import Logo from "../Logo";
import AccountMenu from "./AccountMenu";
import { WRITE } from "../../routes/routes";
import { Edit } from "@mui/icons-material";

const StyledHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginTop: theme.spacing(1),
}));

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button href={WRITE} variant="outlined" startIcon={<Edit />}>
          Write
        </Button>
        <AccountMenu />
      </Box>
    </StyledHeader>
  );
};

export default Header;
