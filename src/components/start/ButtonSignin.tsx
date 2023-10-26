"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export const ButtonSignin = () => {
  return (
    <Button variant="contained" onClick={() => signIn()}>
      Login
    </Button>
  );
};
