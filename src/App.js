import { Add, Settings } from "@mui/icons-material";
import { Button, Typography, styled } from "@mui/material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightcoral",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Settings />}
      >
        Settings
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<Add />}
      >
        Add new post
      </Button>
      <Button
        variant="outlined"
        disabled
        size="small"
      >
        Outlined
      </Button>
      <Typography
        variant="h3"
        component="p"
      >
        p tag here! hello from typography
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightcoral",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My unique button
      </Button>
      <BlueButton>Other button</BlueButton>
    </div>
  );
}

export default App;
