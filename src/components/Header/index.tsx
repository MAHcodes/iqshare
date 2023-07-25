import { styled } from "@mui/material";
import Logo from "../Logo";
import AccountMenu from "./AccountMenu";

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
      <AccountMenu />
    </StyledHeader>
  );
};

export default Header;
