import { Avatar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import withResponsiveIconLabel from "./HOC/withResponsiveIconLabel";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const PrimaryTxt = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const SecondaryTxt = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "medium",
}));

const ResponsiveLogo = withResponsiveIconLabel(
  <Avatar sx={{ borderRadius: 0 }} src={logo} alt="iqshare logo" />,
);

const Logo = () => (
  <StyledLink to="/">
    <ResponsiveLogo variant="h5">
      <PrimaryTxt>IQ</PrimaryTxt>
      <SecondaryTxt>Share</SecondaryTxt>
    </ResponsiveLogo>
  </StyledLink>
);

export default Logo;
