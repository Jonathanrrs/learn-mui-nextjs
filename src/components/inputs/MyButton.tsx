"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MyButton = () => {
  const router = useRouter();
  const handleNavigate: () => void = () => router.push("/display");

  /* sin variant es puro text */
  return (
    <Button
      variant="contained"
      color="success"
      // size="large"
      startIcon={<Delete />}
      // onClick={() => router.push("/display")}
      onClick={handleNavigate}
    >
      Contained
    </Button>
  );
};
