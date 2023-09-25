"use client";
import { Avatar, Chip } from "@mui/material";

export const MyChip = () => {
  return (
    <Chip
      avatar={
        <Avatar
          alt="TS"
          src="https://images.ecestaticos.com/68JXpASkO2UxnalnRk7Xx6QNYDU=/197x14:1369x893/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd0e%2F94c%2Fa18%2Fd0e94ca18ec7bc50dbfca932572ef450.jpg"
        />
      }
      label="Swift"
      variant="outlined"
      sx={{ cursor: "pointer" }}
    />
  );
};
