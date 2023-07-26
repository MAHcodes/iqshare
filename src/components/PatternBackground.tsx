import { Box, styled } from "@mui/material";
import patterns from "../assets/patterns.svg";
import { FC, ReactNode } from "react";

const Background = styled("div")({
  position: "fixed",
  inset: 0,
  zIndex: -1,
  background: "black",
});

const Pattern = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
  opacity: 0.15,
});

const Shadow = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  boxShadow: "inset 0 0 200px 75px black",
  zIndex: 1,
});

interface IPatternBackgroundProps {
  children: ReactNode;
}

const PatternBackground: FC<IPatternBackgroundProps> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Background>
        <Shadow />
        <Pattern src={patterns} alt="pattern image" />
      </Background>
      {children}
    </Box>
  );
};

export default PatternBackground;
