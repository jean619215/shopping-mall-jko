import { HeaderStyled } from "./styled";

const Header = ({ children }: { children?: React.ReactNode }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
