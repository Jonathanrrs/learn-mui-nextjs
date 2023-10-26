import { ButtonSignin } from "@/components/start";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  return (
    <Box>
      <Typography variant="h1">Start page</Typography>
      <ButtonSignin />
    </Box>
  );
}
