import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MyIconButton = () => {
  return (
    <IconButton aria-label="delete" size="large" color="error">
      <Delete />
    </IconButton>
  );
};
