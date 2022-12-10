import styled from "styled-components";

export const ShoppingCartModelStyled = styled("div")<{
  show?: boolean;
}>`
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
`;

export const ItemRow = styled("div")``;
