import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "./pages/Shop";
import CommodityDetail from "./pages/CommodityDetail";
import PATH from "./config/pathConfig";

const AppStyled = styled("div")`
  color: ${({ theme }) => theme.textColor.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Routes>
          <Route path={PATH.COMMODITY_DETAIL} element={<CommodityDetail />} />
          <Route path={PATH.SHOP} element={<Shop />} />
          <Route path="*" element={<Navigate replace to="/shop" />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
