"use client";
import { TextField, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

export const MyTextfield = () => {
  const [name, setName] = useState("");
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Email"
      variant="outlined"
      placeholder="Email"
      size="medium"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChangeInput(event)
      }
      //   margin="none"
      //   fullWidth
      //   error
      //   type="password"
      //   helperText="Field required"
      //   multiline
      /* icon dentro */
      /* InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }} */
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
};
