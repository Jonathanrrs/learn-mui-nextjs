import { Divider, Typography } from "@mui/material";
import {
  MyBottomNavigation,
  MyDrawer,
  MyLink,
  MyTabs,
} from "@/components/navigation";
import { MyMenu } from "@/components/navigation";
import { Mooli } from "next/font/google";

const mooli = Mooli({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function NavigationPage() {
  return (
    <div>
      <Typography variant="h1" fontFamily={mooli.style.fontFamily}>
        Navigation Page
      </Typography>
      {/* <Typography variant="h1">Fail</Typography> */}

      <MyBottomNavigation />
      <Divider />
      <MyDrawer />
      <MyLink />
      <MyMenu />
      <MyTabs />
    </div>
  );
}
