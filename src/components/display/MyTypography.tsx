import { Typography } from "@mui/material";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const MyTypography = () => {
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        textAlign="center"
        fontFamily={josefinSans.style.fontFamily}
      >
        Es un h1
      </Typography>
      <Typography variant="h2">Es un h2</Typography>
      <Typography variant="subtitle1">Es un subtitle1</Typography>
      <Typography variant="subtitle2">Es un subtitle2</Typography>
      <Typography variant="body1">Es un body 1</Typography>
      <Typography variant="body2">Es un body 2</Typography>
    </div>
  );
};
