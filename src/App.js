import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  console.log(prefersDarkMode);
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          /*   spacing={{ xs: 0, sm: 2 }} */
        >
          <Sidebar
            setMode={setMode}
            mode={mode}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
