import { MyBottomNavigation, MyDrawer } from "@/components/navigation";
import { Divider, Typography } from "@mui/material";
import { Mooli } from "next/font/google";

const mooli = Mooli({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function NamePage() {
  return (
    <div>
      <Typography variant="h1" fontFamily={mooli.style.fontFamily}>
        Navigation Page
      </Typography>
      <MyBottomNavigation />
      <Divider />
      <MyDrawer />
    </div>
  );
}
