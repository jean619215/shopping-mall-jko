import styled from "styled-components";
import { IconButton } from "../../elements/Button";

export const HeaderStyled = styled("div")`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBlock = styled("div")`
  display: flex;
  padding: 10px 50px;
`;

export const HeaderButton = styled(IconButton)`
  position: absolute;
  margin: 8px;
  left: 0;
`;
