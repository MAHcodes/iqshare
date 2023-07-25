import { styled } from "@mui/material";
import Logo from "../Logo";

const StyledHeader = styled("header")(({ theme }) => ({
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
    </StyledHeader>
  );
};

export default Header;
