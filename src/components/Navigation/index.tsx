import { NavigationStyled } from "./styled";

const Navigation = ({ children }: { children?: React.ReactNode }) => {
  return <NavigationStyled>{children}</NavigationStyled>;
};

export default Navigation;
