"use client";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { pink } from "@mui/material/colors";

export const MyRadioGroup = () => {
  const [option, setOption] = useState("");
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
        row
        onChange={(value) => setOption(value.target.value)}
      >
        <FormControlLabel
          value="female"
          control={<Radio color="error" />}
          label="Female"
          labelPlacement="top"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          //   checked={true}
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};
