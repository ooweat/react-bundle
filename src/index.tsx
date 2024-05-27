import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LIGHT_MODE_THEME } from "@src/@styles/theme";  //dark mode 확장성을 놓고 미리 만들어 놓음
import Home from "@src/pages/Home";
import LayoutContainer from "@src/components/Layout/LayoutContainer";
import GlobalStyle from "./@styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={LIGHT_MODE_THEME}>
      <GlobalStyle />
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LayoutContainer>
    </ThemeProvider>
  </BrowserRouter>
);
