"use client";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MyButton = () => {
  /* sin variant es puro text */
  return (
    <Button
      variant="contained"
      color="success"
      // size="large"
      startIcon={<Delete />}
    >
      Contained
    </Button>
  );
};
