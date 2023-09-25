"use client";
import { Alert } from "@mui/material";

export const MyAlert = () => {
  return (
    <Alert severity="success" onClose={() => {}}>
      This is an error alert — check it out!
    </Alert>
  );
};
