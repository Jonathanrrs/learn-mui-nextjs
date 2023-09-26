"use client";
import { Paper, Box, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MyStack = () => {
  return (
    <Box sx={{ width: 200 }} mt={5}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        // divider={<Divider orientation="vertical" flexItem  />}
        useFlexGap
        flexWrap="wrap"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
      </Stack>
    </Box>
  );
};
