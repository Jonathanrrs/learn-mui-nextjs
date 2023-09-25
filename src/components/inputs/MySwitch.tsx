"use client";
import { Switch } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export const MySwitch = () => {
  return <PinkSwitch {...label} color="warning" />;
};
