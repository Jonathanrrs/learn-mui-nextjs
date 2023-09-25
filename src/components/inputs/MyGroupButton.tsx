"use client";
import { Button, ButtonGroup } from "@mui/material";

export const MyGroupButton = () => {
  return (
    <ButtonGroup variant="text" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};
