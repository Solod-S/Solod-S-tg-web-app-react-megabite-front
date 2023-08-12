import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global.style";
import { theme } from "./constants/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter
      // basename="tg-web-app-react-megabite-front"
      >
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
