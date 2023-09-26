import { Divider, Typography } from "@mui/material";
import {
  MyBottomNavigation,
  MyDrawer,
  MyLink,
  MyTabs,
} from "@/components/navigation";
import { Mooli } from "next/font/google";
import { MyMenu } from "@/components/navigation/MyMenu";

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
      <MyLink />
      <MyMenu />
      <MyTabs />
    </div>
  );
}
