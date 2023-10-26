"use client";
import LinkNext from "next/link";
import {
  CssBaseline,
  Box,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  // AppBar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import {
  TextFields as TextFieldsIcon,
  FindInPage as FindInPageIcon,
  ChatBubble as ChatBubbleIcon,
  Campaign as CampaignIcon,
  Navigation as NavigationIcon,
  FormatPaint as FormatPaintIcon,
  Square as SquareIcon,
} from "@mui/icons-material";
import { useSession, signOut } from "next-auth/react";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
  username: string | null;
}

const itemsNav = [
  {
    navTo: "/inputs",
    icon: <TextFieldsIcon />,
    title: "inputs",
  },
  {
    navTo: "/display",
    icon: <FindInPageIcon />,
    title: "display",
  },
  {
    navTo: "/feedback",
    icon: <ChatBubbleIcon />,
    title: "feedback",
  },
  {
    navTo: "/surfaces",
    icon: <CampaignIcon />,
    title: "surfaces",
  },
  {
    navTo: "/navigation",
    icon: <NavigationIcon />,
    title: "navigation",
  },
  {
    navTo: "/layoutmui",
    icon: <FormatPaintIcon />,
    title: "Layout",
  },
  {
    navTo: "/responsivemui",
    icon: <SquareIcon />,
    title: "Responsive",
  },
];

export const MyDrawerAlways = ({ children, username }: Props) => {
  const { data: session, status } = useSession();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Typography>Hola</Typography>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography variant="body2" textAlign="center">
          {username || "Sin información"}
        </Typography>
        <Divider />
        <List>
          {/*  {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          {itemsNav.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton href={item.navTo} LinkComponent={LinkNext}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {status === "authenticated" && (
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ width: "50%", alignSelf: "center", marginTop: "20px" }}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        )}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      >
        {children}
      </Box>
    </Box>
  );
};
