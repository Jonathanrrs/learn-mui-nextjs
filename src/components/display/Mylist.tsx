"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox } from "@mui/icons-material";

export const Mylist = () => {
  return (
    <List>
        {/* mostrar algo al final de cada items de la lista */}
      <ListItem disablePadding /* secondaryAction={<p>a</p>} */>
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem> */}
    </List>
  );
};
