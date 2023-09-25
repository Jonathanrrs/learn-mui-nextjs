"use client";
import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, LocationOn } from "@mui/icons-material";

export const MyBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};
