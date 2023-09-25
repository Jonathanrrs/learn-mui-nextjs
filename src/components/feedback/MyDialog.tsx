"use client";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
} from "@mui/material";

/* como modal */
export const MyDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
};

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" scroll="paper">
      <DialogTitle>Set backup account</DialogTitle>
      {/* <List sx={{ pt: 0 }}></List> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running. Let Google
          help apps determine location. This means sending anonymous location
          data to Google, even when no apps are running. Let Google help apps
          determine location. This means sending anonymous location data to
          Google, even when no apps are running. Let Google help apps determine
          location. This means sending anonymous location data to Google, even
          when no apps are running. Let Google help apps determine location.
          This means sending anonymous location data to Google, even when no
          apps are running. Let Google help apps determine location. This means
          sending anonymous location data to Google, even when no apps are
          running. Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running. Let
          Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running. Let Google
          help apps determine location. This means sending anonymous location
          data to Google, even when no apps are running. Let Google help apps
          determine location. This means sending anonymous location data to
          Google, even when no apps are running. Let Google help apps determine
          location. This means sending anonymous location data to Google, even
          when no apps are running.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
