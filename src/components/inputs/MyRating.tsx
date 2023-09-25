"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export const MyRating = () => {
  const [value, setValue] = useState<number | null>(0);
  // const [hover, setHover] = useState(-1);
  return (
    <Box>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        precision={0.5}
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        /* onChangeActive={(event, newHover) => {
          setHover(newHover);
        }} */
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[value]}</Box>}
    </Box>
  );
};
