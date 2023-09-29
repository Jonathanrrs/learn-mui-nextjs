"use client";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const MyBasicMedia = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box>
      <span>{`(min-width:900px) matches: ${matches}`}</span>
      <Typography variant="body1" color={matches ? "blue" : "black"}>
        Esto debe ser de color azul {"> 900px"}{" "}
      </Typography>
    </Box>
  );
};
