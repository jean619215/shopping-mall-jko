import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const AppStyled = styled("div")`
  color: ${({ theme }) => theme.textColor.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>Testststst</AppStyled>
    </ThemeProvider>
  );
}

export default App;
