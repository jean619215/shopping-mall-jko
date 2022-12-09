import { WrapperStyled } from "./styled";

const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
