import {
  MyAccordion,
  MyAppBar,
  MyAppBarResponsive,
  MyCard,
  MyCardPro,
} from "@/components/surfaces";
import { Typography } from "@mui/material";
import { Mooli } from "next/font/google";


const mooli = Mooli({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function SufarcesPage() {
  return (
    <div>
      <Typography variant="h1" fontFamily={mooli.style.fontFamily}>
        Surfaces Page
      </Typography>
      <MyAccordion />
      <MyAppBar />
      <MyAppBarResponsive />
      <MyCard />
      <MyCardPro />
    </div>
  );
}
