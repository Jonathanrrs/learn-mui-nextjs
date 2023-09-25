"use client";
import { Badge, Button, Divider } from "@mui/material";
import { Mail } from "@mui/icons-material";
import { useState } from "react";

export const MyBadge = () => {
  const [total, setTotal] = useState(0);
  return (
    <>
      <Badge badgeContent={total} color="secondary" variant="dot">
        <Mail color="action" />
      </Badge>
      <Divider />
      <Button
        variant="contained"
        color="warning"
        onClick={() => setTotal((prev) => prev + 1)}
      >
        More
      </Button>
    </>
  );
};
