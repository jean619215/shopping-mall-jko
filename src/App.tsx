import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "./pages/Shop";
import CommodityDetail from "./pages/CommodityDetail";
import PATH from "./config/pathConfig";
import { UserCartProvider } from "./lib/context/UserCartProvider";

const AppStyled = styled("div")`
  color: ${({ theme }) => theme.textColor.primary};
  display: flex;
  width: 100vw;
  height: ${window.innerHeight}px;
  background-color: black;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserCartProvider>
        <AppStyled>
          <Routes>
            <Route path={PATH.COMMODITY_DETAIL} element={<CommodityDetail />} />
            <Route path={PATH.SHOP} element={<Shop />} />
            <Route path={PATH.SHOP} element={<Navigate replace to="/shop" />} />
          </Routes>
        </AppStyled>
      </UserCartProvider>
    </ThemeProvider>
  );
}

export default App;
