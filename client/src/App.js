import React from "react";

import ReactNotification from "react-notifications-component";

import Routes from "./routes";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    primary: {
      main: "#467fd0",
    },
    secondary: {
      main: "#467fd0",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReactNotification />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
