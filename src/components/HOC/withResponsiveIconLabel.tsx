// FIXME:
/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import { Typography, TypographyProps, styled } from "@mui/material";
import { ReactNode } from "react";

const ResponsiveTxt = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const withResponsiveIconLabel = (Icon: ReactNode) => {
  return (props: TypographyProps) => {
    return (
      <>
        {Icon}
        <ResponsiveTxt
          {...props}
          sx={{
            display: "flex",
            ...props.sx,
          }}
        >
          {props.children}
        </ResponsiveTxt>
      </>
    );
  };
};

export default withResponsiveIconLabel;
